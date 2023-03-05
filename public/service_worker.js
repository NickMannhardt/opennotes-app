async function main() {
    await loadModelInSandbox();
    const english = "Hello, world!";
    console.log(english);
    sendMessageToModel(english);
}

async function loadModelInSandbox() {
    console.log('creating offscreen document');
    // TODO: do this the proper way
    try {
        await chrome.offscreen.createDocument({
            url: chrome.runtime.getURL('offscreen.html'),
            reasons: [chrome.offscreen.Reason.IFRAME_SCRIPTING],
            justification: 'Run ONNX Runtime using WASM'
        });
    } catch(err) {
        console.log('offscreen document already exists.')
    }
}

async function sendMessageToModel(input) {
    const response = await chrome.runtime.sendMessage({
        command: 'translate',
        sender: 'service-worker',
        target: 'sandbox',
        body: input
    });
    console.log(`got response: ${response}`)
}

chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.query({active: true, currentWindow: true},
        (tabs) => {
            var activeTab = tabs[0];
            chrome.tabs.sendMessage(
                activeTab.id,
                {"message": "clicked_browser_action"}
            );
    });
})

chrome.runtime.onMessage.addListener((message) => {
    if (message.log) {
        console.log(`${message.sender}: ${message.body}`)
        return;
    }

    console.log(message.body);
})

main();
