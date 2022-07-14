import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

import Home from '../components/Home/Home';
import Loader from '../components/Loader/Loader';

const About = lazy(() => import('../components/About/About'));
const DummyData = lazy(() => import('../components/DummyData/DummyData'));
const CatList = lazy(() => import('../components/CatList/CatList'));


const AppRouter = () => {
	// <div className='main'>
	// </div>
	return (
		<Router>
			<Header />

			<Routes>
				<Route exact path="/" element={<Home />} />
                
				<Route
					path="/about"
					element={
						<Suspense fallback={<Loader />}>
							<About />
						</Suspense>
					}
				/>

				<Route
					path="/dummy-data-generator"
					element={
						<Suspense fallback={<Loader />}>
							<DummyData />
						</Suspense>
					}
				/>

				<Route
					path="/day-19/cats"
					element={
						<Suspense fallback={<Loader />}>
							<CatList />
						</Suspense>
					}
				/>

				<Route
					path="/day-20/cats"
					element={
						<Suspense fallback={<Loader />}>
							<CatList />
						</Suspense>
					}
				/>
			</Routes>
			<Suspense />
			<Footer />
		</Router>
	);
};

export default AppRouter;
