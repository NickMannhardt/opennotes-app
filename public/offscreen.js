function log(body) {
    chrome.runtime.sendMessage({
        log: true,
        sender: 'offscreen',
        body: body
    });
}

log("hello world from offscreen");

function getResponseFromSandbox() {
    /**
     * This function returns a promise that is only resolved once
     * the message listener has been received a message from the
     * sandbox.
     */
    return new Promise((resolve) => {
        const listener = (event) => {
            window.removeEventListener("message", listener);
            resolve(event.data);
        }
        window.addEventListener("message", listener)
    })
}

// Receive messages from other chrome-extension components.
chrome.runtime.onMessage.addListener((message, sender, SendResponse) => {
    const iframe = document.getElementById("sandbox");
    
    iframe.contentWindow.postMessage(
        {
            request_origin: sender.id,
            body: message.body
        },
        '*'
    );
    getResponseFromSandbox().then((response) => {
        SendResponse({
            'body': response.body
        })
    })
    return true;
})
