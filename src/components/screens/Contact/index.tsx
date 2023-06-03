import { FC } from 'react';

import { motion } from 'framer-motion';

import FancyLink from '../../ui/FancyLink';

import { contactData, linksData } from '../../../data';

import styles from './Contact.module.scss';

const Contact: FC = () => {
	return (
		<section id={linksData[3].sectionId} className={styles.contact}>
			{contactData.textByLines.map((line, lineIndex) => (
				<>
					<div className={styles.contact__line} key={lineIndex}>
						{line.split(' ').map((word, wordIndex) => (
							<motion.p
								initial={{ opacity: 0 }}
								viewport={{ once: true }}
								whileInView={{
									opacity: 1,
									transition: {
										duration: 0.5,
										delay: lineIndex * 1.5 + wordIndex * 0.3 + 1,
									},
								}}
								className={styles.contact__word}
								key={wordIndex}
							>
								{word}
							</motion.p>
						))}
					</div>

					{lineIndex === contactData.textByLines.length - 1 && (
						<div className={styles.contact__line}>
							{contactData.links.map((link, linkIndex) => (
								<motion.div
									initial={{ opacity: 0 }}
									viewport={{ once: true }}
									whileInView={{
										opacity: 1,
										transition: {
											duration: 0.5,
											delay: (lineIndex + 1) * 1.5 + linkIndex * 0.3 + 1,
										},
									}}
								>
									<FancyLink link={link} key={linkIndex} />
								</motion.div>
							))}
						</div>
					)}
				</>
			))}
		</section>
	);
};

export default Contact;
