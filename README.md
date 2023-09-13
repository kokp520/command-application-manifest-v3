# Chrome Extension: Button Sender

## Description

The **Button Sender** is a simple Chrome extension that allows you to send commands or messages from the extension's popup to the current active tab's console. In addition, you can also input custom text and send it to the console.

## Features

- Multiple buttons with predefined commands: You can create multiple buttons in the extension's popup, each associated with a specific command. Clicking a button sends the corresponding command to the console.

- Custom input: The extension includes an input field where you can enter custom text. Clicking the "Send" button sends the entered text to the console.

- Clean and customizable UI: The extension's popup has a clean and user-friendly interface. You can further customize the look and feel through CSS.

## How to Use

1. Install the extension by following these steps:
   - Download the extension files.
   - Open Chrome and go to `chrome://extensions/`.
   - Enable "Developer mode" in the top right corner.
   - Click "Load unpacked" and select the folder containing the extension files.

2. Once the extension is installed, you can click the extension icon in the Chrome toolbar to open the popup.

3. In the popup, you will see multiple buttons labeled "Button 1," "Button 2," and "Button 3." Each button is associated with a predefined command.

4. Clicking any of these buttons will send the corresponding command to the console of the currently active tab.

5. If you want to send custom text to the console, enter your text in the input field labeled "Custom Command" and click the "Send" button.

## Customization

You can customize the appearance of the buttons and the input field by modifying the CSS in the `popup.css` file. Adjust colors, sizes, and styles to suit your preferences.

## License

This Chrome extension is open-source and released under the [MIT License](LICENSE).

Thanks Template : [SimGus](https://github.com/SimGus/chrome-extension-v3-starter) 

## Acknowledgments

This extension was created for educational purposes and as a demonstration of Chrome extension development.
