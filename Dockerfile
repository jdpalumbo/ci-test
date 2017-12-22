FROM node:8.9.3
MAINTAINER Riskalyze
WORKDIR /app

ARG ARG_LISTEN_PORT=80
ENV LISTEN_PORT=${ARG_LISTEN_PORT}

COPY package.json /app/package.json
COPY package-lock.json /app/package-lock.json
RUN npm install

COPY tsconfig.json /app/tsconfig.json
COPY tslint.json /app/tslint.json
COPY src /app/src

RUN npm run build
RUN rm -r /app/src
RUN rm -r /app/tslint.json
RUN rm -r /app/tsconfig.json

EXPOSE $LISTEN_PORT
ENTRYPOINT ["npm", "start"]