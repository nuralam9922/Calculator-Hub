import React from 'react';
import './sidebar.css';
import { Link } from 'react-router-dom';
import { CiCalculator1, CiLogout } from 'react-icons/ci';
import { HiOutlineCash } from 'react-icons/hi';
import { IoHomeOutline, IoSettingsOutline } from 'react-icons/io5';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const sidebarLinks = [
	{
		name: 'Home',
		path: '/',
		icon: <IoHomeOutline />,
	},
	{
		name: 'Calculator',
		path: '/calculator',
		icon: <CiCalculator1 />,
	},
	{
		name: 'Emi Calculator',
		path: '/emi-calculator',
		icon: <HiOutlineCash />,
	},
	{
		name: 'loan calculator',
		path: '/loan-calculator',
		icon: <IoSettingsOutline />,
	},
	{
		name: 'setting',
		path: '#',
		icon: <IoSettingsOutline />,
	},
];

function Sidebar({ isSideBarOppen, setIsSideBarOppen }) {
	const sidebarRef = useRef();
	const [currentTab, setCurrentTab] = useState(1);
	let { pathname } = useLocation();

	const handelSideBarTab = (tabNumber) => {
		setCurrentTab(tabNumber);
	};

	useEffect(() => {
		if (pathname.split('/')[1] === 'calculator') {
			setCurrentTab(2);
		} else if (pathname.split('/')[1] === 'emi-calculator') {
			setCurrentTab(3);
		} else if (pathname.split('/')[1] === 'loan-calculator') {
			setCurrentTab(4);
		}
	}, []);

	return (
		<aside
			ref={sidebarRef}
			style={{ visibility: isSideBarOppen ? 'visible' : 'hidden', width: isSideBarOppen ? '15rem' : '0px' }}
			className=" h-screen  md:block bg-background duration-200 text-white flex-shrink-0 fixed top-0 left-0 lg:static z-[999] shadow-xl	 overflow-hidden text-ellipsis text-nowrap "
		>
			<div className="p-4 relative h-full ">
				{/* Sidebar Logo */}
				<h1 className="text-xl font-bold text-text logo">Calculator Hub</h1>
				{/* Sidebar Navigation */}
				<nav className="mt-6    ">
					<ul className="flex flex-col gap-2">
						{sidebarLinks.map((item, index) => (
							<>
								<Link
									onClick={() => {
										handelSideBarTab(index + 1);
										setIsSideBarOppen((prev) => (window.innerWidth < 1024 ? !prev : prev));
									}}
									key={item.path + 1}
									to={`${item.path}`}
								>
									<p
										onClick={() => handelSideBarTab(1)}
										className={`text-textSecondary duration-75 flex items-center  gap-2 hover:bg-accent ${
											currentTab === index + 1 && 'text-[#578CFE] bg-[#d6e0f9]'
										} py-3 px-2 rounded-md`}
									>
										{' '}
										<span>{item.icon}</span> <p className="capitalize">{item.name}</p>
									</p>
								</Link>
							</>
						))}
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
