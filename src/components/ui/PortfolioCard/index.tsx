import { FC, useState } from 'react';

import { motion, useAnimate } from 'framer-motion';

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

	const [cardContentScope, animate] = useAnimate();

	const isAnimatedCardHovered = async (isHovered: boolean) => {
		await animate(cardContentScope.current, {
			y: 5,
			opacity: 0,
			transition: {
				duration: 1.5,
			},
		});

		setIsHovered(isHovered);

		await animate(cardContentScope.current, {
			y: 0,
			opacity: 1,
			transition: {
				duration: 1.5,
			},
		});
	};

	return (
		<motion.div
			className={styles.card}
			onMouseEnter={() => isAnimatedCardHovered(true)}
			onMouseLeave={() => isAnimatedCardHovered(false)}
			initial={{ opacity: 0 }}
			viewport={{ once: true }}
			whileInView={{
				opacity: 1,
				transition: {
					duration: 1.5,
					delay: (id % 2) + 1,
				},
			}}
		>
			<div
				className={styles.card__background}
				style={{
					opacity: isHovered ? 0.4 : 1,
					transform: isHovered ? 'scale(1.3)' : 'scale(1)',
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
				ref={cardContentScope}
			>
				{isHovered ? (
					<>
						<div className={styles.card__tech}>
							{tech &&
								tech.map((technology) => {
									return <span key={technology}>{technology}</span>;
								})}
						</div>

						<div className={styles.card__links}>
							{liveLink && (
								<a href={liveLink.link} target='_blank' rel='noreferrer'>
									{liveLink.title}
								</a>
							)}
							{githubLinks &&
								githubLinks.map((githubLink) => {
									return (
										<a
											key={githubLink.title}
											href={githubLink.link}
											target='_blank'
											rel='noreferrer'
										>
											{githubLink.title}
										</a>
									);
								})}
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

export default PortfolioCard;
