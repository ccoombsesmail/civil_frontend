FROM node:16.18.0

# ENV NODE_ENV=production

EXPOSE 8080

WORKDIR /
ENV NODE_OPTIONS=--max-old-space-size=4096

RUN npm i -g vite

# COPY ["package.json", "vite.config.ts", "./"]
COPY . .

# RUN npm config set strict-ssl false


# RUN yarn config set "strict-ssl" false -g
# RUN yarn install --production=false


# COPY . .

RUN npm run build-prod



CMD ["node", "server.mjs"]