import React, {useState} from 'react'
import { Modal, ModalHeader } from 'reactstrap';
export default function Form() {
    const [modal, setModal] = useState(false)
  return (
    <div>
        <Modal
        size='lg'
        isOpen={modal}
        toggle={() => setModal(!modal)}>
            <ModalHeader toggle={() => setModal(!modal)}>
                POP
            </ModalHeader>
        </Modal>
    </div>
  )
}
