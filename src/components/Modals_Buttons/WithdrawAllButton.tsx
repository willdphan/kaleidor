import { useState } from 'react'
import { useProvider, useSigner, useContractRead, useAccount, useBalance, useContractWrite } from 'wagmi'
import splitz from 'src/pages/splitz.json'
import React from 'react'

export default function WithdrawAllButton() {
	const [showModal, setShowModal] = useState(false)

	const ContractAddress = '0x7Dac656FA53e0863cD69BFfB9EE88E9fa45222CE'

	// withdraws all of potion available to connected wallet
	const { write: withdrawAll } = useContractWrite({
		mode: 'recklesslyUnprepared',
		address: ContractAddress,
		abi: splitz,
		functionName: 'withdrawAll',
	})

	return (
		<>
			<div className="flex items-center justify-center ">
				<button
					className="px-5 py-1 border-2 border-[#08F294] text-[#08F294] text-large bg-black"
					type="button"
					onClick={() => setShowModal(true)}
				>
					WITHDRAW ALL
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
											WITHDRAW ALL AVAILABLE ETH?
										</h4>
										<p className="text-[#42805F] pb-2 pt-5 text-center">
											Withdraw all of the Ether that&apos;s available to you. Check under
											&quot;TOTAL AVAILABLE&quot; to see you available balace.
										</p>

										<div className="flex justify-center items-center mt-3 ">
											<button
												className=" w-96 mt-2 p-2.5 text-[#08F294] outline-none border-[#08F294] border-2 focus:ring-2"
												onClick={() => withdrawAll?.()}
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
