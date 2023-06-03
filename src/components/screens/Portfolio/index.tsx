import { FC } from 'react';
import { linksData, portfolioData } from '../../../data';
import PortfolioCard from '../../ui/PortfolioCard';

import HeadingWithSubtitle from '../../ui/HeadingWithSubtitle';
import styles from './Portfolio.module.scss';

const Portfolio: FC = () => {
	return (
		<section id={linksData[2].sectionId} className={styles.portfolio}>
			<HeadingWithSubtitle title='Works' subtitle='My latest projects' />
			<div className={styles.portfolio__cards}>
				{portfolioData.map((portfolioItem) => {
					return <PortfolioCard key={portfolioItem.id} id={portfolioItem.id} />;
				})}
			</div>
		</section>
	);
};

export default Portfolio;
