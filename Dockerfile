#set the base image to create the image for the react app
FROM node:alpine

#make this the working directory, in our case /personal-portfolio
WORKDIR /personal-portfolio

#copy package.json to docker image file system
COPY package*.json ./

#install dependencies
RUN npm install

#copy current app folder to the destination of the container's current directory | COPY source destination
COPY . .

#expose port 5173
EXPOSE 3000

#run the app
CMD npm run dev