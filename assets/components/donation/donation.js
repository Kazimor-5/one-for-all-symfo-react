// ! FILES
import React, { useState } from 'react';
import '../../styles/index.css';

const Donation = () => {
  const [amount, setAmount] = useState(0);

  console.log(amount);

  const handleSubmit = async (e) => {
    console.log('envoyé', amount);
  };

  return (
    <section className='section-donation'>
      <form
        onSubmit={handleSubmit}
        method='post'
        action='/payment'
        className='form'
      >
        <h2 className='title'>faire un don</h2>
        <article className='form-row'>
          <label htmlFor='amount' className='form-label'>
            Montant
          </label>
          <input
            type='number'
            name='amount'
            id='amount'
            value={amount}
            onChange={(e) => setAmount(e.currentTarget.value)}
            className='form-input'
          />
        </article>
        <button type='submit' className='btn btn-block'>
          Faire un don
        </button>
      </form>
    </section>
  );
};

export default Donation;
