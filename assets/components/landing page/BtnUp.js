// ! FILES
import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

const BtnUp = () => {
  const [showButton, setShowButton] = useState(false);

  const isShowed = () => {
    if (
      document.body.scrollTop > 1000 ||
      document.documentElement.scrollTop > 1000
    ) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', isShowed);
    return () => {
      window.removeEventListener('scroll', isShowed);
    };
  }, []);

  const scrollToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      {showButton ? (
        <button onClick={() => scrollToTop()} className='btn btn-up'>
          <FaChevronUp />
        </button>
      ) : (
        ''
      )}
    </>
  );
};

export default BtnUp;
