# Use the official Node.js image as a base
FROM node:18

# Install Ember CLI globally
RUN yarn global add ember-cli

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and yarn.lock files first to leverage Docker's caching
COPY package.json yarn.lock ./

COPY .yarnrc.yml ./
COPY .yarn ./.yarn
# Install dependencies
RUN yarn install

# Copy the rest of the application code
COPY . .

# Expose the development port
EXPOSE 4200

# Command to run the app in development mode
CMD ["yarn", "start"]
