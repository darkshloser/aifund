# Use Node.js base image
FROM node:18-alpine

WORKDIR /app

# Copy package files first for caching
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Build Next.js app
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Start the app
CMD ["npm", "start"]