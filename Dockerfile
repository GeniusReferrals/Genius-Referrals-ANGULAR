FROM node:18-alpine

WORKDIR /sdk
COPY package.json package-lock.json* ./
RUN npm install
COPY . .
RUN npm run build