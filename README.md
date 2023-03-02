# OpenNotes - App
Chrome extension for simplifying patient clinical notes

## Setup
Install the necessary packages by running
```
npm install
```


## Testing

Start by running 
```
npm start
```
to start the development server.

ES6 Modules are not well supported in chrome-extensions so we use webpack to compile our code into a single javascript file that we can run on the browser. 

We also use React to simplify web development which requires additional compiling.

Both compliations can be run with
```
npm run build
```

Now we can upload the extension to our local browser instance by going to [chrome://extensions](chrome://extensions).

Make sure that "Develop Mode" is _on_ in the upper right hand corner.
Click "Load unpack" in the upper left corner and navigate to the `opennotes-app` git repository.

The chrome extension will automatically start running.

To check logs for service-workers (background scripts), click on "inspect views" on the card for the opennotes app.
Logs from the offscreen page and sandbox are sent here for increased visibility.

To reload the extension after making changes click the circular arrow button in the bottom right corner of the extension's card in [chrome://extensions](chrome://extensions) (remember to recompile first).

## Architecture
The chrome extension consists of three pieces:
* **Content Script:** This handles the interactions between the chrome extension and the active page. This is how we can read and change the content on a user's patient portal.
* **Service-Worker:** The service-worker creates the offscreen page and handles communication between the content script and the Offscreen page.
* **Offscreen Page:** This is where the machine learning models live. The offscreen page has a sandbox subcomponent. The sandbox has special permissions to execute Web Assembly files (which `onnxruntime-web` requires). 
