import React, { FC, ChangeEvent, useState } from 'react'

// import TodoTask from './Components/TodoTask'
import { IAddress } from '@/components/AddressList/Interfaces/interfaces.js'
import Address from './Address'

const Addresses: FC = () => {
	const [address, setAddress] = useState<string>('')

	const [addressList, setAddressList] = useState<IAddress[]>([])

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		if (event.target.name === 'task') {
			setAddress(event.target.value)
		}
	}

	const addAddress = (): void => {
		const newAddress = { addressName: address }
		setAddressList([...addressList, newAddress])
		setAddress('')
	}

	const deleteAddress = (taskNameToDelete: string): void => {
		setAddressList(
			addressList.filter(task => {
				return task.addressName != taskNameToDelete
			})
		)
	}

	return (
		<div className="App">
			<div className="header">
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
						Add Address
					</button>
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
