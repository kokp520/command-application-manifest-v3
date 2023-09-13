// This script gets injected into any opened page
// whose URL matches the pattern defined in the manifest
// (see "content_script" key).
// Several foreground scripts can be declared
// and injected into the same or different pages.

chrome.runtime.onMessage.addListener(function (data, sender, sendResponse) {
    console.log('IN foreground')
    if (data.success) {
        console.log(data.message)
        console.log("從彈出窗口傳遞的消息已收到！ message : " + data.message);
    }
});
