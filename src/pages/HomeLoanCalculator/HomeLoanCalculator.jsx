import React, { useState } from 'react';
import './index.css';
import { FaRupeeSign } from 'react-icons/fa';
import { FaPercentage } from 'react-icons/fa';
import { MdOutlineAccessTime } from 'react-icons/md';
import RangeSlider from '../../components/RangeSlider/RangeSlider';
import SelectDropDown from '../../components/SelectDropDown/SelectDropDown';

function HomeLoanCalculator() {
	// State to store loan amount and interest
	const [loanAmount, setLoanAmount] = useState(100000);
	const [interest, setInterest] = useState(10);
	const [loneTenure, setLoneTenure] = useState(5);
	const [loneTenureType, setLoneTenureType] = useState('year');

  console.log(loneTenureType);
	return (
		<div className="mt-10 w-full flex flex-col md:flex-row">
			<div className="homeLoanContainer md:w-1/2 px-4 py-6 flex flex-col gap-3">
				{/* //lobe amount */}

				<RangeSlider label="Loan Amount" min="1" max="5000000" icon={<FaRupeeSign />} inputWidth="20" callback={setLoanAmount} />
				{/* setInterest */}
				<RangeSlider label="	Rate Of Interest" min="1" max="50" icon={<FaPercentage />} callback={setInterest} />
				{/* lone tenure */}
				<RangeSlider label=" lone tenure " min="1" max="50" icon={<MdOutlineAccessTime />} callback={setLoneTenure} />

				{/*  select dropdown */}

				<div className="w-full flex items-center justify-between">
					<h1 className="text-lg text-textSecondary  capitalize text-nowrap">Tenure type</h1>
					<SelectDropDown options={['month', 'year', 'test 1', 'test 2']} callback={setLoneTenureType} />
				</div>
			</div>
			<div></div>
		</div>
	);
}

export default HomeLoanCalculator;
