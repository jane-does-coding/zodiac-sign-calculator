import React, { useState } from "react";
import "./App.css";

function App() {
	// State to hold the birthdate input
	const [birthdate, setBirthdate] = useState("");
	// State to hold the zodiac sign result
	const [zodiacSign, setZodiacSign] = useState("");

	// Function to calculate zodiac sign based on the birthdate
	const calculateZodiacSign = (date) => {
		const month = date.getUTCMonth() + 1; // getUTCMonth() is zero-based, so we add 1
		const day = date.getUTCDate();

		if ((month === 1 && day >= 20) || (month === 2 && day <= 18)) {
			return "Aquarius";
		} else if ((month === 2 && day >= 19) || (month === 3 && day <= 20)) {
			return "Pisces";
		} else if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
			return "Aries";
		} else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
			return "Taurus";
		} else if ((month === 5 && day >= 21) || (month === 6 && day <= 20)) {
			return "Gemini";
		} else if ((month === 6 && day >= 21) || (month === 7 && day <= 22)) {
			return "Cancer";
		} else if ((month === 7 && day >= 23) || (month === 8 && day <= 22)) {
			return "Leo";
		} else if ((month === 8 && day >= 23) || (month === 9 && day <= 22)) {
			return "Virgo";
		} else if ((month === 9 && day >= 23) || (month === 10 && day <= 22)) {
			return "Libra";
		} else if ((month === 10 && day >= 23) || (month === 11 && day <= 21)) {
			return "Scorpio";
		} else if ((month === 11 && day >= 22) || (month === 12 && day <= 21)) {
			return "Sagittarius";
		} else if ((month === 12 && day >= 22) || (month === 1 && day <= 19)) {
			return "Capricorn";
		}
	};

	// Handle form submission
	const handleSubmit = (event) => {
		event.preventDefault();
		const date = new Date(birthdate);
		const sign = calculateZodiacSign(date);
		setZodiacSign(sign);
	};

	return (
		<div className="App">
			<h1>Zodiac Sign Calculator</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Enter your birthdate:
					<input
						type="date"
						value={birthdate}
						onChange={(e) => setBirthdate(e.target.value)}
						required
					/>
				</label>
				<button type="submit">Calculate</button>
			</form>
			{zodiacSign && (
				<div className="result">
					<h2>Your Zodiac Sign: {zodiacSign}</h2>
				</div>
			)}
		</div>
	);
}

export default App;
