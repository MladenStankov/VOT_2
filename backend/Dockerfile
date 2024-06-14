FROM node:latest AS dependencies
WORKDIR /app

COPY package*.json ./

RUN npm install


FROM node:latest
WORKDIR /app

COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

EXPOSE 5000

CMD ["npm", "run", "start"]