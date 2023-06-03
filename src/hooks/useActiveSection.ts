import { useCallback, useEffect, useRef } from 'react';
import { useActiveSectionStore } from '../store/useActiveSectionStore';

type Section = {
	id: string;
	top: number;
	bottom: number;
};

export const useActiveSection = () => {
	const { activeSection, setActiveSection } = useActiveSectionStore(
		(state) => state
	);

	const sectionsRef = useRef<Section[]>([]);
	const activeSectionRef = useRef(activeSection);

	const updateActiveSection = useCallback(() => {
		const sections = sectionsRef.current;

		const currentPosition = window.pageYOffset + window.innerHeight / 2;

		for (let i = sections.length - 1; i >= 0; i--) {
			const { top, bottom, id } = sections[i];

			if (currentPosition >= top && currentPosition <= bottom) {
				const newActiveSection = `#${id}`;
				if (newActiveSection !== activeSectionRef.current) {
					activeSectionRef.current = newActiveSection;
					setActiveSection(newActiveSection);
				}
				break;
			}
		}
	}, [setActiveSection]);

	useEffect(() => {
		const sections: Section[] = Array.from(
			document.querySelectorAll('section')
		).map((section) => {
			const { top, height } = section.getBoundingClientRect();
			const id = section.getAttribute('id') as string;

			return {
				id,
				top: top + window.pageYOffset,
				bottom: top + window.pageYOffset + height,
			};
		});

		sectionsRef.current = sections;

		window.addEventListener('scroll', updateActiveSection);

		return () => {
			window.removeEventListener('scroll', updateActiveSection);
		};
	}, [updateActiveSection]);

	return activeSection;
};
