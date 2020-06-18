FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY src/app.js ./

COPY welcome.html ./

EXPOSE 80

CMD npm start
