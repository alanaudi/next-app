'use client'

import { Logo, MenuButton } from '@/components'
import Link from 'next/link'
import { useState } from 'react'
import styles from './nav.module.scss'

interface NavProps {}

const navLinks = [
	{
		name: 'Blog',
		href: '/',
	},
]

export default function Nav({}: NavProps) {
	const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)
	const logoButtonHandler = () => setIsMenuOpen(!isMenuOpen)

	return (
		<nav className={styles.nav}>
			<MenuButton />

			{/* logo */}
			<Link href="/" className={styles['logo-icon-link']}>
				<Logo />
			</Link>

			<ul>
				{navLinks.map(({ name, href }) => (
					<li key={name}>
						<Link href={href}>Blog</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
