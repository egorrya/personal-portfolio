import { FC, memo, useEffect, useRef, useState } from 'react';

import { motion, useScroll } from 'framer-motion';

interface TextRevealProps {
	children: string;
}

const TextReveal: FC<TextRevealProps> = ({ children }) => {
	const text = children;
	const words = children.split(' ');
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['end end', 'start start'],
	});

	const [scrollProgress, setScrollProgress] = useState(0);

	useEffect(() => {
		const unsubscribe = scrollYProgress.on('change', (latest) => {
			return setScrollProgress(latest);
		});

		return unsubscribe;
	}, [scrollYProgress]);

	return (
		<div ref={ref}>
			{words.map((word, index) => {
				const threshold = 1.5;

				const calculateOpacity = () => {
					const newOpacity =
						scrollProgress * threshold * text.split(' ').length - index;
					return Math.min(Math.max(newOpacity, 0.1), 1);
				};

				const opacity = calculateOpacity();

				return <Word key={index} word={word} opacity={opacity} />;
			})}
		</div>
	);
};

interface WordProps {
	word: string;
	opacity: number;
}

const Word: FC<WordProps> = memo(({ word, opacity }) => {
	return (
		<motion.div
			style={{ marginRight: '1rem', display: 'inline-block' }}
			animate={{ opacity }}
			// transition={{ duration: 0.05 }}
		>
			{word}
		</motion.div>
	);
});

export default TextReveal;
