FROM node:16.13.1-alpine as ui-build

ARG GIT_PAT
ENV NPM_TOKEN=$GIT_PAT

WORKDIR /app
COPY ./package*.json ./
COPY . ./

RUN npm i && npm run build

FROM nginx:1.21.6-alpine

#### Environment variables
ENV JSFOLDER=/usr/share/nginx/html/static/js/*.js
RUN apk add --no-cache dumb-init bash
COPY ./start-nginx.sh /usr/bin/start-nginx.sh

RUN chmod +x /usr/bin/start-nginx.sh
WORKDIR /usr/share/nginx/html
COPY --from=ui-build ./app/build .
COPY  ./nginx.conf  /etc/nginx/conf.d/default.conf

RUN find /usr/share/nginx/html -maxdepth 1 -type f -exec chmod 0644 {} \;

CMD ["dumb-init", "start-nginx.sh"]