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

const submit = () => {
	return (
		<>
			<div className="bg-black min-h-screen overflow-hidden flex items-center justify-center content-center pt-18 space-x-10 font-Mont">
				{/* DISCOVER HERE */}
				<section className="w-5/12 space-y-5 flex flex-col text-center ">
					<h1 className="text-2xl font-bold">CURRENT EVENT</h1>
					<div className="items-center justify-center border-2 rounded-xl ">
						<div className="flex flex-row  pt-4">
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
							Aliquam cursus auctor ex ut dictum. In bibendum quis mi nec scelerisque. Vivamus at nibh eu
							erat rhoncus tempor.
						</p>
					</div>
				</section>
				{/* GRAPHING HERE */}
				<section className="flex flex-col text-center w-5/12 space-y-5 ">
					<h1 className="text-2xl font-bold">SUBMIT SOLUTION</h1>
					<input
						type="text"
						placeholder="  TITLE..."
						className="bg-black border-2 rounded-xl py-3 placeholder:italic  placeholder:pl-2"
					/>
					<textarea
						className="pb-64 text-white bg-black border-2 placeholder:italic placeholder:pt-2 placeholder:pl-2 text-wrap mb-5 rounded-xl font-Mont w-full"
						// value={collection}
						placeholder="   DESCRIPTION..."
					/>
					<button className="border-2 rounded-xl py-3 font-bold">SUBMIT</button>
				</section>
			</div>
		</>
	)
}

export default submit
