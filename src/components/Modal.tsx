import React, { useState, useCallback, forwardRef, useImperativeHandle } from 'react';

export interface ModalHandles {
    openModal: () => void;
}

const Modal: React.RefForwardingComponent<ModalHandles> = (props, ref) => {

    const [visible, setVisible] = useState(true)

    const openModal = useCallback(() => {
        setVisible(true)
    }, [])

    // Ao usar este hook, estamos expondo o component filho Modal para o pai, e permitindo que o mesmo tenha acesso
    // O que se faz normalmente é utilizar o filho no pai sem expor ou "abrir" o componente
    // O useImperativeHandle consegue expor a ref do modal para o pai, esse é o papel dele: fazer o caminho inverso.
    useImperativeHandle(ref, () => {
        return { openModal }
    })


    const handleCloseModal = useCallback(() => {
        setVisible(false)
    }, [])

    if (!visible) {
        return null
    }

    return (
        <div className="">
            Modal aberto

            <button
                onClick={handleCloseModal}
            >
                Fechar modal
                </button>
        </div>
    );
}

export default forwardRef(Modal);