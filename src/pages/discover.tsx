import { FC, useState, useEffect, ChangeEvent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import particle from 'images/particle.png'
import {
	useSendTransaction,
	usePrepareSendTransaction,
	useContractWrite,
	usePrepareContractWrite,
	useAccount,
	useContractRead,
} from 'wagmi'
import { ethers } from 'ethers'
import LineChart from 'src/components/Charts/LineChart.js'
import React from 'react'
import abi from 'src/abi/particle.json'
import ReactIs from 'react-is'
import RandomParticles from '@/components/RandomParticles'

const Discover = () => {
	const [string, setString] = React.useState<any>('')
	const [image, setImage] = React.useState<any>('')

	const getImage = useContractRead({
		address: '0x7b076ddBA57042d3021A2d529531497580937250',
		abi: abi,
		functionName: 'getImage',
		args: [string],
		onSuccess(data) {
			setImage(data)
			console.log('Success', data)
		},
	})

	return (
		<>
			<div>
				<Header />
			</div>
			<section className="bg-black min-h-screen overflow-hidden flex flex-col pt-24 sm:flex-row sm:pt-0 items-center justify-center content-center sm:space-x-10 ">
				{/* DISCOVER HERE */}
				{/* w-10/12 sm:w-5/12 md:w-4/12 lg:w-5/12 xl:w-4/12 */}
				<div className="flex flex-col items-center justify-center mb-28 w-10/12 sm:w-5/12 md:w-4/12 lg:w-5/12 xl:w-4/12  ">
					{image ? <Image src={image} alt="getImage" height={350} width={400} /> : <></>}
					<h1 className="text-2xl py-3 font-Mont font-bold text-center">RENDER YOUR PARTICLE</h1>
					<textarea
						onChange={e => setString(e.target.value)}
						className=" pb-24 w-10/12 text-white bg-black mt-4 border-2 placeholder:italic text-wrap mb-5 rounded-xl font-Mont"
						// value={collection}
						placeholder="   ENTER SIGNAL..."
					></textarea>
					<button className=" border-2 rounded-xl font-Mont font-bold py-3 w-10/12">MINT ≈ 1.23 ETH</button>
				</div>
				<div className="w-10/12 sm:w-5/12 md:w-4/12 lg:w-5/12 xl:w-4/12 xl:mt-[-5.5rem]  ">
					<LineChart />
				</div>
			</section>
		</>
	)
}

export default Discover
