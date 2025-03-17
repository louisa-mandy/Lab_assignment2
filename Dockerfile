# Use an official Node.js image
FROM node:18-alpine 

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the Vite default port
EXPOSE 5173

# Correct CMD syntax
CMD ["npm", "run", "dev"]
