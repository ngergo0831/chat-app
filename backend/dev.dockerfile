FROM node:alpine
WORKDIR /app
COPY *.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 5000
CMD npm run dev
