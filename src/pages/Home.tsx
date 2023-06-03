import { FC } from 'react';

import PageLayout from '../components/layouts/PageLayout';

import About from '../components/screens/About';
import Contact from '../components/screens/Contact';
import Hero from '../components/screens/Hero';
import Portfolio from '../components/screens/Portfolio';

const Home: FC = () => {
	return (
		<PageLayout>
			<Hero />
			<About />
			<Portfolio />
			<Contact />
		</PageLayout>
	);
};

export default Home;
