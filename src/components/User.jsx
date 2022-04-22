import { useState } from 'react';
import { getUser } from '../utils/api';

const User = ({ user, setUser }) => {
	const [newUser, setNewUser] = useState('');
	const [profile, setProfile] = useState({});
	const [error, setError] = useState(null);
	const handleSubmit = (e) => {
		e.preventDefault();
		setNewUser('');
		setError(null);
		getUser(newUser)
			.then((response) => {
				setProfile(response);
				setUser(newUser);
			})
			.catch((err) => setError(err));
	};

	const handleLogout = () => {
		setUser('');
		setProfile({});
	};

	return (
		<>
			{error && <h3>Invalid username, please try again.</h3>}
			{user && (
				<>
					<h3>Current user: {user}</h3>
					<button id='logout' onClick={handleLogout}>
						Logout
					</button>
					<section id='user-profile'>
						<p>Username: {profile.username}</p>
						<p>Name: {profile.name}</p>
						<img
							src={profile.avatar_url}
							alt={`${profile.username}'s avatar`}
						/>
					</section>
				</>
			)}
			{!user && (
				<form name='change-user'>
					<label>Enter username</label>
					<input
						type='text'
						onChange={(e) => {
							setNewUser(e.target.value);
						}}
					></input>
					<button onClick={handleSubmit}>Submit</button>
				</form>
			)}
		</>
	);
};

export default User;
