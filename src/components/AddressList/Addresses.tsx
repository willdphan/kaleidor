import React, { FC, ChangeEvent, useState } from 'react'

// import TodoTask from './Components/TodoTask'
import { IAddress } from '@/components/AddressList/Interfaces/interfaces.js'
import Address from './Address'
import { useContractWrite } from 'wagmi'
import splitz from 'src/pages/splitz.json'
import Link from 'next/link'
import { useAccount, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { useRouter } from 'next/router'

const Addresses: FC = () => {
	let router = useRouter()

	const [address, setAddress] = useState<string>('')
	const [owner, setOwner] = useState<string>('')

	const [addressList, setAddressList] = useState<IAddress[]>([])

	const ContractAddress = '0x441588b711aD8B277C9EFd119BbbBEBe3660980C'

	// const { address: adi, isConnecting, isDisconnected } = useAccount()
	//handle change for single input address
	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.name === 'task') {
			setAddress(event.target.value)
		}
	}
	// handle change for owner input address
	const handleOwnerChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.name === 'owner') {
			setOwner(event.target.value)
		}
	}

	const addAddress = (): void => {
		const newAddress = { addressName: address }
		setAddressList([...addressList, newAddress])
		setAddress('')
	}

	const deleteAddress = (addressToDelete: string): void => {
		setAddressList(
			addressList.filter(address => {
				return address.addressName != addressToDelete
			})
		)
	}

	console.log(
		'Recipients',
		// maps through array since addresses are in JSON
		addressList.map(obj => obj.addressName)
	)

	const {
		data: newSplit,
		write: createSplit,
		error: prepareError,
		isError: isPrepareError,
	} = useContractWrite({
		mode: 'recklesslyUnprepared',
		address: ContractAddress,
		abi: splitz,
		functionName: 'createSplit',
		args: [owner, addressList.map(obj => obj.addressName)],
	})

	const { isLoading, isSuccess } = useWaitForTransaction({
		hash: newSplit?.hash,
		onSettled(data, error) {
			console.log('Settled', { data, error })
		},
	})

	return (
		<div>
			<p className="font-Roboto font-normal pb-5 pt-10 text-[#08F294]">RECIPIENTS</p>
			<div className="w-full flex">
				<input
					type="text"
					placeholder=" Recipient Address"
					name="task"
					value={address}
					className="border-2 mr-5 h-9 bg-black placeholder:text-[#42805F] border-[#42805F] text-[#42805F] "
					onChange={handleChange}
				/>
				<button
					className="bg-black text-[#08F294] border-2 border-[#08F294] px-7 py-1 font-Roboto font-normal mb-5 "
					onClick={addAddress}
				>
					ADD ADDRESS
				</button>
			</div>
			<form
				onSubmit={e => {
					e.preventDefault()
					createSplit?.()
				}}
			>
				<div className="App">
					<div className="header">
						<p className="font-Roboto font-normal pb-5 text-[#08F294]">OWNER</p>
						<div className="inputContainer">
							<input
								type="text"
								placeholder=" Owner Address"
								name="owner"
								value={owner}
								className="border-2 mr-5 h-9 w-full mb-5 bg-black text-[#42805F] placeholder:text-[#42805F] border-[#42805F]"
								onChange={handleOwnerChange}
							/>
						</div>
						<div className="inputContainer">
							<br />
							<button
								disabled={!createSplit || isLoading}
								className="bg-black text-[#08F294] border-2 border-[#08F294] w-full  py-1 font-Roboto font-normal mb-5 "
							>
								{isLoading ? '...CREATING SPLIT' : 'CREATE SPLIT'}
							</button>
						</div>
					</div>
					<p className="font-Roboto font-normal pb-3 text-[#08F294]">SPLITZ RECIPIENTS</p>
					<div className="border-2 border-[#42805F]">
						<div className="addressList">
							{addressList.map((task: IAddress, key: number) => {
								return <Address key={key} task={task} deleteAddress={deleteAddress} />
							})}
						</div>
						{isSuccess && (
							<div>
								Successfully minted your NFT!
								<div>
									<a href={`https://etherscan.io/tx/${newSplit?.hash}`}>Etherscan</a>
								</div>
							</div>
						)}
					</div>
				</div>
			</form>
		</div>
	)
}
export default Addresses

// const { data: plusRecipient, write: addRecipient } = useContractWrite({
// 	mode: 'recklesslyUnprepared',
// 	address: ContractAddress,
// 	abi: splitz,
// 	functionName: 'addRecipient',
// })

// const { data: subtractRecipient, write: removeRecipient } = useContractWrite({
// 	mode: 'recklesslyUnprepared',
// 	address: ContractAddress,
// 	abi: splitz,
// 	functionName: 'removeRecipient',
// })
