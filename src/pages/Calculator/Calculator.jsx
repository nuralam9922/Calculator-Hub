import React from 'react';
import './index.css';
import { FaRegCopy } from 'react-icons/fa';
function Calculator() {
	return (
		<div className="w-full  border-2 px-5  h-fit overflow- ">
			<div className="flex items-center  justify-end mt-10 overflow-x-auto">
				<div className="w-full overflow-x-auto customScrollbar text-nowrap  text-2xl text-end text-text font-bold">1000 + 10</div>
			</div>
			{/* output for the entair calculation */}
			<div className="flex items-center gap-3 justify-end mt-2 overflow-x-auto">
				<div className="w-full overflow-x-auto customScrollbar text-nowrap  text-2xl text-end text-text">10010</div>
				<div className="bg-accent bg-opacity-35 cursor-pointer py-1 active:scale-90 px-2 md:py-2 md:px-3 rounded-md text-sm md:text-base text-white hover:bg-secondary-dark transition duration-300 shadow-md">
					<FaRegCopy />
				</div>
			</div>

			{/* calculation box or btn */}
			<div className="border-2 w-full h-[30rem]  mt-6 flex flex-col lg:flex-row">
				{/* top column or advance column and it show only  the mobile view */}
				<div className="w-full py-5 bg-slate-400 lg:hidden">Top</div>
				<div className="flex items-start justify-between w-full  h-full">
					<div className="w-full lg:w-full  h-full bg-orange-400">Left side</div>
					<div className="w-full lg:w-[40%] hidden lg:block h-full bg-blue-300">Right side</div>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
