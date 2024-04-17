import React from 'react';
import { useState } from 'react';
// import { MdOutlineAccessTime } from 'react-icons/md';

function RangeSlider({ label, min, max, icon, inputWidth = 10, callback }) {
	const [value, setValue] = useState(1);
	const changeInput = (value) => {
		callback(value);
		setValue(value);
	};
	return (
		<div className="w-full  capitalize">
			<div className="flex items-center justify-between mb-4">
				<label className="text-lg text-textSecondary  capitalize">{label}</label>
				<div className="flex items-center justify-center">
					<div className="flex items-center justify-center text-text gap-3">{icon}</div>
					<input
						type="number" // Change type to "number"
						placeholder="0"
						id="lone_tenure"
						value={value}
						onChange={(e) => changeInput(e.target.value)}
						className={`inputBox w-${inputWidth} border shadow-md ml-3`}
					/>
				</div>
			</div>
			<input
				id="s"
				type="range"
				min={min}
				max={max}
				value={value} // Bind value to the "interest" state
				onChange={(e) => changeInput(e.target.value)} // Update the "interest" state
				className="w-full range-slider h-2 bg-gray-300 rounded appearance-none focus:outline-none"
			/>
		</div>
	);
}

export default RangeSlider;
