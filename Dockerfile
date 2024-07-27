FROM node:22-alpine as builder
WORKDIR /app
COPY package.json package-lock.json jsconfig.json ./
RUN npm ci
COPY jsconfig.json ./
COPY public/ ./public
COPY src/ ./src
RUN npm run build

FROM nginx:1.27.0
COPY --from=builder /app/build /usr/share/nginx/html
