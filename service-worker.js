
// import axios from 'axios';
// This is the service worker script, which executes in its own context
// when the extension is installed or refreshed (or when you access its console).
// It would correspond to the background script in chrome extensions v2.

console.log("This prints to the console of the service worker (background script)")



self.addEventListener('fetch', (event) => {
    if (event.request.method === 'POST' && event.request.url.includes('/fishHunter/api/server/httpCmdToAdmin')) {
        event.respondWith(handlePostRequest(event.request));
    }
});


importScripts('service-worker-utils.js')


// If you want to import a file that is deeper in the file hierarchy of your
// extension, simply do `importScripts('path/to/file.js')`.
// The path should be relative to the file `manifest.json`.

chrome.runtime.onMessage.addListener(function (data, sender, sendResponse) {
    if (data.success) {
        // 找到當前活動的標簽頁面
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            if (tabs[0]) {
                console.log('IN SERVER-WORKER[OUT]' + JSON.stringify({ data: data }, null, 2))
                chrome.tabs.sendMessage(tabs[0].id, {
                    success: true,
                    message: data.message
                });
            }
        });

        if (data.message == 'get') {
        }
    }
});


