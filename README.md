# JS-update

[![GitHub license](https://img.shields.io/github/license/fawaztanigbola/JS-update?style=flat-square)](LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/fawaztanigbola/JS-update?style=flat-square)](https://github.com/fawaztanigbola/JS-update/stargazers)
[![JS Standard](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](https://standardjs.com)

Welcome to **JS-update**! This repository is a dedicated learning workspace and utility showcase for modern JavaScript development. It bridges two core facets of software engineering: **interactive, DOM-driven frontend applications** and **pure algorithmic problem-solving** (featuring curated solutions to Codewars challenges from 8kyu to 7kyu).

This workspace serves as an active environment for mastering responsive design, event-driven DOM architectures, data structures, and optimal algorithmic performance.

---

## 🚀 Key Features

### 1. Interactive JS Calculator (`/calculator-js`)
A fully-featured, client-side calculator designed with usability and clean aesthetics in mind.
* **Modern CSS Architecture**: Utilizes custom stylesheets paired with `normalize.css` and `reset.css` to guarantee pixel-perfect rendering across Google Chrome, Firefox, Safari, and Edge.
* **Robust Execution Engine**: Pure, dependency-free JavaScript (`main.js`) drives the calculation state machine, ensuring precise execution of standard arithmetic operations and decimal handling.
* **Responsive Layout**: Designed to adapt fluidly across devices—from mobile screens to desktop monitors.

### 2. Algorithmic Problem Solving (Root Catalog)
An organized repository of standalone scripts addressing core mathematical, logical, and string-parsing algorithms.

| Script Name | Difficulty | Algorithm Description |
| :--- | :---: | :--- |
| **`7kyu-candyProblem.js`** | `7 kyu` | **Candy Distribution**: Calculates the minimum additional candies required to distribute candy evenly among children based on the child with the maximum amount. |
| **`7kyu-countTheDigit.js`** | `7 kyu` | **Digit Frequency**: Squares all integers up to $n$ and counts the occurrences of a target digit $d$ within the resulting sequence. |
| **`7kyu-excelSheetColumnNumber.js`** | `7 kyu` | **Base-26 Alphabet Mapping**: Conversions of Excel column titles (e.g., `"A"`, `"Z"`, `"AA"`) into their corresponding base-10 numerical column values. |
| **`7kyu-growthOfAPopulation.js`** | `7 kyu` | **Iterative Demographics**: Simulates yearly population growth based on natural increase rates and incoming migration to calculate when a population goal will be reached. |
| **`7kyu-permutationAverage.js`** | `7 kyu` | **Permutation Combinatorics**: Generates unique digit permutations for a given number and calculates their statistical average. |
| **`8kyu-AlternatingCase.js`** | `8 kyu` | **String Manipulation**: Alternates string capitalization, converting all uppercase characters to lowercase and vice versa. |
| **`8kyu-checkForFactor.js`** | `8 kyu` | **Mathematical Validation**: Executes factor analysis to determine if an integer is an even factor of a base value. |

---

## 🛠️ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Languages** | JavaScript (ES6+), HTML5, CSS3 | Core client-side presentation and scripting |
| **Styling** | Normalize.css, Reset.css | System resets to establish cross-browser baseline consistency |
| **Runtime** | Node.js | Local script runner used to test CLI execution of standalone JS challenges |

---

## 📂 Repository Structure

```groovy
📁 JS-update/
  📁 calculator-js/          # Web-based calculator application
    📁 css/                  # Layout and theme systems
      📄 normalize.css       # Browser normalization overrides
      📄 reset.css           # Global browser style reset
      📄 style.css           # UI layout and interactive styling rules
    📁 img/                  # Graphic assets
      📄 dnd.jpg
    📁 js/
      📄 main.js             # Calculator event loops & evaluation core
    📄 index.html            # Calculator DOM document entry point
  📄 7kyu-candyProblem.js    # Algorithmic code challenges
  📄 7kyu-countTheDigit.js
  📄 7kyu-excelSheetColumnNumber.js
  📄 7kyu-growthOfAPopulation.js
  📄 7kyu-permutationAverage.js
  📄 8kyu-AlternatingCase.js
  📄 8kyu-checkForFactor.js
  📄 test.html               # Scratchpad for execution and browser testing
  📄 README.md
```

---

## ⚙️ Getting Started & Installation

### Prerequisites
* **Web Browser**: To run the interactive calculator (e.g., Chrome, Firefox, Safari).
* **Node.js**: To execute raw logic scripts through your terminal. (Recommended: Node.js `v16.x` or higher).

### Installation
Clone the repository recursively to fetch all project directories:
```bash
git clone https://github.com/fawaztanigbola/JS-update.git
cd JS-update
```

---

## 🖥️ Usage & Execution

### Running the Calculator locally
Since the calculator is built with vanilla web standards, it does not require a compilation step.

#### Option A: Direct Open
Simply double-click the `/calculator-js/index.html` file inside your file system to open it in your default web browser.

#### Option B: VS Code Live Server
For a real-time hot-reloading development experience:
1. Open the repository root in VS Code.
2. If you have the **Live Server** extension installed, right-click `/calculator-js/index.html` and select **Open with Live Server**.

---

### Executing Standalone JavaScript Scripts
To run and inspect the outputs of any algorithm file, use the Node.js runtime environment directly in your CLI.

#### Example: Running the Population Growth Calculator
```bash
node 7kyu-growthOfAPopulation.js
```

#### Example: Testing the Digit Counter Logic
```bash
node 7kyu-countTheDigit.js
```

---

### Using the Test Playground (`test.html`)
The `test.html` file acts as an isolated web canvas where you can import, run, and debug algorithms directly in the browser's DevTools:
1. Open `test.html` in your browser.
2. Press `F12` (or `Cmd + Option + I` on macOS) to access the **Console** tab.
3. Use this sandbox environment to prototype code snippets or inspect runtime call-stacks.

---

## 📄 License

This repository is open-source and licensed under the [MIT License](LICENSE). You are welcome to modify, share, and scale this project for personal or commercial projects.