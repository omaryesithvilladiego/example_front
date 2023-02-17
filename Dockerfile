FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install --force

RUN npm

COPY . .



CMD ["npm", "build"]




