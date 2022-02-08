import React, { useState } from 'react';

export const useModal = (initialvalue = false) => {
    const [isOpen, setisOpen] = useState(initialvalue);

    const openModal = () => setisOpen(true);

    const closeModal = () => setisOpen(false);

    return [isOpen, openModal, closeModal]

};


