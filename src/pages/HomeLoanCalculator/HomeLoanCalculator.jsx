import React, { useState } from 'react';
import './index.css';
import { FaRupeeSign } from 'react-icons/fa';
import { FaPercentage } from 'react-icons/fa';
import { MdOutlineAccessTime } from 'react-icons/md';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import SelectDropDown from '../../components/SelectDropDown/SelectDropDown';

import Button from '../../components/Button/Button';
import Chart from 'chart.js/auto';
import { CategoryScale } from 'chart.js';
import { Pie } from 'react-chartjs-2';

function HomeLoanCalculator() {
	// State to store loan amount and interest
	const [loanAmount, setLoanAmount] = useState(100000);
	const [interest, setInterest] = useState(10);
	const [loneTenure, setLoneTenure] = useState(5);
	const [loneTenureType, setLoneTenureType] = useState('year');
	const [result, setResult] = useState(0);

	const calculateResult = () => {
		const totalInterest = loanAmount * (interest / 100) * loneTenure;
		setResult(totalInterest);
		console.log(result);
	};

	const data = {
		labels: ['Total Interest', 'Loan Amount'],
		// datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object
		datasets: [
			{
				data: [result, loanAmount],
				// you can set indiviual colors for each bar
				backgroundColor: ['#2ccdd8', '#1e40af'],
				borderWidth: 1,
			},
		],
	};
	return (
		<div className="mt-10 w-full flex flex-col md:flex-row">
			<div className="homeLoanContainer md:w-1/2 px-4 py-6 flex flex-col gap-3">
				{/* //lobe amount */}

				<RangeSlider label="Loan Amount" min="1" max="5000000" icon={<FaRupeeSign />} inputWidth="20" callback={setLoanAmount} />
				{/* setInterest */}
				<RangeSlider label="Rate Of Interest" min="1" max="15" icon={<FaPercentage />} callback={setInterest} />
				{/* lone tenure */}
				<RangeSlider label=" lone tenure " min="1" max="50" icon={<MdOutlineAccessTime />} callback={setLoneTenure} />

				{/*  select dropdown */}

				<div onClick={calculateResult} className="w-full">
					<Button title={'Show Result'} />
				</div>
			</div>
			<div className="w-full md:w-1/2 flex flex-col-reverse gap-10 items-center justify-center lg:items-start lg:flex-row-reverse">
				<div className="w-full h-52 md:-mt-10 md:w-1/4  items-center justify-center flex">
					<Pie data={data} />
				</div>
				<div className="flex w-full   gap-4 flex-col">
					<div className="w-full flex items-start text-text justify-between">
						<h1 className="text-nowrap">Principal Amount</h1>
						<h1>₹ {loanAmount}</h1>
					</div>
					<div className="w-full flex items-start text-text justify-between">
						<h1 className="text-nowrap">Total Interest</h1>
						<h1>₹ {result}</h1>
					</div>

					<div className="w-full flex items-start text-text justify-between">
						<h1 className="text-nowrap">Total Amount</h1>
						<h1>₹ {Number(loanAmount) + Number(result)}</h1>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomeLoanCalculator;
