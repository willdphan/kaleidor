import { FC, useState } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import Shade from 'src/pages/Shade.json'
import Image from 'next/image'
// import Header from '@/components/Header'
import Link from 'next/link'
import Header from '@/components/Header'
import styles from 'src/styles/title.module.css'
import one from 'images/shadeone.svg'
import two from 'images/shadetwo.svg'
import three from 'images/shadethree.svg'
import four from 'images/shadefour.svg'
import five from 'images/shadefive.svg'
import { Carousel } from 'antd'
import {
	useSendTransaction,
	usePrepareSendTransaction,
	useContractWrite,
	usePrepareContractWrite,
	useAccount,
} from 'wagmi'
import { ethers } from 'ethers'
import MintButton from '@/components/Modals_Buttons/MintModal'

const contentStyle: React.CSSProperties = {
	height: '200px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#232323',
}

const contractConfig = {
	address: '0x58f7E88EaaEc1300D83E225414bd0dFff1F4A1A7',
	Shade,
}

const Home: FC = () => {
	const { address } = useAccount()
	const { config } = usePrepareContractWrite({
		address: '0x58f7E88EaaEc1300D83E225414bd0dFff1F4A1A7',
		abi: [
			{
				inputs: [
					{
						internalType: 'uint256',
						name: 'tokenId',
						type: 'uint256',
					},
				],
				name: 'mintShadeNFT',
				outputs: [],
				stateMutability: 'payable',
				type: 'function',
			},
		],
		functionName: 'mintShadeNFT',
	})
	const { write: mintNFT } = useContractWrite(config)

	return (
		<div className="">
			<div className="relative min-h-screen bg-[#232323] flex items-center justify-center max-w-md sm:max-w-full text-white ">
				<div className={styles.scanlines}></div>
				<div className="absolute top-6 right-6">
					<ConnectWallet />
				</div>

				<Link href="/">
					<a className="font-Roboto max-w-7xl text-2xl font-bold absolute top-6 left-6">SHADE</a>
				</Link>

				<div className="max-w-7xl flex flex-col items-center justify-center">
					<Carousel autoplay className="max-w-[12.5rem] mb-10">
						<div>
							<h3 style={contentStyle}>
								<Image src={two} alt="Picture" width={200} height={200} className="" />
							</h3>
						</div>
						<div>
							<h3 style={contentStyle}>
								{' '}
								<Image src={one} alt="Picture" width={200} height={200} className="" />
							</h3>
						</div>
						<div>
							<h3 style={contentStyle}>
								{' '}
								<Image src={three} alt="Picture" width={200} height={200} className="" />
							</h3>
						</div>
						<div>
							<h3 style={contentStyle}>
								{' '}
								<Image src={four} alt="Picture" width={200} height={200} className="" />
							</h3>
						</div>
						<div>
							<h3 style={contentStyle}>
								{' '}
								<Image src={five} alt="Picture" width={200} height={200} className="" />
							</h3>
						</div>
					</Carousel>

					<h1 className={styles.glitch}>
						SHADE IS A GENERATIVE ON-CHAIN NFT COLLECTION. YOUR SHADE PERSONALIZED. <br /> 111 TOTAL.
					</h1>

					<div className="flex items-center justify-center">
						<MintButton />
						{/* <button
							onClick={() => mintNFT?.()}
							className="bg-[#D9D9D9] text-black px-5 py-2 font-Roboto font-2xl font-bold z-10 tracking-normal"
						>
							MINT
						</button> */}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
function mintShadeNFT(arg0: { args: any[] }) {
	throw new Error('Function not implemented.')
}
