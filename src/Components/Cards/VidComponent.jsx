import React, { useEffect } from 'react'
import { useNavigate } from 'react-router';

import Lottie from 'react-lottie';
import anim from '../../../public/image/anim.json'

function VidComponent() {
    const navigate = useNavigate();

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: anim,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };

  return (
    <div className='flex flex-col w-full h-full mt-12'>
        <h2 className='text-white text-[30px]'>That's a heart break</h2>
        <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
      />

    </div>
  );
}



export default VidComponent