import { useState } from 'react'
import { useProvider, useSigner, useContractRead, useAccount, useBalance, useContractWrite } from 'wagmi'
import splitz from 'src/pages/splitz.json'

export default function WithdrawAllButton() {
	const [showModal, setShowModal] = useState(false)

	const provider = useProvider()
	const { data: signer, isError, isLoading } = useSigner()
	const { address, isConnecting, isDisconnected } = useAccount()
	const abi = splitz

	const ContractAddress = '0xA9Bb33745EDd62423275fc4ba93Aa529D37bfc8d'

	// const { data: withdrawAllOfPortionData, write: withdrawAllOfPortion } = useContractWrite({
	// 	mode: 'recklesslyUnprepared',
	// 	address: ContractAddress,
	// 	abi: splitz,
	// 	functionName: 'withdrawAllOfPortion',
	// })

	return (
		<div className="flex items-center justify-center ">
			<button
				className="px-5 py-1 border-2 border-[#08F294] text-[#08F294] text-xl bg-black"
				type="button"
				onClick={() => withdrawAllOfPortion?.()}
			>
				WITHDRAW ALL
			</button>
		</div>
	)
}
