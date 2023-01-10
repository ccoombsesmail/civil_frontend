FROM node:16.18.0

# ENV NODE_ENV=production
ENV REACT_APP_CLERK_FRONTEND_API=clerk.genuine.leech-38.lcl.dev

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

RUN npm run build-vite



CMD ["node", "server.mjs"]