import React from 'react';
import { FaAlignRight, FaAngleDown } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FiMessageCircle } from 'react-icons/fi';
import { CiCloudMoon } from 'react-icons/ci';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
function Navbar({ setIsSideBarOppen }) {
	const [themeMenuOppen, setThemeMenuOppen] = useState(false);
	const themeMenuRef = useRef();

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (themeMenuRef.current && !themeMenuRef.current.contains(event.target)) {
				setThemeMenuOppen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => {
			document.removeEventListener('click', handleClickOutside);
		};
	}, [themeMenuRef]);
	const handelSetThemeMenu = () => {
		setThemeMenuOppen((prev) => !prev);
	};
	return (
		<nav className="bg-white  py-4 px-6 sticky top-0 flex items-center justify-between">
			<div className="container mx-auto relative  hidden md:block">
				<IoSearch className="absolute top-1/2 left-5 -translate-y-1/2 -translate-x-1/2 " />
				<input
					type="text"
					className="w-64 py-2 bg-transparent border-[3px] rounded-md focus:border-blue-400 outline-none indent-9"
					placeholder="Search..."
					name=""
					id=""
				/>
			</div>
			<h1 className="font-bold md:hidden text-black">Calculator hub</h1>
			<div className="flex items-center text-black justify-between w-auto ">
				<div className="hidden md:flex items-center cursor-pointer hover:bg-slate-100 w-52 justify-center rounded-sm">
					<div className="profileLogo size-8 rounded-full bg-slate-200"></div>
					<div className="ml-3">
						<p className="font-bold text-xs text-zinc-600">Nuralam Mondal</p>
						<p className="text-slate-500">nuralam9922</p>
					</div>
					<FaAngleDown className="ml-3 text-blue-400" />
				</div>
				<div
					ref={themeMenuRef}
					className="cursor-pointer hidden md:flex relative text-black hover:bg-slate-100 p-2 items-center justify-center  text-xl"
				>
					<p onClick={handelSetThemeMenu} className="flex items-center justify-center select-none">
						Themes <CiCloudMoon className="ml-2" />
					</p>
					<div style={{ display: themeMenuOppen ? 'block' : 'none' }} className="absolute select-none top-10 bg-white w-52 h-52 left-0 divide-y">
						<div className="w-full py-3 px-2 hover:bg-blue-200 hover:text-white">Theme 1</div>
						<div className="w-full py-3 px-2 hover:bg-blue-200 hover:text-white">Theme 2</div>
						<div className="w-full py-3 px-2 hover:bg-blue-200 hover:text-white">Theme 3</div>
						<div className="w-full py-3 px-2 hover:bg-blue-200 hover:text-white">Theme 4</div>
					</div>
				</div>
				<h1 className="cursor-pointer text-black hover:bg-slate-100 p-2 items-center justify-center flex text-xl">
					<IoIosNotificationsOutline />{' '}
				</h1>
				<h1 className="cursor-pointer text-black hover:bg-slate-100 p-2 items-center justify-center flex text-xl">
					<FiMessageCircle />{' '}
				</h1>
				<div
					onClick={() => setIsSideBarOppen((prev) => !prev)}
					className="cursor-pointer text-black hover:bg-slate-100 size-10 items-center justify-center flex text-xl"
				>
					<FaAlignRight className="" />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
