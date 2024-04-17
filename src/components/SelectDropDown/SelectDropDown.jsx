import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';
import { FaAngleDown, FaS } from 'react-icons/fa6';
function SelectDropDown({ options, callback }) {
	const [input, setInput] = useState('month');
	const [isSelectInput, setIsSelectInput] = useState(false);
	const [searchOptions, setSearchOptions] = useState([]);

	const dropdownSelectBoxRef = useRef();

	const handleFocus = () => {
		setInput('');
		setSearchOptions(options);
		setIsSelectInput(true);
	};

	const handleSetItem = (e) => {
		const newValue = e.target.value;
		setInput(newValue);

		const items = options.filter((option) => option.toLowerCase().trim().startsWith(newValue.toLowerCase()));
		setSearchOptions(items);
		callback(input);
	};

	useEffect(() => {
		const handleClickOutside = (event) => {
			if (dropdownSelectBoxRef.current && !dropdownSelectBoxRef.current.contains(event.target)) {
				setIsSelectInput(false);
			}
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div ref={dropdownSelectBoxRef} className="w-60 h-10  relative select-none">
			<div
				className={`relative w-full flex text-text items-center gap-3 px-2 border-2 border-zinc-300 ${
					isSelectInput && 'border-2 border-sky-400'
				}`}
			>
				<input
					onFocus={handleFocus}
					type="text"
					className="w-full h-10 outline-none bg-transparent capitalize  indent-3 pr-10"
					value={input}
					onChange={handleSetItem}
				/>
				<div className="flex items-center justify-between gap-3 absolute top-1/2 left-[88%] -translate-x-1/2 -translate-y-1/2">
					<div className="text-zinc-500">|</div>
					<FaAngleDown />
				</div>
			</div>
			<div className={`w-full borders shadow-md mt-2 bg-fuchsia-50 select-none ${isSelectInput ? 'block' : 'hidden'}`}>
				{searchOptions.length > 0 &&
					searchOptions?.map((option) => (
						<div
							onClick={() => {
								setInput(option), setIsSelectInput(false);
								callback(option);
							}}
							key={option}
							className="py-2 hover:bg-blue-200 cursor-pointer px-3 capitalize"
						>
							{option}
						</div>
					))}
			</div>
		</div>
	);
}

export default SelectDropDown;
