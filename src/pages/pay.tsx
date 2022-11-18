import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import Splitz from 'public/images/Splitz.png'
import ConnectWallet from '@/components/ConnectWallet'
import Link from 'next/link'
import QuestionsModal from '@/components/Modals_Buttons/QuestionsModal'
import Arrow from 'images/Arrow.png'
import SendModal from '@/components/Modals_Buttons/SendModal'
import WithdrawAllModal from '@/components/Modals_Buttons/WithdrawAllButton'
import WithdrawPortionModal from '@/components/Modals_Buttons/WithdrawPortionModal'
import { useProvider, useSigner, useContractRead, useAccount, useContractWrite } from 'wagmi'
import splitz from 'src/pages/splitz.json'
import { useEffect, useState } from 'react'
import { useBalance } from 'wagmi'

const Pay = () => {
	const [hydrated, setHydrated] = useState(false)
	const [count, setCount] = React.useState<any>()
	const [recipients, setRecipients] = React.useState<any>()
	const [splitOwner, setSplitOwner] = React.useState<any>()

	const provider = useProvider()
	const { data: signer, isError, isLoading } = useSigner()
	const { address, isConnecting, isDisconnected } = useAccount()

	const ContractAddress = '0x16dF73ed18674Fb4FB1E9Fb9Eb7686D28D750A91'

	// determines the total portion available for the connected wallet

	// FIGURE THIS SHIT OUT!!!!!!!!!!!!!!!!
	const { data: getSplitRecipients } = useContractRead({
		address: ContractAddress,
		abi: splitz,
		functionName: 'splitRecipients',
		onSuccess(data) {
			console.log('Split Recipients', getSplitRecipients)
		},
	})

	// retrives the addresses of all the recipients
	const { data: getSplitRecipientCount } = useContractRead({
		address: ContractAddress,
		abi: splitz,
		functionName: 'splitRecipient',
		onSuccess(data) {
			console.log('Split Recipient Count', getSplitRecipientCount)
		},
	})

	// retrieves the address of the owner of the split
	const { data: owner } = useContractRead({
		address: ContractAddress,
		abi: splitz,
		functionName: 'splitOwner',
		onSuccess(data) {
			console.log('Split Owner', owner)
		},
	})

	useEffect(() => {
		if (getSplitRecipientCount) {
			setCount(getSplitRecipientCount.toString())
		}
		if (getSplitRecipients) {
			// set to string to separate addresses with commas
			setRecipients(getSplitRecipients.toString())
		}
		if (owner) {
			setSplitOwner(owner)
		}
	}, [getSplitRecipientCount, owner, getSplitRecipients])

	// Hydration Error
	useEffect(() => {
		// This forces a rerender, so the address is rendered
		// the second time but not the first
		setHydrated(true)
	}, [])
	if (!hydrated) {
		// Returns null on first render, so the client and server match
		return null
	}

	return (
		<div className="bg-black min-h-screen">
			<div>
				<div className="absolute top-6 right-6">
					<ConnectWallet />
				</div>
				<section>
					<div className="flex justify-center text-5xl pt-44 pb-2 text-[#08F294] font-Rubik leading-relaxed tracking-wider bg-black">
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
								<p className="font-Roboto font-normal text-[#42805F] ">{splitOwner}</p>
							</section>

							<div className="flex items-center justify-center py-12 mb-2">
								<SendModal />
							</div>

							<div className="flex items-center justify-center text-center px-5 py-5 border-[.05em] border-[#08F294] ">
								<section className="space-y-5">
									<p className="font-Roboto font-normal  text-[#08F294]">RECIPIENTS</p>
									<p className="font-Roboto font-normal  text-[#42805F] ">{recipients}</p>
									<p className="font-Roboto font-normal  text-[#08F294]">COUNT</p>
									<p className="font-Roboto font-normal  text-[#42805F] ">{count}</p>
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
