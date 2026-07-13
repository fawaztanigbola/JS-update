# JS-update

Welcome to **JS-update**! This repository is a dedicated space for JavaScript development, featuring a fully functional, interactive web-based calculator alongside a curated collection of algorithmic problem-solving scripts (primarily Codewars challenges ranging from 8kyu to 7kyu). 

This project serves as a practical playground for mastering DOM manipulation, CSS layout techniques, and core JavaScript algorithms.

---

## 🚀 Features & Contents

### 1. Interactive JS Calculator (`/calculator-js`)
A clean, responsive, and modern web calculator built using vanilla web technologies.
* **Responsive Design**: Styled with custom CSS, utilizing `normalize.css` and `reset.css` for cross-browser consistency.
* **Interactive UI**: Features a sleek layout with intuitive button interactions.
* **Core Logic**: Handled entirely via vanilla JavaScript (`main.js`) to process arithmetic operations dynamically.

### 2. Algorithmic Problem Solving (Root Directory)
A collection of standalone JavaScript files solving classic algorithmic challenges:
* **`7kyu-candyProblem.js`**: Logic for distributing candies evenly among children.
* **`7kyu-countTheDigit.js`**: Counts the occurrences of a specific digit within squared numbers up to $n$.
* **`7kyu-excelSheetColumnNumber.js`**: Converts Excel column titles (e.g., "A", "AB") into their corresponding numeric column numbers.
* **`7kyu-growthOfAPopulation.js`**: Calculates the number of years required for a population to reach or surpass a target threshold.
* **`7kyu-permutationAverage.js`**: Computes the average of all unique permutations of a given number.
* **`8kyu-AlternatingCase.js`**: Alternates the casing of each character in a string (uppercase to lowercase and vice versa).
* **`8kyu-checkForFactor.js`**: Simple mathematical validation to check if a number is a factor of another.

---

## 🛠️ Tech Stack

| Category | Technology / Library | Description |
| :--- | :--- | :--- |
| **Languages** | JavaScript (ES6+), HTML5, CSS3 | Core frontend and scripting languages |
| **Styling** | Normalize.css, Reset.css | Ensures consistent styling across all modern browsers |
| **Runtime** | Node.js (Optional) | Used to execute standalone algorithmic scripts via the CLI |

---

## 📂 Repository Structure

```groovy
📁 JS-update/
  📁 calculator-js/          # Web-based calculator application
    📁 css/                  # Stylesheets (Reset, Normalize, and Custom styles)
      📄 normalize.css
      📄 reset.css
      📄 style.css
    📁 img/                  # Assets and images
      📄 dnd.jpg
    📁 js/
      📄 main.js             # Calculator logic
    📄 index.html            # Calculator entry point
  📄 7kyu-candyProblem.js    # Standalone algorithm scripts
  📄 7kyu-countTheDigit.js
  📄 7kyu-excelSheetColumnNumber.js
  📄 7kyu-growthOfAPopulation.js
  📄 7kyu-permutationAverage.js
  📄 8kyu-AlternatingCase.js
  📄 8kyu-checkForFactor.js
  📄 test.html               # General testing playground
  📄 README.md
```

---

## ⚙️ Getting Started & Installation

### Prerequisites
* **For the Calculator**: Any modern web browser (Google Chrome, Mozilla Firefox, Safari, Microsoft Edge).
* **For Standalone Scripts**: [Node.js](https://nodejs.org/) (v14 or higher recommended) installed on your local machine to run scripts via the terminal.

### Installation
1. Clone the repository to your local machine:
   ```bash
   git clone https://github.com/fawaztanigbola/JS-update.git
   ```
2. Navigate into the project directory:
   ```bash
   cd JS-update
   ```

---

## 🖥️ Usage

### Running the Calculator
You can run the calculator locally without any build steps:
1. Navigate to the calculator directory:
   ```bash
   cd calculator-js
   ```
2. Open `index.html` in your preferred web browser:
   * **Option A**: Double-click the `index.html` file in your file explorer.
   * **Option B**: If using VS Code, right-click `index.html` and select **Open with Live Server**.

### Running Standalone JavaScript Scripts
To test or run any of the algorithmic solutions, use Node.js in your terminal:

```bash
# Example: Run the population growth calculator
node 7kyu-growthOfAPopulation.js

# Example: Run the alternating case script
node 8kyu-AlternatingCase.js
```

---

## 📄 License

This project is open-source and available under the [MIT License](LICENSE). Feel free to use, modify, and distribute the code as needed.