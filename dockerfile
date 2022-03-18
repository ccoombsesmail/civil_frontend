FROM node:16.14.0

ENV NODE_ENV=production

EXPOSE 5000 80

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production


COPY . .


CMD ["node", "server.mjs" ]