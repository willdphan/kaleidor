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

const learn = () => {
	return (
		<>
			<div>
				<Header />
			</div>
			<div className="bg-black min-h-screen overflow-hidden flex items-center justify-center content-center pt-44 flex-row space-x-10 ">
				{/* DISCOVER HERE */}
				<div className="flex flex-col items-start max-w-xl">
					<h1>
						REFRACTORED, <br /> REFLECTED ARCHITECTURE.
					</h1>
					<p className="w-1/2">
						Lorem ipsum dolor sit amet, consectetur a Sed condimentum, lacus non finibus eu pellentesque
						nibh, quis bibendum erat Donec eget fermentum neque. Sed condimentum, lacus non finibus Lorem
						ipsum dolor sit amet.
					</p>
					<ul>
						<li>RENDERING CONTRACT</li>
						<li>RENDERING CONTRACT</li>
						<li>RENDERING CONTRACT</li>
						<li>RENDERING CONTRACT</li>
					</ul>
				</div>
				{/* GRAPHING HERE */}
				<section className="">
					<Image src={particle} alt="Picture" width={200} height={180} />
					<div>Input</div>
					<div>MINT</div>
				</section>
			</div>
		</>
	)
}

export default learn
