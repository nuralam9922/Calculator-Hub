import React from 'react';
import { FaAlignRight, FaAngleDown } from 'react-icons/fa6';
import { IoSearch } from 'react-icons/io5';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FiMessageCircle } from 'react-icons/fi';
import { CiCloudMoon } from 'react-icons/ci';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { changeTheme } from '../../theme/theme';
const themeList = [
	{
		name: 'theme 1',
		theme: 'theme1',
	},
	{
		name: 'theme 2',
		theme: 'theme2',
	},
	{
		name: 'theme 3',
		theme: 'theme3',
	},
	{
		name: 'theme 4',
		theme: 'theme4',
	},
	{
		name: 'theme 5',
		theme: 'theme5',
	},
	{
		name: 'theme 6',
		theme: 'theme6',
	},
	{
		name: 'theme 7',
		theme: 'theme7',
	},
	{
		name: 'theme 8',
		theme: 'theme8',
	},
	{
		name: 'theme 9',
		theme: 'theme9',
	},
];

function Navbar({ setIsSideBarOppen }) {
	const [themeMenuOppen, setThemeMenuOppen] = useState(false);
	const [currentTheme, setCurrentThem] = useState(1);
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

	const themetab = (themeNumber, theme) => {
		console.log('aa');
		setCurrentThem(themeNumber);
		localStorage.setItem('theme', '${theme}');
	};

	return (
		<nav className="bg-background text-text  py-4 px-6 sticky top-0 flex items-center justify-between z-[99]">
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
			<h1 className="font-bold md:hidden text-text">Calculator hub</h1>
			<div className="flex items-center text-text justify-between w-auto ">
				<div className="hidden md:flex items-center cursor-pointer  w-52 justify-center rounded-sm">
					<div className="profileLogo size-8 rounded-full "></div>
					<div className="ml-3">
						<p className="font-bold text-xs text-text">Nuralam Mondal</p>
						<p className="text-slate-500">nuralam9922</p>
					</div>
					<FaAngleDown className="ml-3 text-blue-400" />
				</div>
				<div ref={themeMenuRef} className="cursor-pointer hidden md:flex relative text-text p-2 items-center justify-center  text-xl">
					<p onClick={handelSetThemeMenu} className="flex items-center justify-center select-none">
						Themes <CiCloudMoon className="ml-2 text-primary" />
					</p>
					<div
						style={{ display: themeMenuOppen ? 'block' : 'none' }}
						className="absolute select-none top-10 bg-white w-52  text-text left-0 z-[999] divide-y"
					>
						{themeList.map((item, i) => (
							<>
								<div
									// onClick={() => setCurrentThem(i + 1)}
									key={i}
									onClick={(e) => changeTheme(`${item.theme}`, setCurrentThem(i + 1, e.target.value))}
									className={`w-full capitalize py-3 px-2 ${currentTheme === i + 1 && 'bg-blue-200'} hover:bg-blue-200 text-black`}
								>
									{item.name}
								</div>
							</>
						))}
					</div>
				</div>
				<h1 className="cursor-pointer text-text p-2 items-center justify-center flex text-xl">
					<IoIosNotificationsOutline />{' '}
				</h1>
				<h1 className="cursor-pointer text-text p-2 items-center justify-center flex text-xl">
					<FiMessageCircle />{' '}
				</h1>
				<div
					onClick={() => setIsSideBarOppen((prev) => !prev)}
					className="cursor-pointer text-text size-10 items-center justify-center flex text-xl"
				>
					<FaAlignRight className="" />
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
