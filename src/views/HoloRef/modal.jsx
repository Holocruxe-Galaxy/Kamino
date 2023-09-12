import React from 'react';
import './modal.css'

const Modal = ({ isOpen, onClose, handleAudioPlay }) => {
  if (!isOpen) return null;

  return (
    <div className="modalOverlay">
      <div className="modal">
        <button onClick={onClose} >X</button>
        <h2>Selecciona una pregunta</h2>
        <ul>
          <li><button onClick={() => handleAudioPlay('audio1_RVC.wav')}>Quien eres?</button></li>
          <li><button onClick={() => handleAudioPlay('audio2_RVC.wav')}>Que es un Holoref?</button></li>
          <li><button onClick={() => handleAudioPlay('audio3_RVC.wav')}>En que puedes ayudarme?</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;