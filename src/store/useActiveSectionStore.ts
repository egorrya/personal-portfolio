import { create } from 'zustand';

import { linksData } from '../data';

interface ActiveSectionStore {
	activeSection: string;
	setActiveSection: (section: string) => void;
}

export const useActiveSectionStore = create<ActiveSectionStore>((set) => ({
	activeSection: linksData[0].href,
	setActiveSection: (section: string) => {
		set({ activeSection: section });
	},
}));
