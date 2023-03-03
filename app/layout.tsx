import { Nav } from '@/components'
import '@/styles/globals.scss'
import { cx } from 'classix'
import localFont from 'next/font/local'

export const metadata = {
	title: 'Next App',
	description: 'Next.js application with app router',
}

interface RootLayoutProps {
	children: React.ReactNode
}

// local fonts
const taipeiSansTCBeta = localFont({
	src: '../public/fonts/TaipeiSansTCBeta/TaipeiSansTCBeta-Regular.ttf',
	weight: '400',
	variable: '--font-taipei-sans-tc-beta',
	display: 'swap',
})
const openHuninn = localFont({
	src: '../public/fonts/OpenHuninn/OpenHuninn-1.1.ttf',
	weight: '400',
	variable: '--font-open-huninn',
	display: 'swap',
})

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html
			lang="en"
			className={cx(taipeiSansTCBeta.variable, openHuninn.variable)}
		>
			<body>
				<Nav />
				{children}
			</body>
		</html>
	)
}
