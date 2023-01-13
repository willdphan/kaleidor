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
			<div className="bg-black min-h-screen overflow-hidden flex flex-col items-center justify-center content-center pt-10 ">
				<div className="absolute w-full top-3">
					<Header />
				</div>
				<section className="pt-32 flex flex-col items-start w-10/12 sm:max-w-lg md:max-w-xl lg:max-w-2xl space-y-10">
					<h1 className="font-Mont text-4xl">
						ON-CHAIN, <br /> REFRACTED PARTICLES.
					</h1>

					<div className="flex justify-between">
						<p className="font-Mont">
							In order to mint your very own particle, enter any keyword/s on the{' '}
							<Link href="/discover">
								<a className="decoration underline">Discover</a>
							</Link>{' '}
							page. A personalized SVG will be generated. SVGs can be pre-rendered so you see what you
							get. The price structure of the minted NFTs are based on VRGDAs. More about VRGDAs{' '}
							<Link href="/https://www.paradigm.xyz/2022/08/vrgda">
								<a className="decoration underline">here</a>
							</Link>{' '}
							. Contracts on Goerli Testnet.
						</p>
					</div>
					<div className="flex ">
						<ul className="underline space-y-2 w-3/4 ">
							<Link href="/https://github.com/wdphan/kaleidor-contracts/blob/main/src/Particle.sol">
								<li>PARTICLE CONTRACT</li>
							</Link>{' '}
							<Link href="/https://github.com/wdphan/kaleidor-contracts/blob/main/src/Kaleidor.sol">
								<li>KALEIDOR CONTRACT</li>
							</Link>
							<Link href="/https://github.com/wdphan/kaleidor-contracts/blob/main/src/Event.sol">
								<li>EVENT CONTRACT</li>
							</Link>
						</ul>
						<div className="collapse sm:mt-[0rem]">
							<Image alt="image" src={particle} width={300} height={250} />
						</div>
					</div>
				</section>

				<section className="flex flex-col items-start w-10/12 sm:max-w-lg md:max-w-xl lg:max-w-2xl space-y-10 ">
					<div className="font-Mont pb-24 pt-10  sm:mt-[-6rem]">
						<p>Made with ❤ from @0x0aa0 & @willdphan</p>
					</div>
				</section>
			</div>
		</>
	)
}

export default learn
