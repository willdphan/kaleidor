// ./components/LineChart.js

import React from 'react'
import Chart from 'chart.js/auto'
import { Line } from 'react-chartjs-2'

import { useState } from 'react'

const data = {
	labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
	datasets: [
		{
			label: 'My First dataset',
			backgroundColor: 'rgb(255, 99, 132)',
			borderColor: 'rgb(255, 99, 132)',
			borderWidth: 3,
			data: [0, 10, 5, 2, 20, 30, 45],
		},
		{
			label: 'My First dataset',
			backgroundColor: '#00FF4B',
			borderColor: '#00FF4B',
			data: [10, 20, 50, 20, 10, 40, 55],
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
		x: {
			grid: {
				borderColor: '#1500FF',
			},
		},
	},
}

const LineChart = () => {
	return (
		<div className="border-2 rounded-xl">
			<Line data={data} width={100} height={125} options={options} />
		</div>
	)
}

export default LineChart
