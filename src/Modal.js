import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.getElementById('modal');

const Modal = ({ children }) => {
    // Create ref to container div
    const elRef = useRef(null);
    if (!elRef.current) {
        elRef.current = document.createElement('div');
    }

    // Mount div after children have rendered / Unmount
    useEffect(() => {
        modalRoot.appendChild(elRef.current);
        return () => modalRoot.removeChild(elRef.current);
    });

    // Render to container div
    return createPortal(
        <React.Fragment>
            <h4>Modal</h4>
            {children}
        </React.Fragment>,
        elRef.current
    );
};
export default Modal;
