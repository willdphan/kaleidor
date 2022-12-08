import { useState } from 'react'
import {
	useProvider,
	useSigner,
	useContractRead,
	useAccount,
	useBalance,
	useContractWrite,
	useWaitForTransaction,
	usePrepareContractWrite,
} from 'wagmi'
import Shade from 'src/pages/Shade.json'
import React from 'react'
import { FC, ChangeEvent } from 'react'
import { data } from 'autoprefixer'
import { write } from 'node:fs'

export default function MintButton() {
	const [showModal, setShowModal] = useState(false)
	const [value, setValue] = React.useState<any>('')

	const ContractAddress = '0x3fE966e1C3f486B237D0DE82C55Bea0cd2E468bB'

	// withdraws all of potion available to connected wallet
	// const {
	// 	data: mint,
	// 	write: mintShadeNFT,
	// 	error: prepareError,
	// 	isError: isPrepareError,
	// } = useContractWrite({
	// 	mode: 'recklesslyUnprepared',
	// 	address: ContractAddress,
	// 	abi: Shade,
	// 	functionName: 'mintShadeNFT',
	// 	args: [value],
	// })

	const {
		config,
		error: prepareError,
		isError: isPrepareError,
	} = usePrepareContractWrite({
		address: '0x3fE966e1C3f486B237D0DE82C55Bea0cd2E468bB',
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
		args: [value],
	})
	const { data, error, isError, write: mintShadeNFT } = useContractWrite(config)

	const { isLoading, isSuccess } = useWaitForTransaction({})

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.name === 'addAddress') {
			setValue(event.target.value)
		}
	}

	return (
		<>
			<div className="flex items-center justify-center z-10 ">
				<button
					className="w-full py-1 border-2 border-[#08F294] bg-[#08F294] text-large text-black font-bold"
					type="button"
					onClick={() => setShowModal(true)}
				>
					SEND ETHER
				</button>
			</div>
			{showModal ? (
				<>
					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div
							className="fixed inset-0 w-full h-full bg-[#232323] opacity-40"
							onClick={() => setShowModal(false)}
						></div>
						<div className="flex items-center min-h-screen px-4 py-8">
							<div className="relative w-full max-w-xs p-4 mx-auto bg-[#232323] border-2 border-white rounded-md shadow-lg">
								<div className="mt-3">
									<div className="mt-2 mb-5 flex flex-col items-center ">
										<h4 className="text-xl text-center font-medium text-white font-Roboto">
											GET YOUR SHADE
										</h4>
										<p className="text-white pb-5 pt-3 text-center  max-w-sm font-Roboto">
											Choose a token ID between 2 and 111. Choose another number if token ID is
											taken. FREE Mint (not including gas).
										</p>
										<input
											type="number"
											value={value}
											onChange={e => setValue(e.target.value)}
											step="1"
											min="2"
											max="111"
											className="border-2 mb-2 h-9 bg-[#232323]placeholder:text-[#42805F] border-white text-white  italic w-[11.25rem]"
											placeholder=" TOKEN ID"
										/>
										<div className="flex flex-col justify-center items-center mt-3 ">
											<button
												className="font-Roboto py-2 w-[11.25rem] text-white outline-none border-white border-2 focus:ring-2 hover:bg-white hover:text-black  hover:font-bold"
												onClick={() => mintShadeNFT?.()}
											>
												{isLoading ? 'MINTING...' : 'MINT'}
											</button>
											{isSuccess && (
												<div>
													Successfully minted your NFT!
													<div>
														<a href={`https://etherscan.io/tx/${data?.hash}`}>Etherscan</a>
													</div>
												</div>
											)}
											{(isPrepareError || isError) && (
												<div className="flex flex-col text-red-600 mt-3 text-center">
													Error: ID is already taken! <br /> Choose another ID.
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</>
			) : null}
		</>
	)
}
