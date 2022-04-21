import { useState } from 'react';

const Expand = ({ children, title, startOpen }) => {
	const [isOpen, setIsOpen] = useState(startOpen);

	const toggleOpen = () => {
		setIsOpen((curr) => !curr);
	};

	return (
		<>
			{isOpen && children}
			<button onClick={toggleOpen}>
				{isOpen ? `Hide ${title}` : `Show ${title}`}
			</button>
		</>
	);
};

export default Expand;
