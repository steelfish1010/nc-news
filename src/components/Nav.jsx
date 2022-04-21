import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getTopics } from '../utils/api';
import '../css/Nav.css';

const Nav = () => {
	const [topics, setTopics] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	useEffect(() => {
		setIsLoading(true);
		getTopics()
			.then((topicsFromApi) => {
				setTopics(topicsFromApi);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, []);

	if (isLoading) {
		return <nav>Loading nav...</nav>;
	} else {
		return (
			<nav className='Nav'>
				<li key='Home'>
					<NavLink to='/'>Home</NavLink>
				</li>

				{topics.map((topic) => {
					return (
						<li key={topic.slug}>
							<NavLink to={`/articles?topic=${topic.slug}`}>
								{topic.slug}
							</NavLink>
						</li>
					);
				})}
			</nav>
		);
	}
};

export default Nav;
