import { FC } from 'react'
import ConnectWallet from './ConnectWallet'
import Link from 'next/link'
import { DisabledContextProvider } from 'antd/es/config-provider/DisabledContext'
import Image from 'next/image'
import headerlogo from 'images/headerlogo.png'
//logo

const Header: FC = () => {
	return (
		<header className="z-99 ">
			<ul className="flex flex-row absolute top-8 left-14 space-x-28 font-Mont text-2xl font-medium bg-black">
				<li>
					<a href={'/'}>
						<Image src={headerlogo} alt="Picture" width={55} height={30} />
					</a>
				</li>
				<li>
					<Link href="/discover">
						<a className="font-Roboto max-w-7xl ">DISCOVER</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a className="font-Roboto max-w-7xl ">GOVERN</a>
					</Link>
				</li>
				<li>
					<Link href="/">
						<a className="font-Roboto max-w-7xl ">BUILD</a>
					</Link>
				</li>
				<li>
					<Link href="/learn">
						<a className="font-Roboto max-w-7xl ">LEARN</a>
					</Link>
				</li>
			</ul>
			<div className="absolute top-6 right-6 ">
				<ConnectWallet />
			</div>
		</header>
	)
}

export default Header
