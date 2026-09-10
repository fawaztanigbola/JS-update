# JS-update

[![Language](https://img.shields.io/badge/Language-JavaScript%20%28ES6%2B%29-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Environment](https://img.shields.io/badge/Environment-Node.js%20%2F%20Browser-green.svg)](https://nodejs.org/)
[![Styling](https://img.shields.io/badge/Styling-CSS3-blue.svg)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

Welcome to **JS-update**! This repository is a dedicated space for JavaScript development, featuring a fully functional, interactive web-based calculator alongside a curated collection of algorithmic problem-solving scripts (primarily Codewars challenges ranging from 8kyu to 7kyu). 

This project serves as a practical playground for mastering DOM manipulation, browser event handling, responsive CSS layouts, and core JavaScript mathematical/logical algorithms.

---

## 🚀 Features & Contents

### 1. Interactive JS Calculator (`/calculator-js`)
A clean, responsive, and modern web calculator built using vanilla web technologies.
* **Responsive Design**: Styled with modern CSS, utilizing `normalize.css` and `reset.css` for cross-browser styling consistency.
* **Interactive UI**: Features a sleek layout with tactile active states and intuitive button interactions.
* **Core Logic**: Handled entirely via vanilla JavaScript (`main.js`) using safe evaluation algorithms to process arithmetic operations dynamically.

### 2. Algorithmic Problem Solving (Root Directory)
A collection of standalone, optimized JavaScript solutions solving classic algorithmic challenges:
* **`7kyu-candyProblem.js`**: Computes candy distribution logic to ensure all children receive an equal amount.
* **`7kyu-countTheDigit.js`**: Counts the occurrences of a specific digit $d$ within squared numbers from $0$ up to $n$.
* **`7kyu-excelSheetColumnNumber.js`**: Converts Excel column titles (e.g., `"A"`, `"AB"`, `"ZY"`) into their corresponding 1-based numeric column values.
* **`7kyu-growthOfAPopulation.js`**: Calculates the number of years required for an initial population to reach or surpass a target threshold, taking into account percent growth and migration.
* **`7kyu-permutationAverage.js`**: Computes the mathematical average of all unique digit permutations of a given integer.
* **`8kyu-AlternatingCase.js`**: Alternates the casing of each character in a string (swaps uppercase to lowercase and vice versa).
* **`8kyu-checkForFactor.js`**: Simple mathematical validation checking if a number is a factor of another.

---

## 🛠️ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Languages** | JavaScript (ES6+), HTML5, CSS3 | Core frontend development and CLI scripting |
| **Styling** | Normalize.css, Reset.css | Ensures consistent rendering across all modern web browsers |
| **Runtime** | Node.js (Optional) | Execution engine for running standalone algorithmic scripts via CLI |
| **Development** | Browser DevTools | Execution environment for sandbox testing via `test.html` |

---

## 📂 Repository Structure

```groovy
📁 JS-update/
  📁 calculator-js/          # Web-based calculator application
    📁 css/                  # Stylesheets for layouts and normalization
      📄 normalize.css       # Cross-browser style consistency standard
      📄 reset.css           # Clean browser style overrides
      📄 style.css           # Custom calculator styling & layouts
    📁 img/                  # Graphic assets
      📄 dnd.jpg
    📁 js/
      📄 main.js             # Event listeners and calculator evaluation logic
    📄 index.html            # Main calculator user interface
  📄 7kyu-candyProblem.js    # Standalone algorithmic scripts
  📄 7kyu-countTheDigit.js
  📄 7kyu-excelSheetColumnNumber.js
  📄 7kyu-growthOfAPopulation.js
  📄 7kyu-permutationAverage.js
  📄 8kyu-AlternatingCase.js
  📄 8kyu-checkForFactor.js
  📄 test.html               # Light-weight browser sandbox for quick scripting tests
  📄 README.md
```

---

## ⚙️ Getting Started & Installation

### Prerequisites
* **For the UI Calculator**: Any modern web browser (Google Chrome, Mozilla Firefox, Apple Safari, or Microsoft Edge).
* **For Standalone Scripts**: [Node.js](https://nodejs.org/) (v14.x or higher recommended) installed locally to run code from your command line.

### Installation
1. Clone the repository to your local directory:
   ```bash
   git clone https://github.com/fawaztanigbola/JS-update.git
   ```
2. Navigate into the project folder:
   ```bash
   cd JS-update
   ```

---

## 🖥️ Usage

### 1. Running the Calculator
The calculator is entirely client-side and requires zero build steps or dependency installation.

* **Option A (Direct Open)**: Navigate to `/calculator-js` using your system's File Explorer and double-click `index.html` to open it in your default browser.
* **Option B (Live Server - Recommended)**: If you are using VS Code, install the **Live Server** extension, right-click `calculator-js/index.html`, and select **Open with Live Server** to run it on a local development server (`http://127.0.0.1:5500`).

---

### 2. Running Standalone JavaScript Scripts
You can execute and test any of the algorithmic solution scripts directly from your terminal using Node.js:

```bash
# Example 1: Calculate Excel column string to number conversions
node 7kyu-excelSheetColumnNumber.js

# Example 2: Check population growth timelines
node 7kyu-growthOfAPopulation.js

# Example 3: Test string casing swaps
node 8kyu-AlternatingCase.js
```

---

### 3. Using the HTML Sandbox (`test.html`)
The `test.html` file at the root of the project is a utility testbed. You can use it to test JS scripts within a browser context:
1. Open `test.html` in your web browser.
2. Open your browser's Developer Tools Console (`F12` or `Ctrl+Shift+I` / `Cmd+Option+I`).
3. Link any script inside `test.html` using a `<script>` tag to debug and inspect outputs directly:
   ```html
   <script src="7kyu-countTheDigit.js"></script>
   ```

---

## 📄 License

This repository is open-source and licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as needed.