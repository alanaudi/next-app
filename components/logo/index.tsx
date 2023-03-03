import Image from 'next/image'

interface LogoProps {
	className?: string
	filename?: string
}

export default function Logo({ className, filename = 'logo.svg' }: LogoProps) {
	return <Image className={className} src={`/${filename}`} alt="logo" fill />
}
