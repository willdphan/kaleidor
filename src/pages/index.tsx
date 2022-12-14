import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Kaleidor from 'images/kaleidor.png'
import logo from 'images/logo.gif'
import discover from 'src/pages/discover'
import { ethers } from 'ethers'
import {
	useSendTransaction,
	usePrepareSendTransaction,
	useContractWrite,
	usePrepareContractWrite,
	useAccount,
} from 'wagmi'
import { NextPage } from 'next'
import RandomParticles from 'src/components/RandomParticles'

const Home: FC = () => {
	return (
		<div className="bg-black max-h-screen overflow-hidden ">
			<div className="pt-48 flex items-center justify-center content-center ">
				<a href={'/discover'}>
					<Image src={logo} alt="Picture" width={150} height={150} />
				</a>
			</div>
			<div className="relative flex items-center justify-center text-white pt-[5rem] pb-44 sm:pt-[6rem] w-full ">
				{/* width={1000} height={1000} */}

				<RandomParticles />

				<div className="fixed top-[26.5rem] w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[60rem] ">
					<Image src={Kaleidor} alt="kaleidor" width={1000} height={1000} className="animate-spin-slow " />
				</div>
			</div>
		</div>
	)
}

export default Home
