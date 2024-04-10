import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { CiCalculator1, CiLogout } from 'react-icons/ci';
import { HiOutlineCash } from 'react-icons/hi';
import { IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import { useRef } from 'react';
function Sidebar({ isSideBarOppen, setIsSideBarOppen }) {
	const sidebarRef = useRef();

	return (
		<aside
			ref={sidebarRef}
			style={{ visibility: isSideBarOppen ? 'visible' : 'hidden', width: isSideBarOppen ? '15rem' : '0px' }}
			className=" h-screen md:block bg-[#edeff8] duration-200 text-white flex-shrink-0 fixed top-0 left-0 md:static z-[99] overflow-hidden text-ellipsis text-nowrap "
		>
			<div className="p-4 relative h-full border-2">
				{/* Sidebar Logo */}
				<h1 className="text-xl font-bold text-black">Calculator Hub</h1>
				{/* Sidebar Navigation */}
				<nav className="mt-6 text   ">
					<ul className="space-y-2">
						<Link to={'/'}>
							<p className="text-[#9799a2] flex items-center  gap-2 hover:bg-[#d6e0f9] hover:text-[#578CFE]  py-3 px-2 rounded-md">
								{' '}
								<span>
									<IoHomeOutline />
								</span>{' '}
								Home
							</p>
						</Link>
						<Link to={'/calculator'}>
							<p className="text-[#9799a2] flex items-center  gap-2 hover:bg-[#d6e0f9] hover:text-[#578CFE]  py-3 px-2 rounded-md">
								{' '}
								<span>
									<CiCalculator1 />
								</span>{' '}
								Calculator
							</p>
						</Link>
						<Link to={'/emi-calculator'}>
							<p className="text-[#9799a2] flex items-center  gap-2 hover:bg-[#d6e0f9] hover:text-[#578CFE]  py-3 px-2 rounded-md">
								{' '}
								<span>
									<HiOutlineCash />
								</span>{' '}
								Emi Calculator
							</p>
						</Link>
						<Link to={'/loan-calculator'}>
							<p className="text-[#9799a2] flex items-center  gap-2 hover:bg-[#d6e0f9] hover:text-[#578CFE]  py-3 px-2 rounded-md">
								{' '}
								<span>
									<svg className="size-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
										<path d="M10 8H14V6.5C14 4.567 15.567 3 17.5 3C19.433 3 21 4.567 21 6.5C21 8.433 19.433 10 17.5 10H16V14H17.5C19.433 14 21 15.567 21 17.5C21 19.433 19.433 21 17.5 21C15.567 21 14 19.433 14 17.5V16H10V17.5C10 19.433 8.433 21 6.5 21C4.567 21 3 19.433 3 17.5C3 15.567 4.567 14 6.5 14H8V10H6.5C4.567 10 3 8.433 3 6.5C3 4.567 4.567 3 6.5 3C8.433 3 10 4.567 10 6.5V8ZM8 8V6.5C8 5.67157 7.32843 5 6.5 5C5.67157 5 5 5.67157 5 6.5C5 7.32843 5.67157 8 6.5 8H8ZM8 16H6.5C5.67157 16 5 16.6716 5 17.5C5 18.3284 5.67157 19 6.5 19C7.32843 19 8 18.3284 8 17.5V16ZM16 8H17.5C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5V8ZM16 16V17.5C16 18.3284 16.6716 19 17.5 19C18.3284 19 19 18.3284 19 17.5C19 16.6716 18.3284 16 17.5 16H16ZM10 10V14H14V10H10Z"></path>
									</svg>
								</span>{' '}
								Loan Calculator
							</p>
						</Link>
						<Link to={''}>
							<p className="text-[#9799a2] flex items-center  gap-2 hover:bg-[#d6e0f9] hover:text-[#578CFE]  py-3 px-2 rounded-md">
								{' '}
								<span>
									<IoSettingsOutline />
								</span>{' '}
								Setting
							</p>
						</Link>
					</ul>
					<div className="absolute bottom-5 w-32 z-[999] cursor-pointer">
						<p className="text-[#9799a2] flex items-center  gap-2  hover:text-[#578CFE]  py-3 px-2 rounded-md">
							{' '}
							<span>
								<CiLogout />
							</span>{' '}
							Log out
						</p>
					</div>
				</nav>
			</div>
		</aside>
	);
}

export default Sidebar;
