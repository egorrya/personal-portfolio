import { FC } from 'react';

import TextReveal from '../../ui/TextReveal';
import styles from './About.module.scss';

import { linksData } from '../../../data';
import PhotoTextOnScroll from '../../ui/PhotoTextOnScroll';

const About: FC = () => {
	return (
		<section className={styles.about} id={linksData[1].sectionId}>
			<div className={styles.about__text}>
				<TextReveal>
					Greetings! I'm Egor, a frontend-focused fullstack developer and
					designer. I specialize in creating visually captivating experiences
					that showcase the distinct stories of my clients. Over the last six
					years, I've been working with emerging businesses across the globe.
					Let's work together and infuse your vision with my passion, skills and
					creativity!
				</TextReveal>
			</div>
			<PhotoTextOnScroll />
		</section>
	);
};

export default About;
