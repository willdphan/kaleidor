import { useTheme } from 'next-themes'
import { APP_NAME } from '@/lib/consts'
import { createClient, WagmiConfig, configureChains, chain, defaultChains } from 'wagmi'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'
import { InjectedConnector } from 'wagmi/connectors/injected'

const { chains, provider } = configureChains(
	[chain.goerli, chain.optimism, chain.mainnet],
	[alchemyProvider({ apiKey: process.env.NEXT_PUBLIC_ALCHEMY_ID }), publicProvider()],
	{ targetQuorum: 1 }
)

const client = createClient(
	getDefaultClient({
		appName: APP_NAME,
		autoConnect: true,
		provider,
		chains,
	})
)

const Web3Provider = ({ children }) => {
	return (
		<WagmiConfig client={client}>
			<ConnectKitProvider
				customTheme={{
					'--ck-connectbutton-color': 'white',
					'--ck-connectbutton-background': '#232323',
					'--ck-connectbutton-box-shadow': '#232323',
					// button text on hover
					'--ck-connectbutton-hover-color': 'white',
					// modal button text color
					'--ck-secondary-button-color': '#232323',
					// modal button background color
					'--ck-secondary-button-background': 'white',
					// modal background
					'--ck-body-background': '#232323',
					'--ck-secondary-button-box-shadow': '#232323',
					//font
					'--ck-font-family': '"Arial", "Rubik", Rubik',
					// ETH text color
					'--ck-body-color-muted': 'white',
					// modal text color
					'--ck-body-color': 'white',
				}}
				theme="minimal"
			>
				{children}
			</ConnectKitProvider>
		</WagmiConfig>
	)
}

export default Web3Provider
