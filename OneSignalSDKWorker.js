importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');

// Set the scope to an upper path of the script location
// Response included "Service-Worker-Allowed : /"
navigator.serviceWorker.register("/OneSignalSDKWorker.js", { scope: "/" }).then(() => {
  console.log("Install succeeded as the max allowed scope was overriden to '/'.");
});
