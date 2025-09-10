# Use an offical node.js runtime as a parent image
FROM node:22-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json .
# . here is the working directory

# Install the dependiency
RUN npm Install

# Copy the rest of the application node
COPY . .
# first dot currect folder --> TO --> second dot Working dir

# Expose the port that the app runs on
EXPOSE 5003
# Telling the container where to look for in isolation

# Deine the command to run the app
CMD ["node","/src/server.js"]