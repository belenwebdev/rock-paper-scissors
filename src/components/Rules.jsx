import { useState } from 'react'
import Modal from './Modal/Modal'
import rules from '../assets/rules.svg';
import close from '../assets/close.svg';

function Rules() {
    const [isModalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(prev => !prev);
    }

    if(isModalOpen){
        document.body.classList.add('active-modal');
    }
    else {
        document.body.classList.remove('active-modal');
    }

    return (
        <>
        <div className="row align-right">
            <button className="btn-rules" onClick={toggleModal}>Rules</button>
        </div>
        {isModalOpen && 
            <Modal>
                <div className="modal-header">
                    <h4>Rules</h4>
                    <img src={close} className="close-modal" alt="Close" onClick={toggleModal}/>
                </div>
                <img src={rules} alt="Rules"/>
            </Modal>
        }
        </>
    )
}

export default Rules
