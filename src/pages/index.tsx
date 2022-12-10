import { FC, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '@/components/Header'
import home from 'images/home.png'
import logo from 'images/logo.png'
import discover from 'src/pages/discover'
import { ethers } from 'ethers'

const Home: FC = () => {
	return (
		<div className="bg-black max-h-screen overflow-hidden ">
			{/* <Header /> */}
			<div className="pt-48 flex items-center justify-center content-center ">
				<a href={'/discover'}>
					<Image src={logo} alt="Picture" width={80} height={50} />
				</a>
			</div>
			<div className="relative flex items-center justify-center text-white pt-[5rem] pb-44 sm:pt-[6rem]">
				{/* width={1000} height={1000} */}
				<Image src={home} alt="Picture" className="animate-spin-slow" />
			</div>
		</div>
	)
}

export default Home
