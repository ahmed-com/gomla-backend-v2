FROM strapi/base:latest

ENV NODE_ENV production

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 1337

# RUN npm run build

CMD ["npm", "start"]