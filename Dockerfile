# Use the Node.js image to build the React app
FROM node:14 AS build

# Set the working directory
WORKDIR /card-shows

# Copy package.json and package-lock.json (if it exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code
COPY . .

# Build the app for production
RUN npm run build

# Use Nginx to serve the static files
FROM nginx:alpine

# Copy the build files from the build stage to Nginx's public folder
COPY --from=build /card-shows/build /usr/share/nginx/html

# Expose the port that Nginx runs on
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
