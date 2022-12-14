import { StylesProvider } from '@material-ui/core'
import { NextPage } from 'next'
import React from 'react'
// import styles from 'src/styles/particle.module.css'

const randomColors = () => {
	const r = Math.round(Math.random() * 255)
	const g = Math.round(Math.random() * 255)
	const b = Math.round(Math.random() * 255)
	return `rgb(${r},${g},${b})`
}

const RandomParticles: NextPage = () => {
	return (
		<svg
			height="1000"
			width="1000"
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 1000 1000"
			// className={styles.random}
		>
			<defs>
				<radialGradient id="myGradient">
					<stop offset="5%" stopColor={randomColors()} />
					<stop offset="15%" stopColor={randomColors()} />
					<stop offset="25%" stopColor={randomColors()} />
					<stop offset="35%" stopColor={randomColors()} />
					<stop offset="45%" stopColor={randomColors()} />
					<stop offset="55%" stopColor={randomColors()} />
					<stop offset="65%" stopColor={randomColors()} />
					<stop offset="75%" stopColor={randomColors()} />
					<stop offset="85%" stopColor={randomColors()} />
					<stop offset="95%" stopColor={randomColors()} />
				</radialGradient>
			</defs>
			<rect height="1000" width="1000" fill="#000" />
			<g transform="scale(4)">
				<circle cx="125" cy="125" r="100" fill="url('#myGradient')" />
			</g>
		</svg>
	)
}

export default RandomParticles
