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
			<div className="bg-black min-h-screen overflow-hidden flex flex-col items-center justify-center content-center pt-10 ">
				<section className="flex flex-col items-start max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl space-y-10">
					<h1 className="font-Mont text-4xl">
						REFRACTORED, <br /> REFLECTED ARCHITECTURE.
					</h1>

					<div className="flex justify-between">
						<p className="font-Mont">
							Vivamus eget eros vitae dolor volutpat venenatis. Sed bibendum metus vel dui volutpat, ut
							sodales elit egestas. Fusce velit velit, molestie at scelerisque in, hendrerit sit amet leo.
							Aliquam cursus auctor ex ut dictum. In bibendum quis mi nec scelerisque. Vivamus at nibh eu
							erat rhoncus tempor.
						</p>
					</div>
					<div className="flex ">
						<ul className="underline space-y-2 w-3/4 ">
							<li>RENDERING CONTRACT</li>
							<li>RENDERING CONTRACT</li>
							<li>RENDERING CONTRACT</li>
							<li>RENDERING CONTRACT</li>
						</ul>
						<div className="collapse sm:mt-[0rem]">
							<Image alt="image" src={particle} width={300} height={250} />
						</div>
					</div>
				</section>
				<section className="bg-white py-5 flex flex-col items-center justify-center px-20 my-[4rem]">
					<ul className="flex flex-row items-center justify-center space-x-10 text-black bg-white font-Mont font-bold ">
						<li>OPENSEA</li>
						<li>TWITTER</li>
					</ul>
					<ul className="flex flex-row items-center justify-center space-x-10 text-black bg-white font-Mont font-bold">
						<li>ETHERSCAN</li>
						<li>DISCORD</li>
					</ul>
				</section>
				<section className="flex flex-col items-start max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl space-y-10">
					<h1 className="font-Mont text-4xl">
						REFRACTORED, <br /> REFLECTED ARCHITECTURE.
					</h1>

					<div className="flex justify-between">
						<p className="font-Mont ">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis semper felis, a interdum
							libero. Ut sodales, ex ut tempus lobortis, ligula urna mattis purus, et tempor sem neque at
							quam. Vestibulum volutpat bibendum ligula sed egestas. Mauris ac urna lacinia, aliquet dui
							at, faucibus lorem. Nullam ut erat eget nisi maximus convallis. Vestibulum ut nisl aliquam,
							blandit nisi vel, finibus velit. Proin euismod, ipsum vel consectetur imperdiet, urna nulla
							consectetur magna, non scelerisque est eros eu purus.
						</p>
					</div>
					<div className="font-Mont">
						<p>For brand partnerships and general inquiries, please contact kaleidor@gmail.com</p>
					</div>
					<div className="font-Mont pb-24">
						<p>Made with ❤ from @0x0aa0 & @willdphan</p>
					</div>
				</section>
			</div>
		</>
	)
}

export default learn
