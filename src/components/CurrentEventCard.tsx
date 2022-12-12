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

const CurrentEvent = () => {
	return (
		<>
			{/* DISCOVER HERE */}
			<section className="w-10/12 sm:w-8/12 md:w-5/12 lg:w-5/12 xl:w-4/12 space-y-5 flex flex-col text-center ">
				<h1 className="text-2xl font-bold">CURRENT EVENT</h1>
				<div className="items-center justify-center border-2 rounded-xl ">
					<div className="flex flex-row content-center items-center justify-center pt-4">
						<div className="pl-4 pt-4">
							<Image src={particle} alt="Picture" width={150} height={130} />
						</div>
						<div className="flex flex-col items-start justify-center">
							<p>TITLE: </p>
							<p>AMOUNT: </p>
						</div>
					</div>
					<p className="px-4 py-4">
						Vivamus eget eros vitae dolor volutpat venenatis. Sed bibendum metus vel dui volutpat, ut
						sodales elit egestas. Fusce velit velit, molestie at scelerisque in, hendrerit sit amet leo.
						Aliquam cursus auctor ex ut dictum. In bibendum quis mi nec scelerisque. Vivamus at nibh eu erat
						rhoncus tempor.
					</p>
				</div>
			</section>
		</>
	)
}

export default CurrentEvent
