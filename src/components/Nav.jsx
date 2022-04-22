import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getTopics } from '../utils/api';
import '../css/Nav.css';

const Nav = ({ user }) => {
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
							<NavLink to={`/${topic.slug}`}>{topic.slug}</NavLink>
						</li>
					);
				})}
				<li key='Login'>
					{!user && <NavLink to='/login'>Login</NavLink>}
					{user && (
						<>
							Logged in as: <NavLink to='/userprofile'>{user}</NavLink>
						</>
					)}
				</li>
			</nav>
		);
	}
};

export default Nav;
