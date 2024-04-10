import React from 'react';
import heroImage from '../../assets/hero.png';
function Home() {
	return (
		<main className="min-h-screen w-full">
			{/* Header */}
			<nav className="w-full flex items-center justify-between bg-gray-50 px-8 py-5 shadow-md">
				<div className="logo font-bold text-lg text-gray-800">CALCULATOR HUB</div>
				<a
					href="https://github.com"
					target="_blank"
					rel="noopener noreferrer"
					className="p-2 px-6 border border-gray-600 rounded-md text-gray-600 hover:bg-gray-100 transition duration-300"
				>
					GitHub
				</a>
			</nav>

			{/* Main Content */}
			<section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 py-10 px-10">
				<div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
					<div className="text-black flex flex-col items-center md:items-start justify-between gap-3 md:gap-0">
						<h1 className="font-bold text-3xl text-nowrap md:text-4xl leading-tight md:leading-relaxed mb-4">Welcome to Calculator Hub</h1>
						<div className="flex items-center">
							<h1 className="font-bold text-3xl md:text-4xl leading-tight md:leading-relaxed mr-2">
								<span className="bg-yellow-400 px-3 py-1 rounded-md text-gray-900">your destination for</span>
							</h1>
						</div>
						<h1 className="font-bold text-3xl md:text-4xl leading-tight md:leading-relaxed">all financial calculations.</h1>
					</div>
					<p className="text-sm md:text-base text-gray-700 mt-6 max-w-md md:max-w-lg text-justify">
						Calculator Hub is your go-to platform for a wide range of financial calculations, from loan and mortgage calculations to EMI and
						investment planning. Whether you're a seasoned investor or just getting started, our tools are designed to simplify complex
						financial calculations and empower you to make informed decisions.
					</p>

					<div className="mt-8 flex flex-col md:flex-row">
						<button
							type="button"
							className="bg-yellow-400 text-sm md:text-base px-4 py-2 rounded-md text-gray-900 hover:bg-yellow-500 transition duration-300 mr-4 mb-4 md:mb-0"
						>
							Explore Calculators
						</button>
						<button
							type="button"
							className="hover:bg-gray-900 border-2 border-yellow-400 text-black text-sm md:text-base px-4 py-2 rounded-md hover:text-white  transition duration-300 mr-4 mb-4 md:mb-0"
						>
							Explore Calculators
						</button>
					</div>
				</div>
				<div className="w-full md:w-1/2">
					<img src={heroImage} alt="Calculator" className="w-full rounded-lg shadow-md" />
				</div>
			</section>
			{/* Additional Section */}
			<section className="bg-gray-200 py-16 px-10">
				<div className="max-w-4xl mx-auto text-center">
					<h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-10">Why Choose Calculator Hub?</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{/* Reason 1 */}
						<div className="bg-white p-8 rounded-lg shadow-md">
							<h3 className="text-xl font-bold text-gray-800 mb-4">User-Friendly Interface</h3>
							<p className="text-gray-600">
								Our intuitive platform makes it easy for users to navigate and access various financial calculators.
							</p>
						</div>
						{/* Reason 2 */}
						<div className="bg-white p-8 rounded-lg shadow-md">
							<h3 className="text-xl font-bold text-gray-800 mb-4">Accurate Calculations</h3>
							<p className="text-gray-600">
								Trust our calculators to provide accurate results, helping you make informed financial decisions.
							</p>
						</div>
						{/* Reason 3 */}
						<div className="bg-white p-8 rounded-lg shadow-md">
							<h3 className="text-xl font-bold text-gray-800 mb-4">Wide Range of Tools</h3>
							<p className="text-gray-600">
								From loan calculations to investment planning, our platform offers a comprehensive suite of financial tools.
							</p>
						</div>
						{/* Reason 4 */}
						<div className="bg-white p-8 rounded-lg shadow-md">
							<h3 className="text-xl font-bold text-gray-800 mb-4">Responsive Support</h3>
							<p className="text-gray-600">Our dedicated support team is always available to assist you with any queries or concerns.</p>
						</div>
					</div>
				</div>
			</section>
			<footer className="py-6 bg-gray-900 text-gray-50 mt-10">
				<div className="container mx-auto flex flex-col px-5 justify-between sm:flex-row items-center">
					<p className="text-xs">© 2024 Nuralam Mondal. All rights reserved.</p>
					<div className="flex items-center mt-4 sm:mt-0">
						<p>Made with ❤️ by Nuralam Mondal </p>
					</div>
				</div>
				<div className="container mx-auto mt-4 text-center">
					<p className="text-xs">This UI and content were generated by Ai and edited by Nuralam Mondal .</p>
				</div>
			</footer>
		</main>
	);
}

export default Home;
