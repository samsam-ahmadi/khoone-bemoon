FROM node:12-alpine

WORKDIR /app
# COPY package.json yarn.lock ./
COPY . ./


RUN yarn
# RUN yarn --production --frozen-lockfile

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT 80
EXPOSE 80

RUN yarn run build

CMD ["yarn", "start"]
