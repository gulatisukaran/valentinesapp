import React, { useState } from 'react'
import { useNavigate } from 'react-router' 
import letter from '../../../public/image/lettera.json'
import Lottie from 'react-lottie';

function Home() {

  // const [inputValue, setInputValue] = useState('');

  // const handleChange = (event) => {
  //   setInputValue(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault(); // Prevent form submission from reloading the page
  //   setName(inputValue); // Update context with input value
  //   setInputValue(''); // Optional: Clear input after setting the name
  // };

  const navigate = useNavigate();
  const [isStopped, setIsStopped] = useState(false);
  
  const handleClick = () => {
    navigate('love');
  }


  const defaultOptions = {
    loop: false,
    autoplay: true,
    animationData: letter,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  return (
    <div className='text-3xl text-white'>

              <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
        <h1 className='w-[80%]'>Hey, Looks Like We Got A Message For You</h1>
        <div className='h-[10px]' />
        {/* <img src='./image/img1.png' alt='img' className='h-[200px] rounded-lg border-2 border-white' /> */}
        <div onClick={handleClick}>
          <Lottie 
          options={defaultOptions}
          isStopped={isStopped}
          height={400}
          width={400}
        />
        </div>

        <h3 className='text-[18px]'>Click on the letter to begin</h3>

        {/* <button type="button" className="mt-5 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={handleClick}>Preview</button> */}
    </div>
  )
}

export default Home