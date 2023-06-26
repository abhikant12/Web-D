import React from 'react'
import "./Spinner.css"

const Spinner = () => {
  return (
    <div className='mt-[35vh] flex justify-center align-middle '>
    <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Spinner
