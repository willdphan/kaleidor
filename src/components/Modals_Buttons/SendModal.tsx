import { useState } from 'react'
import { useSendTransaction, usePrepareSendTransaction } from 'wagmi'
import React from 'react'

export default function SendModal() {
	const [showModal, setShowModal] = useState(false)
	const [value, setValue] = React.useState<any>('')

	const ContractAddress = '0xE6fe4529D3a7b676eAf0F9E5d8c7D73f1B270a0c'

	const { config } = usePrepareSendTransaction({
		request: { to: ContractAddress, value: (value * 1e18).toString() },
	})
	const { data, isLoading, isSuccess, sendTransaction } = useSendTransaction(config)

	return (
		<>
			<div className="flex items-center justify-center ">
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
											HOW MUCH ETH WOULD YOU LIKE TO SEND?
										</h4>
										<p className="text-[#42805F] pb-5 pt-3 text-center  max-w-sm font-Roboto">
											Sending ETH to the contract will enable assigned participants to withdraw
											portions of the sent amount anytime.
										</p>
										<input
											type="number"
											value={value}
											onChange={e => setValue(e.target.value)}
											step=".01"
											min=".01"
											className="border-2 mb-2 h-9 bg-black placeholder:text-[#42805F] border-[#42805F] text-[#42805F] w-full italic  max-w-sm"
											placeholder=" ETH"
										/>
										<div className="flex justify-center items-center mt-3 ">
											<button
												className="font-Roboto w-96 p-2.5 text-[#08F294] outline-none border-[#08F294] border-2 focus:ring-2 hover:bg-[#08F294] hover:text-black hover:font-bold"
												onClick={() => sendTransaction?.()}
											>
												SEND ETHER
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
