import { useState } from 'react';

const Expand = ({ children }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleOpen = () => {
		setIsOpen((curr) => !curr);
	};

	return (
		<>
			{isOpen && children}
			<button onClick={toggleOpen}>{isOpen ? 'Show more' : 'Show less'}</button>
		</>
	);
};

export default Expand;
