import React, { FC, ChangeEvent, useState } from 'react'

// import TodoTask from './Components/TodoTask'
import { IAddress } from '@/components/AddressList/Interfaces/interfaces.js'
import Address from './Address'
import { useContractWrite } from 'wagmi'
import splitz from 'src/pages/splitz.json'
import Link from 'next/link'
import { useAccount, usePrepareContractWrite, useWaitForTransaction } from 'wagmi'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Arrow from 'images/Arrow.png'

const Addresses: FC = () => {
	let router = useRouter()

	const [address, setAddress] = useState<string>('')
	const [owner, setOwner] = useState<string>('')

	const [addressList, setAddressList] = useState<IAddress[]>([])

	const ContractAddress = '0xE6fe4529D3a7b676eAf0F9E5d8c7D73f1B270a0c'

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
			<p className="font-Rubik font-normal pb-5 pt-10 text-[#08F294]">RECIPIENTS</p>
			<div className="w-full flex">
				<input
					type="text"
					placeholder=" ADDRESS"
					name="task"
					value={address}
					className="border-2 mr-5 h-9 bg-black placeholder:text-[#42805F] border-[#42805F] text-[#42805F] w-full placeholder:font-Roboto placeholder:italic"
					onChange={handleChange}
				/>
				<button
					className="bg-black text-[#08F294] border-2 border-[#08F294] px-7 py-1 font-Roboto font-normal mb-5 w-full hover:bg-[#08F294] hover:text-black hover:font-bold"
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
						<p className="font-Rubik font-normal pb-5 text-[#08F294]">OWNER</p>
						<div className="inputContainer">
							<input
								type="text"
								placeholder=" ADDRESS"
								name="owner"
								value={owner}
								className="border-2 mr-5 h-9 w-full mb-0 bg-black text-[#42805F] placeholder:text-[#42805F] placeholder:font-Roboto border-[#42805F] placeholder:italic"
								onChange={handleOwnerChange}
							/>
						</div>
						<div className="inputContainer">
							<br />
							<button
								disabled={!createSplit || isLoading}
								className="bg-black text-[#08F294] border-2 border-[#08F294] w-full py-1 font-Roboto font-normal mb-2 hover:bg-[#08F294] hover:text-black hover:font-bold"
							>
								{isLoading ? '...CREATING SPLIT' : 'CREATE SPLIT'}
							</button>
						</div>
					</div>

					{isSuccess && (
						<div>
							<div className="text-[#42805F] pb-2 font-Roboto">
								Sucessfully Created Split! Send ETH to assigned recipients!
							</div>

							<a className="flex items-center justify-center mb-3">
								<Image src={Arrow} alt="Arrow" width={15} height={10} />
							</a>

							<div>
								<Link href="/pay">
									<button className="bg-[#08F294] text-black border-2 border-[#08F294] w-full py-1 font-Roboto  items-center justify-center mb-5 font-bold">
										PAY RECIPIENTS
									</button>
								</Link>
							</div>
						</div>
					)}
					<p className="font-Rubik font-normal text-[#08F294] my-3 items-start">SPLITZ RECIPIENTS</p>
					<div className="pt-1 text-[#42805F]">
						<div className="addressList text-[#42805F]">
							{addressList.map((task: IAddress, key: number) => {
								return <Address key={key} task={task} deleteAddress={deleteAddress} />
							})}
						</div>
					</div>
				</div>
			</form>
		</div>
	)
}
export default Addresses
