import { useState } from 'react'
import { useProvider, useSigner, useContractRead, useAccount, useBalance, useContractWrite } from 'wagmi'
import splitz from 'src/pages/splitz.json'
import React from 'react'
import { FC, ChangeEvent } from 'react'

export default function AddRecipientButton() {
	const [showModal, setShowModal] = useState(false)
	const [address, setAddress] = React.useState<any>('')

	const ContractAddress = '0xE6fe4529D3a7b676eAf0F9E5d8c7D73f1B270a0c'

	// withdraws all of potion available to connected wallet
	const {
		data: removeRec,
		write: removeRecipient,
		error: prepareError,
		isError: isPrepareError,
	} = useContractWrite({
		mode: 'recklesslyUnprepared',
		address: ContractAddress,
		abi: splitz,
		functionName: 'removeRecipient',
		args: [address],
	})

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.name === 'removeAddress') {
			setAddress(event.target.value)
		}
	}

	return (
		<>
			<div className="flex items-center justify-center w-full">
				<button
					className="w-full py-1 border-2 border-[#08F294] text-[#08F294] text-large bg-black hover:bg-[#08F294] hover:text-black hover:font-bold"
					type="button"
					onClick={() => setShowModal(true)}
				>
					REMOVE RECIPIENT
				</button>
			</div>
			{showModal ? (
				<>
					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div
							className="fixed inset-0 w-full h-full bg-black opacity-40 "
							onClick={() => setShowModal(false)}
						></div>
						<div className="flex items-center min-h-screen px-4 py-8">
							<div className="relative w-full max-w-lg p-4 mx-auto bg-black border-2 border-[#08F294] rounded-md shadow-lg">
								<div className="mt-3">
									<div className="mt-2 mb-5 flex flex-col items-center ">
										<h4 className="text-lg text-center font-medium text-[#08F294] font-Rubik">
											WHO WOULD YOU LIKE TO REMOVE?
										</h4>
										<p className="text-[#42805F] pb-2 pt-3 text-center font-Roboto max-w-sm">
											Insert a wallet address in order to remove them to the split. Check under
											&quot;RECIPIENTS&quot; to see the current list of recipients.
										</p>

										<div className="flex flex-col justify-center items-center mt-3 ">
											<input
												type="text"
												placeholder=" ADDRESS"
												name="removeAddress"
												value={address}
												className="border-2 mb-3 h-9 bg-black placeholder:text-[#42805F] border-[#42805F] text-[#42805F] w-full italic"
												onChange={handleChange}
											/>
											<button
												className="font-Roboto w-96 mt-2 p-2.5 text-[#08F294] outline-none border-[#08F294] border-2 focus:ring-2 hover:bg-[#08F294] hover:text-black hover:font-bold"
												onClick={() => removeRecipient?.()}
											>
												REMOVE RECIPIENT
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
