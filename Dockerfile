FROM node:17-alpine

WORKDIR /fyp-fe

COPY package.json .

RUN yarn

COPY . .

EXPOSE 3000

CMD ["yarn","run","dev"]
