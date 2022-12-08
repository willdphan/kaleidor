import { useState } from 'react'
import { useProvider, useSigner, useContractRead, useAccount, useBalance, useContractWrite } from 'wagmi'
import Shade from 'src/pages/Shade.json'
import React from 'react'
import { FC, ChangeEvent } from 'react'

export default function MintButton() {
	const [showModal, setShowModal] = useState(false)
	const [value, setValue] = React.useState<any>('')

	const ContractAddress = '0x3fE966e1C3f486B237D0DE82C55Bea0cd2E468bB'

	// withdraws all of potion available to connected wallet
	const {
		data: mint,
		write: mintShadeNFT,
		error: prepareError,
		isError: isPrepareError,
	} = useContractWrite({
		mode: 'recklesslyUnprepared',
		address: ContractAddress,
		abi: Shade,
		functionName: 'mintShadeNFT',
		args: [value],
	})

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
							className="fixed inset-0 w-full h-full bg-black opacity-40"
							onClick={() => setShowModal(false)}
						></div>
						<div className="flex items-center min-h-screen px-4 py-8">
							<div className="relative w-full max-w-lg p-4 mx-auto bg-black border-2 border-[#08F294] rounded-md shadow-lg">
								<div className="mt-3">
									<div className="mt-2 mb-5 flex flex-col items-center ">
										<h4 className="text-lg text-center font-medium text-[#08F294] font-Rubik">
											GET YOUR SHADE
										</h4>
										<p className="text-[#42805F] pb-5 pt-3 text-center  max-w-sm font-Roboto">
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
											className="border-2 mb-2 h-9 bg-black placeholder:text-[#42805F] border-[#42805F] text-[#42805F] w-full italic  max-w-sm"
											placeholder=" TOKEN ID"
										/>
										<div className="flex justify-center items-center mt-3 ">
											<button
												className="font-Roboto w-96 p-2.5 text-[#08F294] outline-none border-[#08F294] border-2 focus:ring-2 hover:bg-[#08F294] hover:text-black hover:font-bold"
												onClick={() => mintShadeNFT?.()}
											>
												MINT
											</button>
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
