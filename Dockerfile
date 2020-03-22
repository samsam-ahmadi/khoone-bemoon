FROM node:12-alpine

WORKDIR /app
# COPY package.json yarn.lock ./
COPY . ./


RUN yarn
# RUN yarn --production --frozen-lockfile

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT 3000
EXPOSE 3000

RUN yarn run build

CMD ["yarn", "start"]