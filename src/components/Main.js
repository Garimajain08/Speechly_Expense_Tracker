import React from 'react'
import Form from './Form'
import List from './List'
export default function Main() {
  return (
    <div className='bg-white p-4'>
      <h3 className='text-2xl'>Expense Tracker</h3>
      <p className='font-light'>Powered by Speechly</p>
      <div className='flex text-xl flex-col items-center justify-center'>
<p>Total Balance $90</p>
<p>Try Saying</p>
<p>Add Expense for $90nin .......</p>
      </div>
<Form/>
<List/>

    </div>
  )
}
