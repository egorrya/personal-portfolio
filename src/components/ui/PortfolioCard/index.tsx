import { motion, useAnimation } from 'framer-motion';
import { FC, memo, useCallback, useState } from 'react';
import { portfolioData } from '../../../data';
import useImage from '../../../hooks/useImage';
import useVideo from '../../../hooks/useVideo';
import styles from './PortfolioCard.module.scss';

interface PortfolioCardProps {
	id: number;
}

const PortfolioCard: FC<PortfolioCardProps> = ({ id }) => {
	const { title, description, tech, liveLink, githubLinks, imageSrc } =
		portfolioData[id];

	const { video } = useVideo(`${id}.mp4`);
	const { image } = useImage(`${imageSrc}`);

	const [isHovered, setIsHovered] = useState(false);
	const controls = useAnimation();

	const handleMouseEnter = useCallback(async () => {
		setIsHovered(true);
		await controls.start({
			y: 5,
			transition: {
				duration: 1.5,
			},
		});
	}, [controls]);

	const handleMouseLeave = useCallback(async () => {
		setIsHovered(false);
		await controls.start({
			y: 0,
			transition: {
				duration: 1.5,
			},
		});
	}, [controls]);

	return (
		<motion.div
			className={styles.card}
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			initial={{ opacity: 0 }}
			animate={controls}
			viewport={{ once: true }}
			whileInView={{
				opacity: 1,
				transition: {
					duration: 1.5,
					delay: (id % 2) + 0.5,
				},
			}}
		>
			<div
				className={styles.card__background}
				style={{
					opacity: isHovered ? 0.4 : 1,
					transform: isHovered ? 'scale(1.4)' : 'scale(1)',
					transition: 'all 0.8s ease',
				}}
			>
				{video ? (
					<video src={video} autoPlay loop muted playsInline></video>
				) : (
					imageSrc && image && <img src={image} alt={title} />
				)}
			</div>
			<div
				className={`${styles.card__content} ${
					isHovered ? styles.card__content__hovered : ''
				}`}
			>
				{isHovered ? (
					<>
						<div className={styles.card__tech}>
							{tech &&
								tech.map((technology) => (
									<span key={technology}>{technology}</span>
								))}
						</div>
						<div className={styles.card__links}>
							{liveLink && (
								<a href={liveLink.link} target='_blank' rel='noreferrer'>
									{liveLink.title}
								</a>
							)}
							{githubLinks &&
								githubLinks.map((githubLink) => (
									<a
										key={githubLink.title}
										href={githubLink.link}
										target='_blank'
										rel='noreferrer'
									>
										{githubLink.title}
									</a>
								))}
						</div>
						<div></div>
					</>
				) : (
					<>
						<h4>{title}</h4>
						<p>{description}</p>
					</>
				)}
			</div>
		</motion.div>
	);
};

export default memo(PortfolioCard);
