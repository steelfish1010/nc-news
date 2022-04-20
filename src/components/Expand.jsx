import { useState } from 'react';

const Expand = ({ children, title }) => {
	const [isOpen, setIsOpen] = useState(false);

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
