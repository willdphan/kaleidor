import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import home from 'images/home.png'
import logo from 'images/logo.png'
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
		<div className="bg-black max-h-screen overflow-hidden">
			<Header />
			<Link href="/dicover">
				<div className="pt-48 flex items-center justify-center content-center">
					<Image src={logo} alt="Picture" width={80} height={50} />
				</div>
			</Link>
			<div className="relative flex items-center justify-center max-w-md sm:max-w-full text-white pt-[10rem]">
				<Image src={home} alt="Picture" width={1000} height={1000} className="animate-spin-slow " />
			</div>
		</div>
	)
}

export default discover
