# Base image with Node.js
FROM node:19.9.0 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the app's source code
COPY . .

ENV NODE_OPTIONS="--max-old-space-size=1024" 

# Build the React app
RUN npm run build

# Stage 2: Serve the app using a lightweight HTTP server
FROM nginx

COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built app from the previous stage
COPY --from=build /app/dist /usr/share/nginx/html/

# Expose port 80
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]

