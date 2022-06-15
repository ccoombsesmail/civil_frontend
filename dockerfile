FROM node:16.14.0

ENV NODE_ENV=production
ENV REACT_APP_CLERK_FRONTEND_API=clerk.genuine.leech-38.lcl.dev

EXPOSE 8080

WORKDIR /

COPY ["package.json", "package-lock.json*", "./"]


RUN npm install --production


COPY . .


CMD ["node", "server.mjs" ]