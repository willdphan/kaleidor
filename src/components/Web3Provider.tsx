import { useTheme } from 'next-themes'
import { APP_NAME } from '@/lib/consts'
import { createClient, WagmiConfig, configureChains, chain, defaultChains } from 'wagmi'
import { ConnectKitProvider, getDefaultClient } from 'connectkit'
import { alchemyProvider } from 'wagmi/providers/alchemy'
import { publicProvider } from 'wagmi/providers/public'

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
					'--ck-font-family': '"Fondamento"',
				}}
				theme="retro"
			>
				{children}
			</ConnectKitProvider>
		</WagmiConfig>
	)
}

export default Web3Provider
