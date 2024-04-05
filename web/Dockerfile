FROM node:20-alpine3.18
RUN mkdir -p /opt/app
WORKDIR /opt/app
COPY package*.json ./
RUN npm i --omit=dev
COPY . .
EXPOSE 8080
CMD [ "node", "index.js"]