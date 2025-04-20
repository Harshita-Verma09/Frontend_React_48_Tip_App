# Tip Calculator

A simple React application for calculating tips and splitting bills.

## Features

-   Enter the total bill amount.
-   Select a tip percentage from predefined options (5%, 10%, 15%, 20%, 25%).
-   Specify the number of people to split the bill among.
-   Displays the calculated tip amount, total bill (including tip), and the amount each person should pay.

## Technologies Used

-   React
-   Tailwind CSS (for styling)

## Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd tip-calculator
    ```
3.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

## Running the Application

1.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```
2.  Open your browser and navigate to `http://localhost:3000` (or the port specified in your terminal).

## Usage

1.  Enter the total amount of the bill in the "Bill Amount" input field.
2.  Select the desired tip percentage from the dropdown menu.
3.  Enter the number of people who will be splitting the bill in the "Split Between" input field.
4.  The application will automatically calculate and display the:
    -   Tip Amount
    -   Total Bill
    -   Amount Per Person

## File Structure

tip-calculator/
├── public/
│   └── ...
├── src/
│   ├── App.js
│   ├── index.js
│   ├── components/
│   │   └── TipCalculator.js  <-- Main component
│   ├── ...
├── package.json
├── README.md
└── ...


## Contributing

Contributions are welcome! Please feel free to submit pull requests with bug fixes or new features.

## License

[MIT](LICENSE) (Add your license if applicable)
