import React, { useState } from "react";

const TipCalculator = () => {
    const [bill, setBill] = useState("");
    const [tip, setTip] = useState(10); // Default tip percentage
    const [people, setPeople] = useState(1);

    const billAmount = parseFloat(bill) || 0;
    const tipAmount = (billAmount * tip) / 100;
    const totalAmount = billAmount + tipAmount;
    const perPerson = totalAmount / people;

    return (
        <div className="max-w-md mx-auto bg-gray-300 shadow-lg rounded-xl p-6 mt-10 w-full">
            <h2 className="text-2xl font-bold mb-4 text-center">Tip Calculator</h2>

            {/* Bill Amount Input */}
            <div className="mb-4">
                <label className="block font-semibold">Bill Amount:</label>
                <input
                    type="number"
                    value={bill}
                    onChange={(e) => setBill(e.target.value)}
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter bill amount"
                />
            </div>

            {/* Tip Percentage Selector */}
            <div className="mb-4">
                <label className="block font-semibold">Tip Percentage:</label>
                <select
                    value={tip}
                    onChange={(e) => setTip(parseFloat(e.target.value))}
                    className="w-full p-2 border rounded-md"
                >
                    {[5, 10, 15, 20, 25].map((percent) => (
                        <option key={percent} value={percent}>
                            {percent}%
                        </option>
                    ))}
                </select>
            </div>

            {/* Number of People */}
            <div className="mb-4">
                <label className="block font-semibold">Split Between:</label>
                <input
                    type="number"
                    value={people}
                    onChange={(e) => setPeople(Math.max(1, parseInt(e.target.value)))}
                    className="w-full p-2 border rounded-md"
                    min="1"
                />
            </div>

            {/* Results */}
            <div className="bg-gray-100 p-4 rounded-lg text-center">
                <p className="text-lg font-semibold">Tip Amount: ₹{tipAmount.toFixed(2)}</p>
                <p className="text-lg font-semibold">Total Bill: ₹{totalAmount.toFixed(2)}</p>
                <p className="text-lg font-semibold">
                    Per Person: ₹{perPerson.toFixed(2)}
                </p>
            </div>
        </div>
    );
};

export default TipCalculator;
