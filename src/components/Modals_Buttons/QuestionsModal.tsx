import { useState } from 'react'

export default function QuestionsModal() {
	const [showModal, setShowModal] = useState(false)
	return (
		<>
			<div className="flex items-center justify-center ">
				<button
					className="px-6 py-3 text-[#42805F] text-2xl bg-black rounded-md font-Roboto"
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
							className="fixed inset-0 w-full h-full bg-black opacity-40 "
							onClick={() => setShowModal(false)}
						></div>
						<div className="flex items-center min-h-screen px-4 py-8">
							<div className="relative w-full max-w-lg p-4 mx-auto bg-black border-2 border-[#08F294] rounded-md shadow-lg">
								<div className="mt-3">
									<div className="mt-2 mb-5 flex flex-col items-center ">
										<h4 className="text-lg text-center font-medium text-[#08F294] font-Rubik">
											SPLITZ CAN SPLIT
										</h4>
										<p className="text-[#42805F] pb-2 pt-3 text-center font-Roboto max-w-sm">
											Easily split your funds between addresses with Splitz. Add an owner and as
											many recipients you would like to a split. <br /> <br />
											Press &quot;CREATE SPLIT&quot; to access the &quot;PAY RECIPIENTS&quot; page
											and evenly &quot;SEND ETH&quot; among the assigned addresses. <br /> <br />{' '}
											Only the owner can add or remove recipients.
										</p>

										<div className="flex flex-col justify-center items-center mt-3 ">
											<button
												className="font-Roboto w-96 mt-2 p-2.5 text-[#08F294] outline-none border-[#08F294] border-2 focus:ring-2 hover:bg-[#08F294] hover:text-black hover:font-bold"
												onClick={() => setShowModal(false)}
											>
												CANCEL
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
