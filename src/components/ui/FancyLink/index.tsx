import { FC } from 'react';

import { randomNumber } from '../../../utils/randomNumber';
import styles from './FancyLink.module.scss';

interface FancyLinkProps {
	link: {
		href: string;
		target: string;
		text: string;
	};
}

const FancyLink: FC<FancyLinkProps> = ({ link }) => {
	return (
		<a href={link.href} target={link.target} className={styles.link}>
			{link.text
				.split(/( )|(.)/)
				.filter((char) => char)
				.map((char, index) => {
					return (
						<span className={styles.outer} key={index}>
							<span
								className={styles.inner}
								style={{ animationDelay: `${randomNumber(-5000, 0)}ms` }}
							>
								<span
									className={styles.letter}
									style={{ animationDelay: `${index * 1000}ms` }}
								>
									{char}
								</span>
							</span>
						</span>
					);
				})}
		</a>
	);
};

export default FancyLink;
