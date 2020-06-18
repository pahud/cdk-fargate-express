FROM node:alpine

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY src/app.js ./

COPY welcome.html ./

EXPOSE 80
CMD npm start
