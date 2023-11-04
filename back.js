// Include the Pusher library to allow the server to send real-time messages.
const Pusher = require("pusher");
// Load environment variables from a .env file into process.env using the dotenv library.
require('dotenv').config();

// Initialize a new Pusher instance with the app credentials and configuration.
const pusher = new Pusher({
  appId: process.env.APP_ID, // The unique identifier for your Pusher application.
  key: process.env.KEY, // The key for accessing Pusher's features.
  secret: process.env.SECRET, // The secret key for authenticating with the Pusher API.
  cluster: "us2", // The cluster that your Pusher application is hosted on.
  useTLS: true // Enforce the use of TLS to ensure encrypted connections.
});

// Define an asynchronous function to send a message using Pusher.
async function sendMessageWithPusher(channel, event, message){
  // Trigger an event on the specified Pusher channel with the provided message.
  await pusher.trigger(channel, event, {
    message: message // The data payload to send with the event, in this case, just a message.
  });
}

// Immediately invoked function expression (IIFE) to execute the sendMessageWithPusher function.
(async () => {
  // Call the sendMessageWithPusher function with the channel name, event name, and message.
  await sendMessageWithPusher("codingwithado", "youtubeMessages", 'Coding with ado');
})() // The IIFE is called immediately after definition.
