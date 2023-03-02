async function main() {
    await loadModelInSandbox();
    const english = "Hello, world!";
    console.log(english);
    sendMessageToModel(english);
}

async function loadModelInSandbox() {
    console.log('creating offscreen document');
    await chrome.offscreen.createDocument({
        url: chrome.runtime.getURL('offscreen.html'),
        reasons: [chrome.offscreen.Reason.IFRAME_SCRIPTING],
        justification: 'Run ONNX Runtime using WASM'
    });
}

async function sendMessageToModel(input) {
    chrome.runtime.sendMessage({
        command: 'translate',
        sender: 'service-worker',
        target: 'sandbox',
        body: input
    });
}

chrome.runtime.onMessage.addListener((message) => {
    if (message.log) {
        console.log(`${message.sender}: ${message.body}`)
        return;
    }

    console.log(message.body);
})

main();
