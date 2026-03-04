import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'flowbite-react';
import Spinner from '../spinner/Spinner';
import type { ModalProps } from './modal.type';

function VentanaModal({ titulo, size, children, show, loading, cerrarModal, hanleSubmit }: ModalProps) {

    return (
        <Modal className='backdrop-blur-sm' size={size} show={show} onClose={cerrarModal}>
            <ModalHeader className='border-b border-gray-200'>{titulo}</ModalHeader>
            <ModalBody>
                {children}
            </ModalBody>
            <ModalFooter className='flex justify-end'>
                <Button type='button' color="alternative" onClick={cerrarModal}>
                    Cancelar
                </Button>
                <Button type='button' color='green' onClick={hanleSubmit}>
                    {loading ? <Spinner /> : 'Guardar'}
                </Button>
            </ModalFooter>
        </Modal>
    );
}

export default VentanaModal;