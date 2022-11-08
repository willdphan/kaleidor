import { FC } from 'react'
import { APP_NAME } from '@/lib/consts'
import ConnectWallet from '@/components/ConnectWallet'
import { BookOpenIcon, CodeIcon, ShareIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import VIP from 'public/images/crown.png'

const Home: FC = () => {
	return (
		<div className="relative flex items-top justify-center min-h-screen bg-[#EBE4D4] sm:items-center py-4 sm:pt-0">
			<div className="absolute top-6 right-6">
				<ConnectWallet />
			</div>
			<div className="max-w-3xl mx-auto sm:px-6 lg:px-8 flex content-center justify-center mt-28 sm:mt-0 lg:mt-0 xl:mt-0">
				<div className="text-center pt-8">
					<div className="flex content-center justify-center">
						<div className="mb-5">
							<a href={'/crown'}>
								<Image src={VIP} alt="Picture of the author" width={90} height={90} />
							</a>
						</div>
					</div>
					<div className="flex items-center content-center justify-center italic">
						<a
							href="https://eth-kingdom.vercel.app/"
							className="text-2xl underline font-Fondamento leading-relaxed text-black tracking-widerbg-[#101827]"
						>
							Share with friends!
						</a>
					</div>

					<h1 className="text-4xl mt-5 font-bold font-Fondamento leading-relaxed tracking-normal text-[#2C2C2C] ">
						An Ethereum contract on the blockchain, that will make you a King or Queen, might grant you
						riches, & will immortalize your name.
						<div className="mb-5"> Press the crown to get started. </div>
					</h1>
				</div>
			</div>
		</div>
	)
}

export default Home
