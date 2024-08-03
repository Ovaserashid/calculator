# Calculator Project

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Usage](#usage)
- [Implementation](#implementation)
- [Extra Credit](#extra-credit)
- [Keyboard Support](#keyboard-support)
- [License](#license)

## Overview

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

body {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    color: #333;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
}
</style>

This project is a fully functional calculator built with HTML, CSS, and JavaScript. It includes all the basic math operations and several advanced features. The calculator supports addition, subtraction, multiplication, and division operations, and has a user-friendly interface with buttons for digits, operations, an equals key, and additional features like decimal input, clear, and backspace functionalities.

## Features

- **Basic Math Operations**: Addition, subtraction, multiplication, and division.
- **Chained Operations**: Evaluates a single pair of numbers at a time, allowing for chained operations.
- **Decimal Support**: Allows users to input and calculate with decimal numbers.
- **Clear Function**: Clears the display and resets the calculator.
- **Backspace Function**: Removes the last input digit.
- **Error Handling**: Displays an error message for invalid operations like division by zero.
- **Responsive Design**: Styled with CSS for an intuitive user interface.
- **Keyboard Support**: Allows users to interact with the calculator using their keyboard.

## Usage

1. **Load the Calculator**: Open the `index.html` file in a web browser.
2. **Input Numbers**: Click the number buttons or use the keyboard to input numbers.
3. **Select Operation**: Click the operation buttons (+, -, *, /) or use the keyboard.
4. **Get Result**: Click the equals button (=) or press Enter to perform the calculation and display the result.
5. **Clear Display**: Click the clear button (AC) or press the Escape key to reset the calculator.
6. **Use Backspace**: Click the backspace button or press the Backspace key to remove the last input digit.
7. **Input Decimal**: Click the decimal button (.) or press the period key to input decimal numbers.

## Implementation

### HTML

The HTML structure includes buttons for digits (0-9), operations (+, -, *, /), equals (=), clear (C), decimal (.), and backspace. The display is a simple input field.

### CSS

The CSS provides a responsive and visually appealing layout. Buttons are styled with different colors for digits and operations. The display is styled to fit the numbers and results clearly.

### JavaScript

The JavaScript code includes functions for each basic math operation (add, subtract, multiply, divide), a function to handle operations (`operate`), and event listeners to handle button clicks and keyboard inputs. The calculator's logic ensures proper handling of chained operations, decimal inputs, and error conditions.

## Extra Credit

- **Decimal Input**: Users can input decimal numbers and perform calculations with them. Only one decimal point is allowed per number.
- **Backspace Button**: Allows users to remove the last digit entered.
- **Keyboard Support**: Users can interact with the calculator using their keyboard. Supported keys include digits, operations, equals (Enter), clear (Escape), decimal (period), and backspace.

## Keyboard Support

- **Digits (0-9)**: Input numbers.
- **Operations (+, -, *, /)**: Perform addition, subtraction, multiplication, and division.
- **Equals (= or Enter)**: Calculate and display the result.
- **Clear (Escape)**: Reset the calculator.
- **Decimal (.)**: Input decimal numbers.
- **Backspace**: Remove the last input digit.

## License

This project is licensed under the MIT License. See the LICENSE file for details.

---

Enjoy using the calculator! Feel free to customize it further and improve its functionality.
