import React, { useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
	const [birthdate, setBirthdate] = useState("");
	const [zodiacSign, setZodiacSign] = useState("");

	const calculateZodiacSign = (date) => {
		const month = date.getUTCMonth() + 1;
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

	const handleSubmit = (event) => {
		event.preventDefault();
		const date = new Date(birthdate);
		const sign = calculateZodiacSign(date);
		setZodiacSign(sign);
	};

	return (
		<div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 text-white">
			<h1 className="text-4xl font-bold mb-8">Zodiac Sign Calculator</h1>
			<form className="flex flex-col items-center" onSubmit={handleSubmit}>
				<label className="text-lg mb-4">
					Enter your birthdate:
					<input
						className="ml-2 p-2 rounded-lg bg-white text-black"
						type="date"
						value={birthdate}
						onChange={(e) => setBirthdate(e.target.value)}
						required
					/>
				</label>
				<button
					className="p-2 bg-blue-700 rounded-lg hover:bg-blue-800 transition-colors"
					type="submit"
				>
					Calculate
				</button>
			</form>
			{zodiacSign && (
				<motion.div
					className="mt-8 p-4 bg-white text-black rounded-lg shadow-lg"
					initial={{ opacity: 0, y: -50 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<h2 className="text-2xl font-bold">Your Zodiac Sign: {zodiacSign}</h2>
				</motion.div>
			)}
		</div>
	);
}

export default App;
