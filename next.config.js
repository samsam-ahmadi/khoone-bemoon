const withSass = require("@zeit/next-sass");
const withFonts = require("next-fonts");
const withOffline = require("next-offline");
const path = require("path");
const NextWorkboxPlugin = require("next-workbox-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const withTypescript = require("@zeit/next-typescript");
module.exports = withTypescript({
  webpack(config, options) {
    return config;
  },
});

module.exports = (phase, nextConfig = {}) =>
  withSass(
    withFonts(
      withOffline({
        devSwSrc: "/public/service-worker.js",
        webpack: (config, { isServer, buildId, dev, defaultLoaders }) => {
          const workboxOptions = {
            swDest: "/public/workbox/sw.js",
            clientsClaim: true,
            skipWaiting: true,
            globPatterns: [".next/public/*", ".next/public/commons/*"],
            modifyUrlPrefix: {
              ".next": "/_next",
            },
            runtimeCaching: [
              {
                urlPattern: "/",
                handler: "networkFirst",
                options: {
                  cacheName: "html-cache",
                },
              },
              {
                urlPattern: /[^3]\/rooms\//,
                handler: "networkFirst",
                options: {
                  cacheName: "html-cache",
                },
              },
              {
                urlPattern: new RegExp("TODO ADD URL"),
                handler: "staleWhileRevalidate",
                options: {
                  cacheName: "api-cache",
                  expiration: {
                    maxEntries: 150,
                    maxAgeSeconds: 24 * 60 * 60, // 1 day
                  },
                  cacheableResponse: {
                    statuses: [200],
                  },
                },
              },
              {
                urlPattern: /.*\.(?:png|jpg|jpeg|svg|gif)/,
                handler: "cacheFirst",
                options: {
                  cacheName: "image-cache",
                  cacheableResponse: {
                    statuses: [0, 200],
                  },
                },
              },
            ],
          };
          config.resolve.alias = {
            ...(config.resolve.alias || {}),
          };
          if (!isServer) {
            config.plugins.push(
              new NextWorkboxPlugin({
                buildId,
                ...workboxOptions,
              }),
            );
          }
          config.module.rules.push({
            test: /.svg$/,
            use: ["@svgr/webpack"],
          });
          config.module.rules = config.module.rules.map(rule => {
            if (rule.loader === "babel-loader") {
              rule.options.cacheDirectory = false;
            }
            return rule;
          });

          if (config.resolve.plugins) {
            config.resolve.plugins.push(new TsconfigPathsPlugin());
          } else {
            config.resolve.plugins = [new TsconfigPathsPlugin()];
          }
          return config;
        },
        target: "serverless",
      }),
    ),
  );
