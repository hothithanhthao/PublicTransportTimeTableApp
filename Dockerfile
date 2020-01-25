# Select the image to use
FROM node

## Install dependencies in the root of the Container
COPY ["package.json", "package-lock.json*", "./"]
ENV NODE_PATH=/node_modules
ENV PATH=$PATH:/node_modules/.bin
RUN npm install

# Add project files to /app route in Container
ADD . /app

# Set working dir to /app
WORKDIR /app

# expose port 3000
EXPOSE 3000