import { motion, useScroll } from 'framer-motion';
import { throttle } from 'lodash'; // lodash is used for the throttle function
import { FC, useCallback, useEffect, useRef, useState } from 'react';
import { skillsData } from '../../../data';
import myImage from './../../../assets/images/me.webp';
import styles from './PhotoTextOnScroll.module.scss';

const opacityFormula = (
	scrollProgress: number,
	whenItShouldWork: number = 0
): number => {
	const distanceFromThreshold = Math.abs(
		scrollProgress - (1 - whenItShouldWork)
	);
	const fadeDistance = 0.15;
	const opacity = Math.min(
		1,
		Math.max(0, (fadeDistance - distanceFromThreshold) / fadeDistance),
		2 - Math.abs(2 * (scrollProgress - (1 - whenItShouldWork)))
	);
	return opacity;
};

const PhotoTextOnScroll: FC = () => {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end end', 'start start'],
	});

	const [scrollProgress, setScrollProgress] = useState(1);
	const [scrollDistance, setScrollDistance] = useState(0);

	useEffect(() => {
		const unsubscribe = scrollYProgress.on('change', (latest) => {
			return setScrollProgress(latest);
		});

		return unsubscribe;
	}, [scrollYProgress]);

	const getScrollDistance = useCallback(() => {
		if (window.innerWidth < 440) return 2070;
		if (window.innerWidth < 768) return 1930;
		if (window.innerWidth < 1024) return 1270;
		return 2350;
	}, []);

	useEffect(() => {
		setScrollDistance(getScrollDistance());

		const handleResize = throttle(() => {
			setScrollDistance(getScrollDistance());
		}, 200);

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, [getScrollDistance]);

	const xHeading = scrollDistance * scrollProgress - scrollDistance;

	return (
		<div ref={ref} className={styles.root}>
			<div className={styles.root__container}>
				{window.innerWidth > 1024 && (
					<motion.div
						style={{
							transform: `rotate(${scrollProgress * 360}deg)`,
						}}
						className={styles.backgroundCircle}
					>
						<div className={styles.backgroundCircle__circle}>
							<motion.p
								style={{
									opacity: opacityFormula(scrollProgress, 0),
								}}
							>
								Scroll Down
							</motion.p>
							{skillsData.directions.map((direction, index) => (
								<motion.p
									key={index}
									style={{
										opacity: opacityFormula(
											scrollProgress + 1 / skillsData.directions.length,
											index / skillsData.directions.length
										),
									}}
								>
									{direction}
								</motion.p>
							))}
						</div>
						<div className={styles.backgroundCircle__overlay}></div>
					</motion.div>
				)}
				<div className={styles.imageContainer}>
					<motion.img
						style={{
							scale: 1 + (1 - scrollProgress) * 0.22,
						}}
						initial={{ opacity: 0 }}
						whileInView={{
							opacity: 1,
							transition: {
								duration: 1.5,
								delay: 1,
							},
						}}
						viewport={{ once: true }}
						src={myImage}
						alt='me'
					/>
					<motion.h2
						style={{
							x: xHeading,
							opacity: scrollProgress === 0 || scrollProgress === 1 ? 0 : 1,
						}}
						className={`${styles.heading} ${styles.heading__black}`}
					>
						{skillsData.skills.join(' / ')}
					</motion.h2>
				</div>
				<motion.h2
					style={{
						x: xHeading,
						opacity: scrollProgress === 0 || scrollProgress === 1 ? 0 : 1,
					}}
					className={`${styles.heading} ${styles.heading__white}`}
				>
					{skillsData.skills.join(' / ')}
				</motion.h2>
			</div>
		</div>
	);
};

export default PhotoTextOnScroll;
