import React from 'react';
import './index.css';
import { FaAmazon, FaRegCopy } from 'react-icons/fa';
import { useState } from 'react';
import { FaDeleteLeft } from 'react-icons/fa6';
import { FaSquareRootAlt } from 'react-icons/fa';
import { useEffect } from 'react';

const signs = ['sin', 'cos', 'tan', 'rad', 'deg', 'log', 'ln', '(', ')', 'inv', '!', '^', 'e', 'PI'];
const numberValues = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '00', '.'];
const arithmeticOperations = ['+', '-', '/', '*', '%'];

function Calculator() {
	const [userInput, setUserInput] = useState('0');
	const [output, setOutput] = useState('');

	const handelCopy = () => {
		navigator.clipboard.writeText(output);
	};

	const handelAddInput = (number) => {
		setUserInput((prev) => (prev == 0 ? `${number}` : `${prev + number}`));
	};

	const handelAddOperation = (operator) => {
		setUserInput((prev) => {
			// If previous input is 0 or empty, return just the operator
			if (prev == '0' || prev === '') {
				return operator;
			}

			//  this logic make my chatGpt *****
			// If previous input ends with an arithmetic operator, replace it with the new operator
			if (['+', '-', '*', '/', '%'].includes(prev.slice(-1))) {
				return prev.slice(0, -1) + operator;
			}

			// Otherwise, concatenate the operator with a space
			return prev + operator;
		});
	};

	const handelCalculateResult = () => {
		try {
			const result = eval(userInput);

			// Update the output with the result
			setOutput(result);
		} catch (error) {
			// Handle any errors that occur during evaluation
			setOutput('Error');
		}
	};

	const handelSquareRoot = () => {
		const result = eval(userInput);
		const sqrt = Math.sqrt(result);
		setOutput(sqrt);
	};
	const handelSin = (sign) => {
		const result = eval(userInput);
		if (sign === 'sin') {
			const sin = Math.sin(result);
			setOutput(sin);
		}
		if (sign === 'cos') {
			const cos = Math.cos(result);
			setOutput(cos);
		}
		if (sign === 'PI') {
			const PI = Math.PI;
			setOutput(PI);
		}
	};

	const handelDelete = () => {
		setUserInput((prev) => {
			if (prev === '0' || prev === '') {
				return '0';
			}

			if (prev.length === 1) {
				return '0';
			}

			//  prev.slice(0, -1); it rerun all the element except the last one

			const previousValue = prev.slice(0, -1);
			return previousValue;
		});
	};

	useEffect(() => {
		const handleKeyPress = (e) => {
			const key = e.key;

			// Check if the pressed key is a numerical digit or an operator
			if (/(\+|-|\*|\/|%)/.test(key)) {
				handelAddOperation(key);
			}

			if (/^(?:[0-9]|00)$/.test(key)) {
				handelAddInput(key);
				handelCalculateResult();
			}
		};

		const handleKeyDown = (e) => {
			let key = e.key;
			if (key === 'Enter') {
				handelCalculateResult();
			}
			if (key === 'Backspace') {
				handelDelete();
			}
		};

		document.addEventListener('keypress', handleKeyPress);
		document.addEventListener('keydown', handleKeyDown);

		// Clean up by removing the event listener when the component unmounts
		return () => {
			document.removeEventListener('keypress', handleKeyPress);
			document.removeEventListener('keydown', handleKeyDown);
		};
	}, []);

	return (
		<div className="w-full   px-5  h-fit py-5 ">
			{/* input numbers  */}
			<div className="flex items-center  justify-end md:mt-10 overflow-x-auto">
				<input
					type="text"
					value={(userInput == '0') | '' ? 0 : userInput.split(/(\+|-|\*|\/|%)/).join(' ')}
					readOnly
					className="w-full overflow-x-auto customScrollbar text-nowrap text-2xl text-end text-text border-none outline-none bg-transparent"
					style={{ cursor: 'text' }}
					onChange={(e) => setUserInput(e.target.value)}
				/>
			</div>

			{/* output for the entair calculation */}
			<div className="flex items-center gap-3 justify-end mt-2 overflow-x-auto">
				<input
					type="text"
					value={output}
					readOnly
					className="w-full overflow-x-auto customScrollbar text-nowrap text-2xl text-end text-text border-none outline-none bg-transparent"
					style={{ cursor: 'text' }}
					onChange={(e) => setOutput(e.target.value)}
				/>
				<div
					onClick={handelCopy}
					className="bg-accent bg-opacity-35 cursor-pointer py-1 active:scale-90 px-2 md:py-2 md:px-3 rounded-md text-sm md:text-base text-white hover:bg-secondary-dark transition duration-300 shadow-md"
				>
					<FaRegCopy className="text-black" />
				</div>
			</div>

			{/* calculation box or btn */}
			<div className=" w-full   mt-32 lg:mt-6 flex flex-col lg:flex-row  ">
				{/* top column or advance column and it show only  the mobile view */}
				<div className="w-full  lg:hidden flex items-center gap-3 overflow-x-auto ">
					{signs.map((sign, index) => (
						<button
							key={index} // Use the index as the key
							type="button"
							onClick={() => handelSin(sign)}
							className={`h-10 flex-shrink-0 w-20 bg-zinc-700 active:scale-90 text-white rounded-md  'bg-zinc-700'
							}`}
						>
							{sign}
						</button>
					))}
				</div>

				<div className="flex items-start justify-between w-full   h-full gap-4 md:mt-10">
					<div className="w-full lg:w-full  h-full ">
						{/* top row */}

						<div className="min-h-20 w-full    grid grid-cols-4 mt-10 md:mt-0 md:grid-cols-5 gap-4 place-content-start text-text">
							<button
								onClick={() => {
									setUserInput('0'), setOutput(0);
								}}
								type="button"
								className="btn2"
							>
								AC
							</button>

							<button onClick={handelSquareRoot} type="button" className="btn2 flex items-center justify-center">
								<FaSquareRootAlt />
							</button>

							<button onClick={handelDelete} type="button" className=" btn2 flex items-center justify-center col-span-1 md:col-span-3">
								<FaDeleteLeft />
							</button>

							{arithmeticOperations.map((operator, index) => (
								<button key={index} onClick={() => handelAddOperation(operator)} type="button" className="btn2">
									{operator}
								</button>
							))}
						</div>

						{/*  numbers */}
						<div className="h-full w-full  mt-5 md:mt-6 grid grid-cols-4 md:grid-cols-5 gap-4 place-content-start text-text">
							{numberValues.map((number, index) => (
								<button onClick={() => handelAddInput(number)} key={index} type="button" className="btn2">
									{number}
								</button>
							))}

							<button
								onClick={handelCalculateResult}
								type="button"
								className="  bg-secondary select-none active:scale-95 duration-150 rounded-md text-text col-span-4 md:col-span-3 w-full h-14 font-bold "
							>
								=
							</button>
						</div>
					</div>

					<div className="w-full lg:w-[40%] hidden  lg:flex flex-wrap gap-5 duration-1000">
						{signs.map((sign, index) => (
							<button
								onClick={() => handelSin(sign)}
								key={index} // Use the index as the key
								type="button"
								className={`btn bg-zinc-700`}
							>
								{sign}
							</button>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Calculator;
