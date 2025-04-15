FROM node:18

WORKDIR /app

ENV NODE_OPTIONS=--no-optional

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173
CMD ["npm", "run", "dev"]

