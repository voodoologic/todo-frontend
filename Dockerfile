# Use the official Node.js image as a base
FROM node:14

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files first to leverage Docker's caching
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the development port
EXPOSE 4200

# Command to run the app in development mode
CMD ["yarn", "start"]
