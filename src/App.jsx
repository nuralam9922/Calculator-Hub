import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import { changeTheme } from './theme/theme';
function App() {
	document.title = 'Calculator Hub';
	changeTheme('theme1');
	const [isSideBarOppen, setIsSideBarOppen] = useState(false);

	return (
		<div className="flex w-full h-screen overflow-hidden relative container mx-auto poppins-regular">
			{/* Sidebar */}

			<Sidebar isSideBarOppen={isSideBarOppen} setIsSideBarOppen={setIsSideBarOppen} />

			{/* Main Content Area */}
			<main className="flex-1 overflow-y-auto hideScrollBar  bg-gray-100 relative">
				{/* Navbar */}
				<Navbar setIsSideBarOppen={setIsSideBarOppen} />

				{/* Main Content */}
				<div className="container h-screen mx-auto mt-1">
					<Outlet />
				</div>
			</main>
		</div>
	);
}

export default App;
