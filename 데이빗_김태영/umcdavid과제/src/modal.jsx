import React, { useState } from 'react';
import "../src/modal.css";

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <h1>어쩌고 어쩌고 모달내용</h1>
      <h2>어쩌고 저쩌고</h2>
      <button onClick={openModal}>모달 열기</button>

      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>모달 제목</h2>
            <p>어쩌고 저쩌고 모달 내용</p>
            <button className="close" onClick={closeModal}>모달 닫기</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
