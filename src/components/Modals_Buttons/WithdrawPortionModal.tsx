import { useState } from 'react'
import React from 'react'
import { useContractWrite } from 'wagmi'
import splitz from 'src/pages/splitz.json'

export default function WithdrawPortionModal() {
	const [showModal, setShowModal] = useState(false)
	const [value, setValue] = React.useState<any>('')

	const ContractAddress = '0x98883F4062a929cbDAf1939C41c4160fB86Af62F'

	// withdraws amount determined by user of total available
	const { write: withdrawPortion } = useContractWrite({
		mode: 'recklesslyUnprepared',
		address: ContractAddress,
		abi: splitz,
		functionName: 'withdrawPortion',
		args: [(value * 1e18).toString()],
	})

	return (
		<>
			<div className="flex items-center justify-center ">
				<button
					className="px-5 py-1 border-2 border-[#08F294] text-[#08F294] text-large bg-black"
					type="button"
					onClick={() => setShowModal(true)}
				>
					WITHDRAW PORTION
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
										<h4 className="text-lg text-center font-medium text-[#08F294] ">
											HOW MUCH ETH WOULD YOU LIKE TO WITHDRAW?
										</h4>
										<p className="text-[#42805F] pb-8 pt-5 text-center">
											Withdraw a portion of the total ETH available to you. <br /> Check under
											&quot;TOTAL AVAILABLE&quot; for your total portion.
										</p>
										<input
											type="number"
											value={value}
											onChange={e => setValue(e.target.value)}
											step=".01"
											min=".01"
											className="border-2 w-96 mb-5 h-9  text-start"
											placeholder="ETH"
										/>
										<div className="flex justify-center items-center mt-3 ">
											<button
												className=" w-96 mt-2 p-2.5 text-[#08F294] outline-none border-[#08F294] border-2 focus:ring-2"
												onClick={() => withdrawPortion?.()}
											>
												WITHDRAW ETHER
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
