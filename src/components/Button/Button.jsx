import React from 'react';

function Button({ title }) {
	return (
		<button
			type="button"
			className="text-white capitalize bg-blue-800 hover:bg-blue-800 focus:ring-1 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2  focus:outline-none "
		>
			{title}
		</button>
	);
}

export default Button;
