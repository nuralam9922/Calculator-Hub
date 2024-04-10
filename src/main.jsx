import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Calculator from './pages/Calculator/Calculator.jsx';
import EmiCalculator from './pages/EmiCalculator/EmiCalculator.jsx';
import LoneCalculator from './pages/LoanCalculator/LoenCalculator.jsx';

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
