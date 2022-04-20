import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getTopics } from '../utils/api';

const Nav = () => {
	const [topics, setTopics] = useState([]);
	useEffect(() => {
		getTopics()
			.then((topicsFromApi) => {
				setTopics(topicsFromApi);
			})
			.catch((err) => console.log(err));
	}, []);

	if (!topics) {
		return <nav>Loading...</nav>;
	} else {
		return (
			<nav className='Nav'>
				<li key='Home'>
					<NavLink to='/'>Home</NavLink>
				</li>

				{topics.map((topic) => {
					return (
						<li key={topic.slug}>
							<NavLink to={`/articles/${topic.slug}`}>{topic.slug}</NavLink>
						</li>
					);
				})}
				<li key='Topics'>
					<NavLink to='/topics'>Topics</NavLink>
				</li>
			</nav>
		);
	}
};

export default Nav;
