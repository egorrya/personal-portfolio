import { FC, useState } from 'react';

import { motion, useAnimate } from 'framer-motion';

import styles from './Header.module.scss';

import { linksData } from '../../../data';
import { useActiveSectionStore } from '../../../store/useActiveSectionStore';

const Header: FC = () => {
	const name = 'Egor Riabysh';

	const [logoSign, setLogoSign] = useState(name);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const { activeSection } = useActiveSectionStore((state) => state);

	const [logoSignScope, animateLogoSign] = useAnimate();

	const handleLogoSign = async (sign: string) => {
		if (window.innerWidth < 768) return;

		await animateLogoSign(logoSignScope.current, {
			opacity: 0,

			transition: {
				duration: 0.1,
			},
		});
		await setLogoSign(sign);
		await animateLogoSign(logoSignScope.current, {
			opacity: 1,

			transition: {
				duration: 0.1,
			},
		});
	};

	return (
		<header className={styles.header}>
			<a
				href='#home'
				className={styles.header__logo}
				onMouseEnter={() => handleLogoSign(`Yes, that's me`)}
				onMouseLeave={() => handleLogoSign(name)}
			>
				<motion.span
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 0.6,
						},
					}}
					ref={logoSignScope}
				>
					{logoSign}
				</motion.span>
			</a>
			<nav className={styles.header__nav}>
				{linksData.map((link, index) => (
					<motion.a
						initial={{ opacity: 0 }}
						animate={{
							opacity: 1,
							transition: {
								duration: 0.3,
								delay: 0.6 + index * 0.2,
							},
						}}
						key={link.id}
						href={link.href}
						data-hover={link.title}
						className={link.href === activeSection ? styles.active : ''}
						onMouseEnter={() => handleLogoSign(link.sign)}
						onMouseLeave={() => handleLogoSign(name)}
					>
						{link.title}
					</motion.a>
				))}
			</nav>

			<div
				className={`${styles.header__mobileMenu} 
						${isMobileMenuOpen ? styles.open : ''}`}
			>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: {
							duration: 0.3,
							delay: 1,
						},
					}}
					className={`${styles.header__hamburger} ${
						isMobileMenuOpen ? styles.header__hamburger__open : ''
					}`}
					onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
				>
					<span></span>
					<span></span>
					<span></span>
				</motion.div>
				<motion.nav
					style={{
						visibility: isMobileMenuOpen ? 'visible' : 'hidden',
						opacity: isMobileMenuOpen ? 1 : 0,
					}}
				>
					{isMobileMenuOpen &&
						linksData.map((link, index) => (
							<motion.a
								initial={{ opacity: 0 }}
								animate={{
									opacity: 1,
									transition: {
										duration: 0.3,
										delay: 0.6 + index * 0.2,
									},
								}}
								whileHover={{
									scale: 1.1,
								}}
								whileTap={{
									scale: 0.5,
									transition: {
										duration: 2,
									},
								}}
								key={link.id}
								href={link.href}
								onClick={() => setIsMobileMenuOpen(false)}
							>
								{link.title}
							</motion.a>
						))}
				</motion.nav>
			</div>
		</header>
	);
};

export default Header;
