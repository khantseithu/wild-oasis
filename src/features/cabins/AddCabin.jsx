import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import { useState } from "react";
import CreateCabinForm from "./CreateCabinForm";

export default function AddCabin() {
	const [isOpenModal, setIsOpenModal] = useState(false);
	return (
		<div>
			<Button onClick={() => setIsOpenModal(!isOpenModal)}>
				Add Cabin
			</Button>
			{isOpenModal && (
				<Modal onClose={() => setIsOpenModal(false)}>
					<CreateCabinForm
						onCloseModal={() => setIsOpenModal(false)}
					/>
				</Modal>
			)}
		</div>
	);
}
