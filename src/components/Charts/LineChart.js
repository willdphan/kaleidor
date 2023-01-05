// ./components/LineChart.js

import React from 'react'
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'
import { useState } from 'react'
import {
	useSendTransaction,
	usePrepareSendTransaction,
	useContractWrite,
	usePrepareContractWrite,
	useAccount,
	useContractRead,
	useWaitForTransaction,
} from 'wagmi'
import abi from 'src/abi/particle.json'
const { ethers } = require('ethers')

const BuildChart = () => {
	const [totalSold, setTotalSold] = useState()
	const [VRGDA, setVRGDA] = useState()
	const [image, setImage] = React.useState < any > ''

	/// GET TIME PASSED
	// Calculate the time that has passed since the startTimestamp
	async function getTimeSinceStart(startTimestamp) {
		// Get the current block timestamp
		const currentTimestamp = (await ethers.provider.getBlock('latest')).timestamp
		// Calculate the time that has passed since the startTimestamp
		return currentTimestamp - startTimestamp
	}

	/// GET TOTAL SOLD
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const getTotalSold = useContractRead({
		address: '0x4e5E8D702b4c617AF24b366e6c81d15aAB4c010A',
		abi: abi,
		functionName: 'totalSold',

		onSuccess(data) {
			setTotalSold(data)
			console.log('Success', data)
		},
	})

	/// USE TIME PASSED AND TOTAL SOLD TO GET VRGDA PRICE
	// eslint-disable-next-line react-hooks/rules-of-hooks
	const getVRGDAPrice = useContractRead({
		address: '0x4e5E8D702b4c617AF24b366e6c81d15aAB4c010A',
		abi: abi,
		functionName: 'getVRGDAPrice',
		args: [string],

		onSuccess(data) {
			setVRGDA(data)
			console.log('Success', data)
		},
	})
}
const LineChart = () => {
	const data = {
		labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
		datasets: [
			{
				label: 'My First dataset',
				backgroundColor: '#FF00D9',
				borderColor: '#FF00D9',
				borderWidth: 3,
				data: [0, 10, 5, 2, 20, 30, 45],
			},
			{
				label: 'My First dataset',
				backgroundColor: '#1500FF',
				borderColor: '#1500FF',
				data: [23, 43, 23, 54, 11, 32, 43],
			},
		],
	}

	const options = {
		plugins: {
			legend: {
				display: false,
			},
		},
		scales: {
			y: {
				stacked: true,
				grid: {
					display: true,
					drawBorder: false,
					drawOnChartArea: true,
					// borderDashOffset: 25,
					borderColor: '#808080',
					borderWidth: 0.8800000000000001,
					color: '#808080',
				},
				ticks: {
					display: false,
				},
				// min: 0,
				// ticks: {
				// 	stepSize: 25,
				// 	beginAtZero: true,
				// },
				// title: {
				// 	display: false,
				// 	text: 'Y axis title',
				// },
			},
			x: {
				// display: false,
				stacked: true,
				grid: {
					display: true,
					drawBorder: false,
					drawOnChartArea: true,
					// borderDashOffset: 25,
					borderColor: '#808080',
					borderWidth: 0.8800000000000001,
					color: '#808080',
				},
				ticks: {
					display: false,
				},
				// min: 0,
				// ticks: {
				// 	stepSize: 25,
				// 	beginAtZero: true,
				// },
				// title: {
				// 	display: false,
				// 	text: 'Y axis title',
				// },
			},
		},
	}
	return (
		<div className="border-2 rounded-xl">
			<Line data={data} width={100} height={125} options={options} />
		</div>
	)
}

export default LineChart
