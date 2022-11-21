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
					'--ck-connectbutton-color': '#08F294',
					'--ck-connectbutton-background': '#000000',
					'--ck-connectbutton-box-shadow': '#000000',
					// button text on hover
					'--ck-connectbutton-hover-color': '#08F294',
					// modal button text color
					'--ck-secondary-button-color': '#08F294',
					// modal button background color
					'--ck-secondary-button-background': '#000000',
					// modal background
					'--ck-body-background': '#000000',
					'--ck-secondary-button-box-shadow': '#42805F',
					//font
					'--ck-font-family': '"Roboto", "Rubik", Rubik',
					// ETH text color
					'--ck-body-color-muted': '#42805F',
					// modal text color
					'--ck-body-color': '#08F294',
				}}
				theme="minimal"
			>
				{children}
			</ConnectKitProvider>
		</WagmiConfig>
	)
}

export default Web3Provider
