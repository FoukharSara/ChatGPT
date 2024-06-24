FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm install -g typescript

RUN tsc

EXPOSE 8080

CMD ["node", "dist/index.js"]