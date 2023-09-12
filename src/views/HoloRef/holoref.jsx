import React, { useState, useEffect, useRef } from 'react';
import AndyModelCanvas from '../../components/models/andy';
import Modal from './modal';

import Astro from '../../components/models/nuevoas';

const Holoref = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentAudio, setCurrentAudio] = useState(null);
  const audioRef = useRef();

  const handleAudioPlay = (filename) => {
    setCurrentAudio(`/audio/${filename}`);
  };

  useEffect(() => {
    if (currentAudio) {
      audioRef.current.load();
      audioRef.current.play();
    }
  }, [currentAudio]);

  return (
    <div>
      <AndyModelCanvas onClick={() => setIsModalOpen(true)} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} handleAudioPlay={handleAudioPlay} />
      <audio ref={audioRef} src={currentAudio} />
    </div>
  );
};

export default Holoref;
