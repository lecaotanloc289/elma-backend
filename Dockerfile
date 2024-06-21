FROM node:20-alpine

WORKDIR /app

COPY package*.json ./
RUN npm ci
COPY . .

CMD ["node", "app.js"]

# docker run --name backend -p 8080:8080 -d .