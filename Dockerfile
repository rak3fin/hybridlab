# Dockerfile.prod

# Use a minimal Node image
FROM node:18-alpine

# Set working dir
WORKDIR /app

# 1) Copy package manifests and install only production deps
COPY package.json package-lock.json ./
RUN npm ci --production

# 2) Copy your locally-built Next.js output
#    (Make sure you've run `npm run build` on your host first!)
COPY .next ./.next
COPY public ./public


# 3) Expose & run
EXPOSE 3000
CMD ["npm", "start"]
