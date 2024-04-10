import React from 'react';
import heroImage from '../../assets/hero.png';
import './home.css';
function Home() {
	return (
		<main className="min-h-screen w-full poppins-regular">
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
			<section className="flex flex-col md:flex-row items-center justify-between bg-gray-50 py-10 px-10 relative z-[10]">
				<div className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8">
					<div className="text-black poppins-semibold flex flex-col items-center md:items-start justify-between gap-3  md:gap-0">
						<h1 className="font-bold text-3xl text-nowrap md:text-4xl leading-tight md:leading-relaxed">Welcome to Calculator Hub</h1>
						<div className="flex items-center">
							<h1 className="font-bold text-3xl md:text-4xl leading-tight md:leading-relaxed mr-2">
								<span className="bg-[#FDDF67] px-3 py-1 rounded-md text-gray-900">your destination for</span>
							</h1>
						</div>
						<h1 className="font-bold text-3xl md:text-4xl leading-tight md:leading-relaxed">all financial calculations.</h1>
					</div>
					<p className="text-sm md:text-base poppins-regular  text-gray-700 mt-6 max-w-md md:max-w-lg text-justify">
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
				{/* middle arrow */}
				<div className="arrow hidden  lg:block absolute top-[20%] left-1/2 -translate-x-1/2 -translate-y-1/2">
					<svg width="168" height="87" viewBox="0 0 168 87" fill="none" xmlns="http://www.w3.org/2000/svg">
						<g clip-path="url(#clip0_102_1247)">
							<path
								d="M162.177 59.382C160.541 50.439 158.505 41.3232 151.787 34.7016C145.779 28.7896 137.494 25.7512 129.217 24.9431C120.203 24.0668 111.05 26.2433 102.918 30.0843C98.7349 32.0597 94.7705 34.4416 91.0059 37.1252C89.1432 38.4641 87.3186 39.8732 85.5489 41.3301C83.7792 42.787 81.9805 44.264 80.8122 46.2591C79.8217 47.9692 79.5261 50.1202 80.3405 51.9502C81.1988 53.8895 83.2286 54.8095 85.2439 55.0304C89.7972 55.5275 94.7101 53.3025 98.415 50.8109C105.591 46.0012 111.695 36.757 108.965 27.8338C106.234 18.9106 96.4976 14.7006 87.7536 13.9485C79.0096 13.1964 68.9434 14.8044 60.1563 17.2743C43.478 21.9563 28.0085 30.9452 15.9944 43.4521C14.5008 44.9964 13.0845 46.6051 11.723 48.2616C10.1535 50.1596 15.3898 50.5254 16.4967 49.2287C26.3096 37.6836 38.6563 28.5672 52.7474 22.8909C59.7031 20.0937 67.0088 18.1064 74.4441 17.168C82.4653 16.1445 91.5059 15.7337 98.2443 20.9656C101.274 23.3182 103.54 26.6744 104.071 30.5182C104.602 34.3621 103.457 38.5652 101.396 42.0091C99.3345 45.453 96.4254 48.1755 93.0549 50.1442C91.6105 50.988 90.0483 51.7094 88.4317 52.1677C87.6842 52.3761 86.9981 52.5955 86.3388 52.0977C85.5552 51.5143 85.2715 50.4757 85.2227 49.5424C85.0371 45.6842 89.4447 42.9509 92.127 40.8592C95.3539 38.3455 98.7467 36.0388 102.315 34.0294C108.858 30.3478 116.242 27.6398 123.83 27.4761C131.788 27.3025 139.928 29.9477 145.939 35.2018C153.138 41.4785 155.218 50.8429 156.901 59.8069C157.253 61.6684 162.48 61.0953 162.169 59.3552L162.182 59.3574L162.177 59.382Z"
								fill="black"
							/>
							<path
								d="M29.9886 44.283L16.3173 50.9462L9.73246 54.1517C7.8995 55.04 5.88046 56.4017 3.79019 56.4587L6.49289 57.2331C5.61303 55.2013 6.41122 52.7222 6.91274 50.6967C7.48709 48.4055 8.15978 46.132 8.82017 43.8562C10.1431 39.2924 11.6351 34.4928 11.6307 29.6918C11.6248 27.8795 6.58873 28.3094 6.36241 30.1434C5.7326 35.2998 4.49218 40.1823 3.04547 45.1546C2.34208 47.6 1.6264 50.0432 1.10298 52.5461C0.675212 54.5848 0.456805 56.4456 1.29847 58.4072C1.65849 59.2315 3.31333 59.1979 4.00116 59.1815C6.58833 59.112 8.89886 58.1064 11.1923 56.9837C13.7209 55.7511 16.2496 54.5185 18.7906 53.2881L33.977 45.8824C35.0195 45.3721 34.717 44.3681 33.8122 43.9658C32.6011 43.4327 31.1135 43.7368 29.9741 44.2931L29.9886 44.283Z"
								fill="black"
							/>
						</g>
						<defs>
							<clipPath id="clip0_102_1247">
								<rect width="159.828" height="59.5722" fill="white" transform="translate(157.335 86.7617) rotate(-169.867)" />
							</clipPath>
						</defs>
					</svg>
				</div>

				{/* right side image */}
				<div className="w-full md:w-1/2">
					<img src={heroImage} alt="Calculator" className="w-full " />
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

			{/* footer */}
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
