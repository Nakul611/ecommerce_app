import React from 'react'
import { NavLink, Link } from 'react-router-dom'

const header = () => {
  return <>
    <header className='header-top-strip py-3'>
      <div className='container-xxl'>
        <div className="row">
          <div className="col-6">
            <p className='text-white mb-0'>
              Free Shipping Over $100 & Free Returns
            </p>
          </div>
          <div className="col-6">
            <p className='text-end text-white'>
              Hotline: <a className="text-white" href='tel:+91 6392307525'>+91 6392307525</a>
            </p>
          </div>
        </div>
      </div>
    </header>
  </>
}

export default header