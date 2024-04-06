/* 
This is the background script for the extension, it runs in the background of the browser.

Video walkthrough: https://vimeo.com/923628666

Goal: Ensure that there is a continuous stream of timestamps logged from contentScript.js
\
Rules: 
You can only change one file: this background.js file. 
No DOM manipulation allowed such as overriding document.visibilityState.
When testing your code we will use the original files and only update the background.js file.

Testing: Use this site for easy testing https://ai-stealth-challenge.web.app

Hint: The solution is only a few lines of code.
*/

// Listen for messages from contentScript.js
chrome.runtime.onMessage.addListener(
  function (request, sender, sendResponse) {
    // Check if the message contains a new timestamp
    if (request.timestamp) {
      const currentTimestamp = request.timestamp;

      // Check if there is a previous timestamp
      if (prevTimestamp !== 0) {
        // Log the timestamp difference
        // console.log(currentTimestamp - prevTimestamp);
      }

      // Update the previous timestamp
      prevTimestamp = currentTimestamp;
    }
  }
);