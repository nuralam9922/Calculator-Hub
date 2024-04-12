import React from 'react';
import './index.css';
import { FaRegCopy } from 'react-icons/fa';
import { useState } from 'react';

const signs = ['sin', 'cos', 'tan', 'rad', 'deg', 'log', 'ln', '(', ')', 'inv', '!', '^', 'e', 'pi'];

function Calculator() {
	const [currentSigns, setCurrentSigns] = useState([]);
	const handelSignSelect = (sign) => {
		setCurrentSigns((prev) => {
			const existingSignIndex = prev.indexOf(sign);
			if (existingSignIndex === -1) {
				return [...prev, sign];
			} else {
				return prev.filter((s) => s !== sign);
			}
		});
	};

	return (
		<div className="w-full   px-5  h-fit py-5 ">
			<div className="flex items-center  justify-end mt-10 overflow-x-auto">
				<div className="w-full overflow-x-auto customScrollbar text-nowrap  text-2xl text-end text-text font-bold">1000 + 10</div>
			</div>
			{/* output for the entair calculation */}
			<div className="flex items-center gap-3 justify-end mt-2 overflow-x-auto">
				<div className="w-full overflow-x-auto customScrollbar text-nowrap  text-2xl text-end text-text">10010</div>
				<div className="bg-accent bg-opacity-35 cursor-pointer py-1 active:scale-90 px-2 md:py-2 md:px-3 rounded-md text-sm md:text-base text-white hover:bg-secondary-dark transition duration-300 shadow-md">
					<FaRegCopy className="text-black" />
				</div>
			</div>

			{/* calculation box or btn */}
			<div className=" w-full   mt-6 flex flex-col lg:flex-row  ">
				{/* top column or advance column and it show only  the mobile view */}
				<div className="w-full  lg:hidden flex items-center gap-3 overflow-x-auto ">
					{signs.map((sign, index) => (
						<button
							onClick={() => handelSignSelect(sign)}
							key={index} // Use the index as the key
							type="button"
							className={`h-10 flex-shrink-0 w-20 bg-zinc-700 active:scale-90 text-white rounded-md ${
								currentSigns.includes(sign) ? 'bg-primary' : 'bg-zinc-700'
							}`}
						>
							{sign}
						</button>
					))}
				</div>

				<div className="flex items-start justify-between w-full   h-full gap-4">
					<div className="w-full lg:w-full  h-full ">
						{/* top row */}

						<div className="min-h-20 w-full   grid grid-cols-4 mt-10 md:mt-0 md:grid-cols-4 gap-4 place-content-start text-text">
							<button type="button" className=" bg-zinc-700 rounded-md active:scale-95 duration-100 w-full h-12 text-white ">
								CE
							</button>
							<button type="button" className=" bg-zinc-700 rounded-md active:scale-95 duration-100 w-full h-12 text-white">
								+
							</button>
							<button type="button" className=" bg-zinc-700 rounded-md active:scale-95 duration-100 w-full h-12 text-white">
								-
							</button>
							<button type="button" className=" bg-zinc-700 rounded-md active:scale-95 duration-100 w-full h-12 text-white">
								/
							</button>
							<button type="button" className=" bg-zinc-700 rounded-md active:scale-95 duration-100 w-full h-12 text-white">
								*
							</button>
							<button type="button" className=" bg-zinc-700 rounded-md active:scale-95 duration-100 w-full h-12 text-white">
								%
							</button>
							<button type="button" className=" bg-zinc-700 rounded-md active:scale-95 duration-100 w-full h-12 text-white">
								%
							</button>
							<button type="button" className=" bg-zinc-700  rounded-md active:scale-95 duration-100 w-full h-12 text-white">
								√
							</button>
						</div>
						<div className="h-full w-full  mt-10 grid grid-cols-4 md:grid-cols-5 gap-4 place-content-start text-text">
							<button type="button" className=" bg-zinc-700 active:scale-95 duration-200 rounded-md w-full h-14 text-white ">
								7
							</button>
							<button type="button" className=" bg-zinc-700 active:scale-95 duration-200 rounded-md w-full h-14 text-white">
								8
							</button>
							<button type="button" className=" bg-zinc-700 active:scale-95 duration-200 rounded-md w-full h-14 text-white">
								9
							</button>
							<button type="button" className=" bg-zinc-700 active:scale-95 duration-200 rounded-md w-full h-14 text-white">
								4
							</button>
							<button type="button" className=" bg-zinc-700 active:scale-95 duration-200 rounded-md w-full h-14 text-white">
								5
							</button>
							<button type="button" className=" bg-zinc-700 active:scale-95 duration-200 rounded-md w-full h-14 text-white">
								6
							</button>
							<button type="button" className=" bg-zinc-700 active:scale-95 duration-200 rounded-md w-full h-14 text-white">
								1
							</button>
							<button type="button" className=" bg-zinc-700 active:scale-95 duration-200 rounded-md w-full h-14 text-white">
								2
							</button>
							<button type="button" className=" bg-zinc-700 active:scale-95 duration-200 rounded-md w-full h-14 text-white">
								3
							</button>
							<button type="button" className=" bg-zinc-700 active:scale-95 duration-200 rounded-md w-full h-14 text-white">
								0
							</button>
							<button type="button" className=" bg-zinc-700 active:scale-95 duration-200 rounded-md w-full h-14 text-white">
								00
							</button>
							<button type="button" className=" bg-zinc-700 active:scale-95 duration-200 rounded-md w-full h-14 text-white">
								.
							</button>
							<button
								type="button"
								className="  bg-secondary active:scale-95 duration-150 rounded-md text-text col-span-4 md:col-span-3 w-full h-14 font-bold "
							>
								=
							</button>
						</div>
					</div>
					<div className="w-full lg:w-[40%] hidden  lg:flex flex-wrap gap-5 duration-1000">
						{signs.map((sign, index) => (
							<button
								onClick={() => handelSignSelect(sign)}
								key={index} // Use the index as the key
								type="button"
								className={`btn ${currentSigns.includes(sign) ? 'bg-primary' : 'bg-zinc-700'}`}
							>
								{sign}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
