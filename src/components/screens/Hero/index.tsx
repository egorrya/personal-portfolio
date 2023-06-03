import { FC } from 'react';

import { motion } from 'framer-motion';

import styles from './Hero.module.scss';

import { linksData } from '../../../data';

const Hero: FC = () => {
	return (
		<section className={styles.hero} id={linksData[0].sectionId}>
			<motion.h1
				initial={{ opacity: 0 }}
				animate={{
					opacity: 1,
					transition: {
						duration: 1.5,
						delay: 1.5,
					},
				}}
			>
				I am Egor Riabysh.
				<br /> A front end developer.
			</motion.h1>
		</section>
	);
};

export default Hero;
