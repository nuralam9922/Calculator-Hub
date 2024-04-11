import React from 'react';
import { Outlet } from 'react-router-dom';
import './App.css';

import { useState } from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import { changeTheme } from './theme/theme';
import { useEffect } from 'react';
import { Suspense } from 'react';
function App() {
	document.title = 'Calculator Hub';

	const [isSideBarOppen, setIsSideBarOppen] = useState(false);

	useEffect(() => {
		const theme = localStorage.getItem('theme');
		changeTheme(theme || 'theme1');
	}, []);

	return (
		<div className="flex w-full h-screen overflow-hidden relative container mx-auto poppins-regular bg-background">
			{/* Sidebar */}

			<Sidebar isSideBarOppen={isSideBarOppen} setIsSideBarOppen={setIsSideBarOppen} />

			{/* Main Content Area */}
			<main className="flex-1 overflow-y-auto hideScrollBar  bg-background relative">
				{/* Navbar */}
				<Navbar setIsSideBarOppen={setIsSideBarOppen} />

				{/* Main Content */}
				<div className="container h-auto mx-auto ">
					<Suspense fallback={<div className="w-full h-screen flex items-center justify-center text-text">Loading...</div>}>
						<Outlet />
					</Suspense>
				</div>
			</main>
		</div>
	);
}

export default App;
