FROM --platform=linux/amd64 node:16.18.1

ENV NODE_ENV=production

EXPOSE 8080

WORKDIR /
# ENV NODE_OPTIONS=--max-old-space-size=4096

COPY . .


# RUN npm config set strict-ssl false


# RUN yarn config set "strict-ssl" false -g
# RUN yarn install --production=false




CMD ["node", "server.mjs"]