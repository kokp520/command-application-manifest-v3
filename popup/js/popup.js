// popup.js


// // listen for messages from the background
// chrome.runtime.onMessage.addListener((message, sender) => {
//   // is the message for us?
//   if (message.to && message.to === ME) {
//     // do we have a valid command?
//     if (message.cmd && typeof cmd[message.cmd] === "function") {
//       // run it, passing the full message object
//       cmd[message.cmd](message, sender);
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  var logButton = document.getElementById("logButton");
  var submitButton = document.getElementById("submitButton");
  var get = document.getElementById("get");
  if (get) {
    get.addEventListener("click", function () {
      chrome.runtime.sendMessage({ success: true, message: 'get' });
    });

  }

  if (logButton) {
    logButton.addEventListener("click", function () {
      chrome.runtime.sendMessage({ success: true, message: 'test' });
    });
  }

  if (document.getElementById("inputCmd")) {
    var inputCmd = document.getElementById("inputCmd");
  }

  if (submitButton) {
    submitButton.addEventListener("click", function () {
      var inputValue = inputCmd.value; // 获取输入框的内容
      chrome.runtime.sendMessage({
        success: true,
        message: inputValue // 将内容作为消息发送出去
      });
    });
  }
});
