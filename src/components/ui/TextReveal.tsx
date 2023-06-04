import { motion, useScroll } from 'framer-motion';
import { FC, useEffect, useRef, useState } from 'react';

interface TextRevealProps {
	children: string;
}

const TextReveal: FC<TextRevealProps> = ({ children }) => {
	const words = children.split(' ');
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end end', 'start start'],
	});

	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const unsubscribe = scrollYProgress.onChange((latest) => {
			setScrollProgress(latest);
		});

		return () => unsubscribe();
	}, [scrollYProgress]);

	const wordOpacityThresholds = words.map((_, index) => index / words.length);

	return (
		<div ref={ref}>
			{words.map((word, index) => (
				<motion.div
					style={{ marginRight: '1rem', display: 'inline-block' }}
					animate={{
						opacity: scrollProgress > wordOpacityThresholds[index] ? 1 : 0.15,
					}}
					key={index}
				>
					{word}
				</motion.div>
			))}
		</div>
	);
};

export default TextReveal;
