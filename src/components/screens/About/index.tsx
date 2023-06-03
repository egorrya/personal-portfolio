import { FC } from 'react';

import { motion } from 'framer-motion';
import TextReveal from '../../ui/TextReveal';
import styles from './About.module.scss';

import { linksData } from '../../../data';
import PhotoTextOnScroll from '../../ui/PhotoTextOnScroll';

const About: FC = () => {
	return (
		<section className={styles.about} id={linksData[1].sectionId}>
			<motion.div
				className={styles.about__text}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 0.5 }}
			>
				<TextReveal>
					Greetings! I'm Egor, a frontend-focused fullstack developer and
					designer. I specialize in creating visually captivating experiences
					that showcase the distinct stories of my clients. Over the last six
					years, I've been working with emerging businesses across the globe.
					Let's work together and infuse your vision with my passion, skills and
					creativity!
				</TextReveal>
			</motion.div>
			<PhotoTextOnScroll />
		</section>
	);
};

export default About;
