

import React from "react";
import styles from './modal.module.css'

interface IModal{
    children: React.ReactNode
}

const closeModal=(e:React.MouseEvent):void=>{
    const modal = document.querySelector('#modal');
    modal?.classList.add('hide')
}

const Modal = ({children}: IModal) => {
    return (  
        <div id="modal" className="hide">
            <div className={styles.fade} onClick={closeModal}></div>
            <div className={styles.modal}>
                <h2>texto modal</h2>
                {children}
            </div>
        </div>
    );
}
 
export default Modal;