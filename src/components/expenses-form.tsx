import React from 'react';

export default function ExpensesForm() {
  return (
    <form>
      <input type='text' name='description' placeholder='Description' />
      <input type='number' name='amount' placeholder='Amount' />
      <button>Add expense</button>
    </form>
  );
}
