import ConnectWallet from '@/components/ConnectWallet'
import Image from 'next/image'
import VIP from 'public/images/crown.png'
import { useState } from 'react'
import {
	useAccount,
	useProvider,
	useSigner,
	useContractRead,
	useBalance,
	useContractWrite,
	usePrepareContractWrite,
} from 'wagmi'
import { useEffect } from 'react'
import React from 'react'
import KOE from 'src/pages/KOE.json'
import { BigNumber, BigNumberish, ethers } from 'ethers'

// POST ERRORs have to do somehting with web3provider or connectwallet feature.

const Crown = () => {
	const [hydrated, setHydrated] = useState(false)
	const [kingBalance, setKingBalance] = React.useState<any>()
	const [king, setKing] = React.useState<any>()
	const { address, isConnecting, isDisconnected } = useAccount()

	const url = 'https://eth-goerli.g.alchemy.com/v2/admzU8arRVylUCliHiXi83Ndst9iPT5O'
	// const provider = new ethers.providers.JsonRpcProvider(url)
	const provider = useProvider()
	const { data: signer, isError, isLoading } = useSigner()

	const abi = KOE
	const ContractAddress = '0xeF01B26ccD02FfA900CB5Cd34AE8f9CCFdF25502'
	// to read contract

	// retrieves the current king balance
	// const { data: KingBalance } = useContractRead({
	// 	address: ContractAddress,
	// 	abi: KOE,
	// 	functionName: 'balance',
	// 	onSuccess(data) {
	// 		console.log('King Balance', KingBalance)
	// 	},
	// })

	// retrieves the current king address
	const { data: KingAddress } = useContractRead({
		address: ContractAddress,
		abi: KOE,
		functionName: 'king',
		onSuccess(data) {
			console.log('King Address', KingAddress)
		},
	})

	// retrieves the current king address
	const { data: balance } = useBalance({
		addressOrName: ContractAddress,
		formatUnits: 'ether',
		onSuccess(data) {
			console.log('Contract Balance', balance)
		},
	})

	const { data: KingBalance } = useBalance({
		addressOrName: king,
		formatUnits: 'ether',
		onSuccess(data) {
			console.log('King Balance', KingBalance)
		},
	})

	useEffect(() => {
		// if (KingBalance) {
		// 	// (alias) formatEther(wei: BigNumberish): string
		// 	// setKingBalance(ethers.utils.formatEther(KingBalance))
		// 	setKingBalance(KingBalance)
		// }
		if (KingAddress) {
			setKing(KingAddress)
		}
		// }, [KingBalance, KingAddress])
	}, [KingAddress])

	// CLAIM THRONE
	// doesnt work -
	// var value = (document.getElementById('claimAmount') as HTMLInputElement).value
	// doesnt work -
	// var value = 0.01

	// deposit .01 to become the new king, doesnt have to be higher than pervious king

	const { data: claimData, write: claimThrone } = useContractWrite({
		mode: 'recklesslyUnprepared',
		address: ContractAddress,
		abi: KOE,
		functionName: 'claimThrone',
		overrides: {
			from: address,
			value: ethers.utils.parseEther('.01'),
		},
	})

	// WITHDRAW FUNDS

	const { data: withdrawData, write: withdrawThrone } = useContractWrite({
		mode: 'recklesslyUnprepared',
		address: ContractAddress,
		abi: KOE,
		functionName: 'withdraw',
	})
	//test
	// HYDRATION ISSUE

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
		<div className="min-h-screen bg-[#EBE4D4] flex flex-col items-center justify-center space-y-28 font-Fondamento text-black">
			<div className="absolute top-6 right-6">
				<ConnectWallet />
			</div>

			<div className="">
				<div className=" flex content-center justify-center mt-[-6em] mb-6">
					<a href={'/'}>
						<Image src={VIP} alt="Picture of the author" width={90} height={90} />
					</a>
				</div>
				<div className="text-center space-y-4 mb-8">
					<p className="text-4xl ">King</p>
					<p className="text-xl">{king}</p>
				</div>
				<div className="text-center space-y-4 mb-8">
					<p className="text-4xl mt-[1em]">King Balance</p>
					<p className="text-2xl">{KingBalance?.formatted} ETH</p>
				</div>

				<div className="text-center space-y-8">
					<p className="text-4xl">Contract Balance</p>
					<p className="text-2xl">{balance?.formatted} ETH</p>
				</div>
			</div>
			<div>
				<div className=" flex items-center justify-center space-x-16 mt-[-4em] text-lg text-black">
					<form>
						<button
							className="border-2 border-black px-2 py-2 rounded-md bg-white text-2xl"
							onClick={() => claimThrone?.()}
						>
							Claim Throne
						</button>
					</form>

					<button
						className="border-2 border-black px-2 py-2 rounded-md bg-white text-2xl"
						onClick={() => withdrawThrone?.()}
					>
						Withdraw Your Funds
					</button>
				</div>
				<div className="mt-[4em] text-center">
					1. The latest address to pay .01 ETH will become the new king <br /> 2. To become king, press
					&quot;Claim Throne&quot;
					<br /> 3. If you&apos;re no longer king, feel free to withdraw you funds{' '}
				</div>
			</div>
		</div>
	)
}

export default Crown
