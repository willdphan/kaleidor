import React from 'react'
import Header from '@/components/Header'
import Image from 'next/image'
import Splitz from 'public/images/Splitz.png'
import ConnectWallet from '@/components/ConnectWallet'
import Link from 'next/link'
import QuestionsModal from '@/components/Modals_Buttons/QuestionsModal'
import Arrow from 'images/Arrow.png'
import SendModal from '@/components/Modals_Buttons/SendModal'
import { useProvider, useSigner, useContractRead, useAccount, useContractWrite } from 'wagmi'
import splitz from 'src/pages/splitz.json'
import { useEffect, useState } from 'react'
import { useBalance } from 'wagmi'
import AddRecipientButton from '@/components/Modals_Buttons/AddRecipient'
import RemoveRecipientButton from '@/components/Modals_Buttons/RemoveRecipient'

const Pay = () => {
	const [hydrated, setHydrated] = useState(false)
	const [count, setCount] = React.useState<any>()
	const [recipients, setRecipients] = React.useState<any>()
	const [recip, setRecip] = React.useState<any>()
	const [splitOwner, setSplitOwner] = React.useState<any>()

	const provider = useProvider()
	const { data: signer, isError, isLoading } = useSigner()
	const { address, isConnecting, isDisconnected } = useAccount()

	const ContractAddress = '0xE6fe4529D3a7b676eAf0F9E5d8c7D73f1B270a0c'

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
		functionName: 'splitRecipientCount',
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
		<div className="bg-black min-h-screen ">
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
							<Image src={Arrow} className="animate-bounce" alt="Arrow" width={25} height={20} />
						</a>
					</div>
					<QuestionsModal />
				</section>
				<div className="flex  justify-center mt-5">
					<div className="max-w-sm">
						<section className="space-y-5">
							<p className="font-Rubik font-normal text-[#08F294] flex items-start">OWNER</p>
							<p className="font-Roboto font-normal text-[#42805F] break-all items-start">{splitOwner}</p>
						</section>

						<div className="flex items-center justify-center py-4 my-2 space-x-5 ">
							<AddRecipientButton />
							<RemoveRecipientButton />
						</div>
						<div className="mb-5">
							<SendModal />
						</div>

						<div className="flex   ">
							<section className="space-y-5">
								<p className="font-Rubik font-normal  text-[#08F294] flex items-start justify-start">
									RECIPIENTS - {count}
								</p>
								<p className="font-Roboto font-normal text-[#42805F] break-all flex items-start">
									{recipients}
								</p>
							</section>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Pay
