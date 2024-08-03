# Crypto Tracker

**Note:** This project uses the free public API of CoinGecko, which updates the prices of coins every minute. Therefore, the data visible will be updated every minute.

## Table of Contents
- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Technologies Used](#technologies-used)

## Introduction
Crypto Tracker is a web application that tracks and displays the live prices of various cryptocurrencies using the CoinGecko API. The application consists of a backend server and a frontend client. The backend uses Server-Sent Events (SSE) to send data to the client every minute.

## Installation

1. **Clone the GitHub repository:**
    ```sh
    git clone https://github.com/iNew-b-yte/crypto-tracker.git
    ```

2. **Navigate to the project directory:**
    ```sh
    cd crypto-tracker
    ```

3. **Setup the Backend:**
    - Navigate to the backend directory:
      ```sh
      cd crypto-tracker-backend
      ```
    - Install the dependencies:
      ```sh
      npm install
      ```
    - Start the backend server:
      ```sh
      npm start
      ```
    - Setup mongodb on your system, according to the environment. If the port of mongodb server is not `27017`, then please change the port in the backend code `crypto-tracker-backend > config > default & production & developemnt > MONGODB_URI`. 
    - The backend server will start at `http://localhost:5000`. Ensure that port 5000 is free.

4. **Setup the Frontend:**
    - Navigate to the frontend directory:
      ```sh
      cd ../my-crypto-app
      ```
    - Install the dependencies:
      ```sh
      npm install
      ```
    - Start the frontend application:
      ```sh
      npm run dev
      ```
    - Once you see the message "Ready in 5.2s" on the console, open your browser and go to `http://localhost:3000`.

## Usage
After starting the application in the browser, the "bitcoin" coin will be pre-selected. The data will update every minute, so you need to wait for 1 minute to see the latest data.

## Features
- Real-time cryptocurrency price updates every minute
- Backend server using SSE to push data to the client
- Simple and intuitive UI for tracking multiple cryptocurrencies

## Technologies Used
- **Frontend:** Next.js, TypeScript, Redux
- **Backend:** Node.js, Express
- **API:** CoinGecko
