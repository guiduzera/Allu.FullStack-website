FROM node:16-alpine

WORKDIR /backend/api

COPY package.json ./

RUN ["npm", "i"]

ENV NODE_OPTIONS=--max-http-header-size=30000

COPY ./ ./

EXPOSE 3001

CMD ["npm", "run", "dev"]
