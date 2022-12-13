import { FC, useState, useEffect } from 'react'
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
} from 'wagmi'
import { ethers } from 'ethers'
import LineChart from 'src/components/Charts/LineChart.js'

const discover = () => {
	return (
		<>
			<div>
				<Header />
			</div>
			<section className="bg-black min-h-screen overflow-hidden flex flex-col pt-24 sm:flex-row sm:pt-0 items-center justify-center content-center space-x-10 ">
				{/* DISCOVER HERE */}
				{/* w-10/12 sm:w-5/12 md:w-4/12 lg:w-5/12 xl:w-4/12 */}
				<div className="flex flex-col items-center justify-center mb-28 w-10/12 sm:w-5/12 md:w-4/12 lg:w-5/12 xl:w-4/12">
					<div>
						<Image src={particle} alt="Picture" />
					</div>
					<textarea
						className=" pb-24 w-full text-white bg-black mt-4 border-2 placeholder:italic text-wrap mb-5 rounded-xl font-Mont"
						// value={collection}
						placeholder="   ENTER SIGNAL..."
					></textarea>
					<button className="w-full border-2 rounded-xl font-Mont font-bold py-3">MINT ≈ 1.23 ETH</button>
				</div>
				<div className="w-10/12 sm:w-5/12 md:w-4/12 lg:w-5/12 xl:w-4/12 xl:mt-[-5.5rem]  ">
					<LineChart />
				</div>
			</section>
		</>
	)
}

export default discover
