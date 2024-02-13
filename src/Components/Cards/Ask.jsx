import React from 'react'
import TinderCard from 'react-tinder-card'
import { useNavigate } from 'react-router';

function Ask() {

    const navigate = useNavigate();

    const handleNoClick = () => {
        navigate('../nopage', {replace: true});
    }

    const handleYesClick = () => {
        navigate('../yespage', {replace: true});
    }
  return (
    <div className='w-full items-center'>
        <h1 className='text-[32px] mb-4 w-[90%]'>Would you be my valentine? </h1>
        <div className='buttons'>
          <button onClick={handleNoClick}>{"It's a No 💔"}</button>
          <button onClick={handleYesClick}>{"I say Yes ❤️"}</button>
        </div>

    </div>
  )
}

export default Ask