FROM node:16-alpine
# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app
# Installing dependencies
COPY package*.json ./
RUN npm install
# Copying source files
COPY . .
# Building app
RUN npm run build
# Running the app
EXPOSE 80
CMD [ "npm", "run", "start", "-p", "80"]