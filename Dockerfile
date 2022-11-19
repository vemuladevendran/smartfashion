FROM node:18-alpine
WORKDIR /usr/src/app
COPY package.json package-lock.json ./
RUN npm install -g @angular/cli
RUN npm install
COPY . .
RUN ng serve
EXPOSE 4200