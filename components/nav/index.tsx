import { Logo } from '@/components'
import Link from 'next/link'
import styles from './nav.module.scss'

interface NavProps {}

const navLinks = [
	{
		name: 'Blog',
		href: '/blog',
	},
]

export default function Nav({}: NavProps) {
	return (
		<nav className={styles.nav}>
			{/* logo */}
			<Link href="/" className={styles['logo-icon-link']}>
				<Logo />
			</Link>

			<ul>
				{navLinks.map(({ name, href }) => (
					<li key={name} className="text-lg font-semibold">
						<Link href={href}>Blog</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
