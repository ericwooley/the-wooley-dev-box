FROM node:14-alpine
WORKDIR /usr/src/app
COPY package.json .
RUN yarn install
COPY main.js .
ENTRYPOINT [ "node", "main.js" ]
