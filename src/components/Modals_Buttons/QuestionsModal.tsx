import { useState } from 'react'

export default function QuestionsModal() {
	const [showModal, setShowModal] = useState(false)
	return (
		<>
			<div className="flex items-center justify-center ">
				<button
					className="px-6 py-3 text-[#42805F] text-2xl bg-black rounded-md"
					type="button"
					onClick={() => setShowModal(true)}
				>
					HOW DOES IT WORK?
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
								<div className="mt-3 sm:flex">
									<div className="mt-2 mb-5 text-center ">
										<h4 className="text-lg text-center font-medium text-[#08F294]">
											SPLITZ CAN SPLIT
										</h4>
										<p className="mt-2 text-[15px] leading-relaxed text-gray-500">
											Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
											tempor incididunt ut labore et dolore magna aliqua.
										</p>
										<div className="flex justify-center items-center gap-2 mt-3 ">
											<button
												className=" w-96 mt-2 p-2.5 text-[#08F294] outline-none border-[#08F294] border-2 focus:ring-2"
												onClick={() => setShowModal(false)}
											>
												Cancel
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
