# Build stage
FROM node:18-alpine as build-stage

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json yarn.lock ./

# Install dependencies
RUN yarn && \
    npm install --save-dev @babel/eslint-parser @babel/core --legacy-peer-deps

# Copy all files
COPY . .

# Build the app
RUN yarn dev

# Production stage
FROM nginx:stable-alpine as production-stage

# Copy built files from build stage to nginx
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]