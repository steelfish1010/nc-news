import './css/App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Nav from './components/Nav';
import Articles from './components/Articles';
import Topics from './components/Topics';
import SingleArticle from './components/SingleArticle';
import { useState } from 'react';

function App() {
	const [user, setUser] = useState('grumpy19');
	return (
		<div className='App'>
			<Header />
			<Nav />
			<Routes>
				<Route path='/' element={<Articles />} />
				<Route path='/articles' element={<Articles />} />
				<Route
					path='/articles/:article_id'
					element={<SingleArticle user={user} />}
				/>
				<Route path='/topics' element={<Topics />} />
				<Route path='/*' element={<h2>Page not found</h2>} />
			</Routes>
		</div>
	);
}

export default App;
