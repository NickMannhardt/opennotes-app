
function log(body) {
    chrome.runtime.sendMessage({
        log: true,
        sender: 'offscreen',
        body: body
    });
}

function message(target, command, body) {
    chrome.runtime.sendMessage({
        sender: "offscreen",
        target: target,
        command: command,
        body: body
    })
}

log("hello world from offscreen");

// Receive messages from sandbox.
window.addEventListener('message', (event) => {
    if (event.data.log) {
        chrome.runtime.sendMessage({
            log: true,
            sender: event.data.sender,
            body: event.data.body,
        });
        return;
    }
    log(`received message from sandbox: ${JSON.stringify(event.data)}`);
});

// Receive messages from other chrome-exentsion components.
chrome.runtime.onMessage.addListener((message) => {
    log(`received message from ${message.sender}: ${JSON.stringify(message)}`);
    const iframe = document.getElementById("sandbox");

    switch(message.command) {
        case "translate":
            iframe.contentWindow.postMessage(
                {
                    command: "translate",
                    body: message.body
                },
                '*'
            );
    }
})
