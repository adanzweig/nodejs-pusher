# Real-Time Messaging App with Pusher

This is a sample real-time messaging application utilizing Pusher for real-time web socket communication. The app is split into a `back.js` file for backend operations and a `front.js` within an HTML file for the frontend interface.

## Features

- Real-time bidirectional event-based communication.
- Secure Pusher implementation using environment variables.

## Prerequisites

- Node.js and npm installed.
- A Pusher account and credentials (appId, key, secret, cluster).

## Setup

1. Clone this repository:
   ```sh
   git clone https://github.com/adanzweig/nodejs-pusher.git
   ```

2. Navigate to the project directory:
   ```sh
   cd nodejs-pusher
   ```

3. Install the required dependencies:
   ```sh
   npm install
   ```

4. Set up your Pusher credentials. Create a `.env` file in the root of the project and add the following lines:
   ```
   APP_ID=your_pusher_app_id
   KEY=your_pusher_key
   SECRET=your_pusher_secret
   CLUSTER=your_pusher_cluster
   ```

## Configuration

To configure the application to work with your Pusher instance:

- In `back.js`, ensure that the environment variables are set up correctly to match your Pusher app credentials.
- In the `front.js` section within your HTML file, replace the placeholders with your actual Pusher key and cluster.

## Running the Application

1. Start the backend server:
   ```sh
   node back.js
   ```

2. Open the HTML file containing `front.js` in your web browser to interact with the frontend.

## Contributing

If you have suggestions for how this project could be improved, or want to report a bug, open an issue or:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -am 'Add some feature'`).
4. Push the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the [MIT License](LICENSE).