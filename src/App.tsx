import { FC } from 'react';
import { useActiveSection } from './hooks/useActiveSection';
import Home from './pages/Home';

const App: FC = () => {
	useActiveSection();

	return <Home />;
};

export default App;
