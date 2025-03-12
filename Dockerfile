# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the project
COPY . .

# Build the application
RUN npm run build

# Stage 2: Run the Next.js production server
FROM node:18-alpine

WORKDIR /app

# Copy package files to install only production dependencies
COPY package*.json ./
RUN npm install --production

# Copy build output and static files from the builder stage
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

# Expose the port the app runs on
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
