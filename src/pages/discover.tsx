import { FC, useState } from 'react'
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

import React from 'react'

const discover = () => {
	return (
		<>
			<div>
				<Header />
			</div>
			<div className="bg-black min-h-screen overflow-hidden flex flex-col pt-24 items-center justify-center content-center space-x-10 ">
				{/* DISCOVER HERE */}
				<section className="flex flex-col items-center justify-center mb-28">
					<div>
						<Image src={particle} alt="Picture" width={200} height={180} />
					</div>
					<textarea
						className=" pb-24 w-[15rem] sm:w-[15rem] text-white bg-black mt-4 border-2 placeholder:italic text-wrap mb-5 rounded-xl font-Mont"
						// value={collection}
						placeholder="   ENTER SIGNAL..."
					></textarea>
					<button className="w-full border-2 rounded-xl font-Mont font-bold py-3">MINT ≈ 1.23 ETH</button>
				</section>
				{/* GRAPHING HERE */}
				<section className="mb-28">
					<Image src={particle} alt="Picture" width={200} height={180} />
					<div>GRAPH HERE.</div>
					<div>MINT</div>
				</section>
			</div>
		</>
	)
}

export default discover
