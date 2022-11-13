import React from 'react'
// import Header from '@/components/Header'
import Image from 'next/image'
import ConnectWallet from '@/components/ConnectWallet'
import Link from 'next/link'
import Modal from '@/components/Modals_Buttons/QuestionsModal'
import Arrow from 'images/Arrow.png'
import Addresses from '@/components/AddressList/Addresses'

const Split = () => {
	// const url = process.env.PUBLIC_API_LINK
	// // const provider = new ethers.providers.JsonRpcProvider(url)
	// const provider = useProvider()
	// const { data: signer, isError, isLoading } = useSigner()

	// const abi = splitz
	// const ContractAddress = process.env.PUBLIC_ADDRESS

	return (
		<div className="bg-black min-h-screen">
			<div>
				<div className="absolute top-6 right-6">
					<ConnectWallet />
				</div>
				<section>
					<div className="flex justify-center text-5xl pt-44 pb-2 text-[#08F294] font-Rubik leading-relaxed tracking-wider bg-black">
						<Link href="/">SPLITZ</Link>
					</div>
					<div className="flex justify-center ">
						<a>
							<Image src={Arrow} alt="Arrow" width={25} height={20} />
						</a>
					</div>
					<Modal />
					<div className="flex items-center justify-center  font-Rubik pb-5"></div>
				</section>
				<div className="flex items-center justify-center space-x-[12em] ">
					<div className="">
						<div className="mt-[-3rem] py-4 ">
							<section className="pt-10"><Link href="/pay">
								<button className="bg-black text-[#08F294] border-2 border-[#08F294] px-[8.3rem] py-1 font-Roboto font-normal mb-5 ">
									CREATE SPLIT
								</button>
							</Link></section>
							<section className="">
								<p className="font-Roboto font-normal pb-5 text-[#08F294]">RECIPIENTS</p>
								<Addresses />
							</section>
							
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Split
