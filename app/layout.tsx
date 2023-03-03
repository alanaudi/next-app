import '@/styles/globals.scss'

export const metadata = {
	title: 'Next App',
	description: 'Next.js application with app router',
}

interface RootLayoutProps {
	children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
