import { FC } from 'react';

import { motion } from 'framer-motion';

import FancyLink from '../../ui/FancyLink';

import { contactData, linksData } from '../../../data';

import useFile from '../../../hooks/useFile';
import styles from './Contact.module.scss';

const Contact: FC = () => {
	const { file: pdf } = useFile(`assets/files/${contactData.links[1].href}`);

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
										delay: lineIndex * 1 + wordIndex * 0.3 + 1,
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
						<>
							<div className={styles.contact__line}>
								{contactData.links.map((link, linkIndex) => (
									<motion.div
										initial={{ opacity: 0 }}
										viewport={{ once: true }}
										whileInView={{
											opacity: 1,
											transition: {
												duration: 0.5,
												delay: (lineIndex + 1) * 1 + linkIndex * 0.3 + 1,
											},
										}}
										key={linkIndex}
									>
										{link === contactData.links[1] ? (
											<FancyLink
												link={{
													href:
														pdf ??
														'https://docs.google.com/document/d/1Zf7g5GM2f3a6ZiY9_dFE-M5oWYoOsMQP16P-B3aAvUA/edit?usp=sharing',
													target: contactData.links[1].target,
													text: contactData.links[1].text,
												}}
											/>
										) : (
											<FancyLink link={link} />
										)}
									</motion.div>
								))}
							</div>

							{contactData.email && (
								<div className={styles.contact__line}>
									<motion.div
										initial={{ opacity: 0 }}
										viewport={{ once: true }}
										whileInView={{
											opacity: 1,
											transition: {
												duration: 0.5,
												delay:
													(lineIndex + 2) * 1 +
													contactData.links.length * 0.3 +
													1,
											},
										}}
									>
										<FancyLink
											link={{
												href: `mailto:${contactData.email}`,
												target: '_blank',
												text: contactData.email,
											}}
										/>
									</motion.div>
								</div>
							)}
						</>
					)}
				</>
			))}
		</section>
	);
};

export default Contact;
