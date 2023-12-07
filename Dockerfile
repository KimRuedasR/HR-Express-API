FROM node:21

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

# Copy SSL certificate
COPY ./certs /usr/src/app/certs

EXPOSE 3000
CMD [ "node", "index.js" ]
