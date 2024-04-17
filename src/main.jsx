import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';

const Home = React.lazy(() => import('./pages/Home/Home.jsx'));
const Calculator = React.lazy(() => import('./pages/Calculator/Calculator.jsx'));
const EmiCalculator = React.lazy(() => import('./pages/EmiCalculator/EmiCalculator.jsx'));
const LoneCalculator = React.lazy(() => import('./pages/LoanCalculator/LoenCalculator.jsx'));
const HomeLoanCalculator = React.lazy(() => import('./pages/HomeLoanCalculator/HomeLoanCalculator.jsx'));
const CarLoanCalculator = React.lazy(() => import('./pages/CarLoanCalculator/CarLoanCalculator.jsx'));
const PersonalLoanCalculator = React.lazy(() => import('./pages/PersonalLoanCalculator/PersonalLoanCalculator.jsx'));

const routs = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/calculator',
				element: <Calculator />,
			},
			{
				path: '/emi-calculator',
				element: <EmiCalculator />,
				children: [
					{
						path: 'home-loan',
						element: <HomeLoanCalculator />,
					},
					{
						path: 'car-loan',
						element: <CarLoanCalculator />,
					},
					{
						path: 'personal-loan',
						element: <PersonalLoanCalculator />,
					},
				],
			},
			{
				path: '/loan-calculator',
				element: <LoneCalculator />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={routs}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
