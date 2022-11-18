import React, { FC, ChangeEvent, useState } from 'react'

// import TodoTask from './Components/TodoTask'
import { IAddress } from '@/components/AddressList/Interfaces/interfaces.js'
import Address from './Address'
import { useContractWrite } from 'wagmi'
import splitz from 'src/pages/splitz.json'
import Link from 'next/link'
import { useAccount, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'

const Addresses: FC = () => {
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

	// figure out how to pass an array to the function, look in discussion forum
	const {
		data: newSplit,
		write: createSplit,
		error,
		isError,
	} = useContractWrite({
		mode: 'recklesslyUnprepared',
		address: ContractAddress,
		abi: splitz,
		functionName: 'createSplit',
		args: [owner, addressList.map(obj => obj.addressName)],
	})

	const { isLoading, isSuccess } = useWaitForTransaction({
		onError(error) {
			console.log('Error', error)
		},
	})

	return (
		<div className="App">
			<div className="header">
				<p className="font-Roboto font-normal pb-5 text-[#08F294]">OWNER</p>
				<div className="inputContainer">
					<input
						type="text"
						placeholder="Owner Address"
						name="owner"
						value={owner}
						className="border-2 mr-5 h-9 w-full mb-5"
						onChange={handleOwnerChange}
					/>
				</div>
				<p className="font-Roboto font-normal pb-5 text-[#08F294]">RECIPIENTS</p>
				<div className="inputContainer">
					<input
						type="text"
						placeholder="Recipient's Address"
						name="task"
						value={address}
						className="border-2 mr-5 h-9 w-[12.5em]"
						onChange={handleChange}
					/>
					<button
						className="bg-black text-[#08F294] border-2 border-[#08F294]  px-7 py-1 font-Roboto font-normal mb-5 "
						onClick={addAddress}
					>
						ADD ADDRESS
					</button>
					<div className="mt-[-3rem] py-4 ">
						<section className="pt-10">
							<button
								onClick={() => createSplit?.()}
								className="bg-black text-[#08F294] border-2 border-[#08F294] px-[8.3rem] py-1 font-Roboto font-normal mb-5 "
							>
								CREATE SPLIT
							</button>
						</section>
					</div>
				</div>
			</div>
			<div className="addressList">
				{addressList.map((task: IAddress, key: number) => {
					return <Address key={key} task={task} deleteAddress={deleteAddress} />
				})}
			</div>
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
