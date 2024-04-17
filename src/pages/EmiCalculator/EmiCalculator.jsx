import React from 'react';
import { Outlet } from 'react-router-dom';

import './index.css';
import { Link } from 'react-router-dom';
import { Suspense } from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { IoCarOutline } from 'react-icons/io5';
import { GoPeople } from 'react-icons/go';
import { MdCastForEducation } from 'react-icons/md';
import { IoBusinessOutline } from 'react-icons/io5';
import { AiOutlineGold } from 'react-icons/ai';

const boxList = [
	{ name: 'Home Loan', icon: <IoHomeOutline className="mb-2" />, pathname: '/emi-calculator/home-loan', background: '#7394f3' },
	{ name: 'Car Loan', icon: <IoCarOutline className="mb-2" />, pathname: '/emi-calculator/car-loan', background: '#ffb366' },
	{ name: 'Personal Loan', icon: <GoPeople className="mb-2" />, pathname: '/emi-calculator/personal-loan', background: '#f89cc3' },
	{ name: 'Education Loan', icon: <MdCastForEducation className="mb-2" />, pathname: '/emi-calculator/education-loan', background: '#8ac926' },
	{ name: 'Business Loan', icon: <IoBusinessOutline className="mb-2" />, pathname: '/emi-calculator/business-loan', background: '#1982c4' },
	{ name: 'Gold Loan', icon: <AiOutlineGold className="mb-2" />, pathname: '/emi-calculator/gold-loan', background: '#2ccdd8' },
];

function EmiCalculator() {
	return (
		<div className="px-6 mt-6">
			<div className=" text-center text-xl md:text-2xl mb-3	text-text font-bold capitalize">Emi calculator</div>

			<div className="boxes grid grid-cols-3 text-xs lg:text-lg text-white lg:grid-cols-6 text-left gap-5 mt-3">
				{boxList.map((item, index) => (
					<>
						<Link key={index} to={item.pathname} style={{ backgroundColor: item.background }} className="box">
							{item.icon}
							<p>{item.name}</p>
						</Link>
					</>
				))}
			</div>

			<Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-text">Loading...</div>}>
				<Outlet />
			</Suspense>
		</div>
	);
}

export default EmiCalculator;
