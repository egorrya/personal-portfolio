interface ILinkData {
	id: number;
	title: string;
	href: string;
	sign: string;
	sectionId: string;
}

export const linksData: ILinkData[] = [
	{
		id: 1,
		title: 'Home',
		href: '#home',
		sign: `Just hold on we're going home`,
		sectionId: 'home',
	},
	{
		id: 2,
		title: 'About',
		href: '#about',
		sign: `Sing about me, I'm dying of thirst`,
		sectionId: 'about',
	},
	{
		id: 3,
		title: 'Works',
		href: '#projects',
		sign: 'Work, work, work, work, work, work',
		sectionId: 'projects',
	},
	{
		id: 4,
		title: 'Contact',
		href: '#contact',
		sign: `But here's my number, so call me, maybe`,
		sectionId: 'contact',
	},
];

interface IPortfolioData {
	id: number;
	title: string;
	description: string;
	imageSrc?: string;
	tech?: string[];
	githubLinks?: { link: string; title: string }[];
	liveLink?: { link: string; title: string };
}

export const portfolioData: IPortfolioData[] = [
	{
		id: 0,
		title: 'This Portfolio Website',
		description: `You can see the code and how it's done.`,
		tech: [
			'React',
			'TypeScript',
			'Framer Motion',
			'Zustand',
			'SCSS',
			'CSS Modules',
		],
		imageSrc: 'lap.webp',
		githubLinks: [
			{
				link: 'https://github.com/egorrya/personal-portfolio/',
				title: `Visit Github`,
			},
		],
	},
	{
		id: 1,
		title: 'Nottwitter',
		description: `Replica of Twitter with core functionalities, with ReactJS, TypeScript and Redux on the front-end, and with Node.js, Express.js, MongoDB on the back-end.`,
		imageSrc: 'nottwi.webp',
		tech: [
			'TypeScript',
			'React',
			'Node.js',
			'MongoDB',
			'Redux Toolkit',
			'SCSS',
			'CSS Modules',
		],
		githubLinks: [
			{
				link: 'https://github.com/egorrya/social-backend',
				title: 'Backend on Github',
			},
			{
				link: 'https://github.com/egorrya/social-frontend',
				title: 'Frontend on Github',
			},
		],
		liveLink: {
			link: 'https://social-frontend-rose.vercel.app/',
			title: 'Visit Live',
		},
	},
	{
		id: 2,
		title: 'Pride',
		description: ` This website is dedicated to celebrating the pride month, promoting inclusivity and diversity, and advocating for equal rights.`,
		imageSrc: 'pride.webp',
		tech: ['React', 'Framer Motion', 'SCSS', 'CSS Modules'],
		githubLinks: [
			{ link: 'https://github.com/egorrya/pride-main', title: 'Github' },
		],
		liveLink: {
			link: 'https://egorrya.github.io/pride-main/',
			title: 'Visit Live',
		},
	},
	{
		id: 3,
		title: 'BetterStartPage',
		description: `Chrome extension that elegantly displays bookmarks on the start page, enhancing user experience made with vanilla JavaScript and SCSS.
		`,
		imageSrc: 'better.webp',
		tech: ['Vanilla JavaScript', 'SCSS'],
		githubLinks: [
			{ link: 'https://github.com/egorrya/BetterStartPage/', title: 'Github' },
		],
		liveLink: {
			link: 'https://chrome.google.com/webstore/detail/better-start-page/alpahnoladcekljnlegjlknahlloehpj',
			title: 'Visit Chrome Store',
		},
	},

	{
		id: 4,
		title: 'AES Encryption',
		description: `A small utility for encrypting and decrypting messages using the AES encryption algorithm.`,
		imageSrc: 'aes.webp',
		tech: ['Vanilla JavaScript'],
		liveLink: {
			link: 'https://egorrya.github.io/aes-encryption/',
			title: 'Visit Live',
		},
	},

	{
		id: 5,
		title: 'Blending Scrollbar',
		description: `Chrome extension that replaces the default scrollbar with a visually appealing and user-friendly alternative for Linux and Windows users, with over 9,000 installs.`,
		imageSrc: 'scroll.webp',
		tech: ['Vanilla JavaScript', 'SCSS'],
		liveLink: {
			link: 'https://chrome.google.com/webstore/detail/blending-scrollbar/ajjnokaolfbjimgelmdmdlijoclmjnag',
			title: 'Visit Chrome Store',
		},
	},

	{
		id: 6,
		title: 'Soldsite.ru',
		description: `Delivering top-quality web development, design and ads services to clients. `,

		liveLink: { link: 'https://soldsite.ru/s', title: 'Visit Website' },
	},
];

export const contactData = {
	textByLines: ['Contact me and', `let's work together`],

	links: [
		{
			href: 'https://www.linkedin.com/in/egorrya/',
			target: '_blank',
			text: 'LinkedIn',
		},
		{
			href: 'CV Egor Riabysh.pdf',
			target: '_blank',
			text: 'Open CV',
		},
	],

	email: 'egorriabysh@gmail.com',
};

export const skillsData = {
	directions: ['Backend', 'Design', 'Frontend'],
	skills: [
		'React',
		'TypeScript',
		'SCSS',
		'Node.js',
		'Express',
		'MongoDB',
		'MySQL',
		'Figma',
		'And more...',
	],
};
