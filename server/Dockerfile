FROM node:21-alpine

WORKDIR /app

RUN npm i -g nodemon

COPY package* .
RUN npm i

COPY ./prisma .
RUN npx prisma generate

COPY . .


EXPOSE 3001


CMD [ "npm","run","dev" ]
