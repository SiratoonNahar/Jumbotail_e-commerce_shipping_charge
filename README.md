# Jumbotail_e-commerce_shipping_charge

This application helps to calculate shipping charges for a B2B e-commerce marketplace, taking into consideration seller, customer, warehouse, delivery speed, and transport mode. It uses Node.js, Express, and MongoDB.

## Prerequisites

Before you start, make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (If not, please follow the installation steps below)
- [MongoDB](https://www.mongodb.com/try/download/community) (for local development)

## Installing Node.js and MongoDB (if not installed)

### Step 1: Install Node.js

If you don't have Node.js installed, follow these steps:

1. Visit the [Node.js download page](https://nodejs.org/).
2. Download and install the latest stable version for your operating system.
3. After installation, verify Node.js and npm are installed correctly by running the following commands in your terminal:

```bash
   node -v
   npm -v


1. Clone the repository to your local machine:

git clone https://github.com/jumbotail_e-commerce_shipping_charge.git
cd jumbotail_e-commerce_shipping_charge

2. Install the required dependencies:
npm install

3. Create a .env file in the root of the project and add the following environment variables:
MONGODB_URL=mongodb://localhost:27017/Jumbotail_db
PORT=5000

4. npm start


