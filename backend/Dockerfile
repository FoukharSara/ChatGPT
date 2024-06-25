FROM node:18-alpine3.14

WORKDIR /app


RUN npm install -g nodemon@2.0.18

RUN npm install -g ts-node

RUN npm install -g jest

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["nodemon", "/backend/app.ts"]
