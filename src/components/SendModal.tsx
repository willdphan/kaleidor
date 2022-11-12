import { useState } from 'react'

export default function SendModal() {
	const [showModal, setShowModal] = useState(false)
	return (
		<>
			<div className="flex items-center justify-center ">
				<button
					className="px-5 py-1 border-2 border-[#08F294] text-[#08F294] text-xl bg-black"
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
										<h4 className="text-lg text-center font-medium text-[#08F294]">
											HOW MUCH ETH WOULD YOU LIKE TO SEND?
										</h4>
										<p className="text-[#42805F] pb-8 pt-5 text-center">
											Sending ETH to the contract will enable assigned <br /> participants to
											withdraw portions of the sent amount anytime.
										</p>
										<input
											type="number"
											step=".01"
											min=".01"
											className="border-2 w-96 mb-5 h-9  text-start"
											placeholder="ETH"
										/>
										<div className="flex justify-center items-center mt-3 ">
											<button
												className=" w-96 mt-2 p-2.5 text-[#08F294] outline-none border-[#08F294] border-2 focus:ring-2"
												onClick={() => setShowModal(false)}
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
