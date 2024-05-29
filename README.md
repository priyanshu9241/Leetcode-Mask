# Leetcode Mask 🚀

As a fellow **Leetcode** enthusiast, I've seen many shy away from challenging problems due to the difficulty label. To tackle this, I built a simple Chrome extension that hides those tags entirely! Now, you can approach every problem fresh, focusing on the code itself rather than perceived difficulty.

## Features

- 🔍 Replaces "Easy," "Medium," and "Hard" difficulty tags with "🤔" on LeetCode.
- 🚀 Works dynamically as new content loads on the page.
- 🌐 Lightweight and easy to install.
- 🖱️ Easily undo changes and see the original difficulty by clicking on the "🤔".

## How It Works

The extension uses a content script to scan and modify the text content of elements on the LeetCode page. It observes changes in the DOM and ensures that any newly loaded content is also processed.

### Tech Stack

- **JavaScript**: The scripting language used to develop the extension.
- **Chrome Extensions API**: Provides the framework to build the extension.
- **HTML**: Used for the extension's manifest file.

## Installation

Follow these steps to install this LeetCode extension on your personal computer:

1. **Download the Extension**: Clone or download this repository to your local machine.
2. **Unzip the download**: Unzip the downloaded repository to a folder.
3. **Open Chrome Extensions**: Open Chrome and navigate to `chrome://extensions/`.
4. **Enable Developer Mode**: Toggle the "_Developer mode_" switch in the top right corner.
5. **Load Unpacked**: Click on the "_Load unpacked_" button and select the directory where you downloaded/cloned the repository.
6. **Extension Installed**: You should now see the Leetcode Mask extension in your list of Chrome extensions.

## How to Use

Once installed, the extension will automatically run on LeetCode pages and mask the difficulty tags. You don't need to do anything special – just browse LeetCode as usual and focus on solving problems without being influenced by their difficulty tags.But if you want to see the original difficulty, you can click on the "🤔" icon to reveal the actual difficulty tag.
