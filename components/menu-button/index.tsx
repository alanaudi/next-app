'use client'

import { useState } from 'react'
import { CgMenuLeft } from 'react-icons/cg'
import styles from './menu-button.module.scss'

interface MenuButtonProps {
	children?: React.ReactNode
}

export default function MenuButton({ children }: MenuButtonProps) {
	const [isToggled, setIsToggled] = useState<boolean>(false)
	const handler = () => setIsToggled(!isToggled)

	return (
		<button onClick={handler} className={styles['menu-button']}>
			<CgMenuLeft />
			{children}
		</button>
	)
}
