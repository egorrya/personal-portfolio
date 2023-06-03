import { FC } from 'react';

import { motion } from 'framer-motion';

import styles from './HeadingWithSubtitle.module.scss';

interface HeadingWithSubtitleProps {
	title: string;
	subtitle: string;
}

const HeadingWithSubtitle: FC<HeadingWithSubtitleProps> = ({
	title,
	subtitle,
}) => {
	return (
		<div className={styles.heading}>
			<motion.h2
				initial={{ opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
			>
				{title}
			</motion.h2>
			<motion.div
				className={styles.heading__line}
				initial={{ opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ opacity: 1, transition: { duration: 1.5, delay: 1 } }}
			>
				<motion.div
					initial={{ width: '0%' }}
					viewport={{ once: true }}
					whileInView={{
						width: '100%',
						transition: { duration: 1.5, delay: 1 },
					}}
				></motion.div>
			</motion.div>
			<motion.p
				initial={{ opacity: 0 }}
				viewport={{ once: true }}
				whileInView={{ opacity: 1, transition: { duration: 1, delay: 2.5 } }}
			>
				{subtitle}
			</motion.p>
		</div>
	);
};

export default HeadingWithSubtitle;
