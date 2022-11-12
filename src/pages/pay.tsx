import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import Splitz from 'public/images/Splitz.png'
import ConnectWallet from '@/components/ConnectWallet'
import Link from 'next/link'
import QuestionsModal from '@/components/QuestionsModal'
import Arrow from 'public/images/Arrow.png'
import SendModal from '@/components/SendModal'
import WithdrawAllModal from '@/components/WithdrawAllButton'
import WithdrawPortionModal from '@/components/WithdrawPortionModal'
import { useProvider, useSigner, useContractRead, useAccount, useContractWrite } from 'wagmi'
import splitz from 'src/pages/splitz.json'
import { useEffect, useState } from 'react'
import { useBalance } from 'wagmi'

const Pay = () => {
	const [allOfPortion, setAllOfPortion] = React.useState<any>()

	const provider = useProvider()
	const { data: signer, isError, isLoading } = useSigner()
	const { address, isConnecting, isDisconnected } = useAccount()

	const ContractAddress = '0x61315E8120240C540cB83A0700eB00A8117dE7F4'

	// retrieves the current king address
	const { data: balance } = useBalance({
		addressOrName: '0x61315E8120240C540cB83A0700eB00A8117dE7F4',
		onSuccess(data) {
			console.log('Contract Balance', balance)
		},
	})

	// console.log(`Greeting: ${balance}`)

	return (
		<div className="bg-black min-h-screen">
			<div>
				<div className="absolute top-6 right-6">
					<ConnectWallet />
				</div>
				<section>
					<div className="flex justify-center text-5xl pt-10 pb-2 text-[#08F294] font-Rubik leading-relaxed tracking-wider bg-black">
						<Link href="/">SPLITZ</Link>
					</div>
					<div className="flex justify-center ">
						<a>
							<Image src={Arrow} alt="Arrow" width={25} height={20} />
						</a>
					</div>
					<QuestionsModal />
					<div className="flex items-center justify-center  font-Rubik pb-5"></div>
				</section>
				<div className="flex items-center justify-center space-x-[12em] ">
					<div>
						<div className="">
							<section className="mt-[0rem] text-center space-y-5 px-5 py-5 border-[.05em] border-[#08F294]">
								<p className="font-Roboto font-normal text-[#08F294] ">OWNER</p>
								<p className="font-Roboto font-normal text-[#42805F] ">0x3IGRUfeJBREKLWJBERGVVGWREER</p>
							</section>

							<div className="flex items-center justify-center py-12 mb-2">{/* <SendModal /> */}</div>

							<div className="flex justify-center space-x-5 mt-[-5rem]">
								<div className="flex items-center justify-center py-12 ">
									{/* WITHDRAW ALL */}
									{/* <WithdrawAllModal /> */}
								</div>

								<div className="flex items-center justify-center py-12">
									{/* WITHDRAW PORTION */}
									{/* <WithdrawPortionModal /> */}
								</div>
							</div>

							<div className="flex items-center justify-center text-center px-5 py-5 border-[.05em] border-[#08F294] ">
								<section className="space-y-5">
									<p className="font-Roboto font-normal  text-[#08F294]">TOTAL RECEIVED</p>
									<p className="font-Roboto font-normal  text-[#42805F] ">{balance?.formatted} ETH</p>
									<p className="font-Roboto font-normal  text-[#08F294]">TOTAL AVAILABLE</p>
									<p className="font-Roboto font-normal  text-[#42805F] "> ETH</p>
									<p className="font-Roboto font-normal  text-[#08F294]">RECIPIENTS - 2</p>
									<p className="font-Roboto font-normal  text-[#42805F] ">
										0x3IGRUfeJBREKLWJBERGVVGWREER
									</p>
								</section>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Pay
