import { FC } from 'react';

import { motion } from 'framer-motion';

import IconDown from '../../../assets/svg/IconDown';

import styles from './BackToTop.module.scss';

import { linksData } from '../../../data';
import { useActiveSectionStore } from '../../../store/useActiveSectionStore';

const BackToTop: FC = () => {
	const { activeSection } = useActiveSectionStore((state) => state);
	console.log(activeSection);
	return (
		<motion.a
			href={
				activeSection === linksData[0].href
					? linksData[1].href
					: linksData[0].href
			}
			className={styles.scroll}
			whileHover={{
				scale: 1.1,
			}}
			whileTap={{
				scale: 0.5,
				transition: {
					duration: 2,
				},
			}}
			initial={{ opacity: 0 }}
			animate={{
				opacity: 0.5,
				transition: {
					duration: 1,
					delay: 2,
				},
			}}
		>
			Scroll to {activeSection === linksData[0].href ? 'discover' : 'top'}
			<IconDown
				style={{
					transform:
						activeSection !== linksData[0].href
							? 'rotate(-180deg)'
							: 'rotate(0deg)',
					transition: 'all 0.3s ease-in-out',
					marginTop: activeSection !== linksData[0].href ? '0.2rem' : '0',
				}}
			/>
		</motion.a>
	);
};

export default BackToTop;
