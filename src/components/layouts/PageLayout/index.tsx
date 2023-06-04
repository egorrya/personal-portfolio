import { FC } from 'react';
import Header from '../../shared/Header';

import BackToTop from '../../ui/BackToTop';
import BackgroundCursorBall from '../../ui/BackgroundCursorBall';
import styles from './PageLayout.module.scss';

interface PageLayoutProps {
	children: React.ReactNode;
}

const PageLayout: FC<PageLayoutProps> = ({ children }) => {
	return (
		<>
			{window.innerWidth > 1024 && <BackgroundCursorBall />}
			<Header />
			<main className={styles.wrapper}>{children}</main>
			<BackToTop />
		</>
	);
};

export default PageLayout;
