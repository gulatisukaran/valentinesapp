import React, { useState, useMemo, useRef, useEffect, useContext } from 'react'
import Lottie from 'react-lottie';
import { useNavigate, useParams } from 'react-router';
import TinderCard from 'react-tinder-card';
import droppinghearts from '../../../public/image/droppinghearts.json'

const db = [
  {
    name: 'Would you be my valentine',
    url: './image/img5.png',
    textStyle: 'card5',
    btn: "Ummmmm!"
  },
  {
    name: 'I want to make this into something deeper',
    url: './image/img4.png',
    btn: "Are You...?"
  },
  {
    name: 'Whenever you are around, you make me feel special',
    url: './image/img3.png',
    btn: "Wait a second!"
  },
  {
    name: 'You are beautiful',
    url: '../image/img2.png',
    btn: "What's This?"
  },
  {
    name: 'Today I gotta tell the truth',
    url: '../image/img1.png',
    btn: "Ayein ⁉️"
  }
];

function Advanced () {
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const [myState, setMyState] = useState(0);
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: droppinghearts,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  const { state } = useParams();

  useEffect(() => {
    if(state) {
      setMyState(1);
    }
  }, [state]);

  const currentIndexRef = useRef(currentIndex);

  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val)
    currentIndexRef.current = val
  };

  const canGoBack = currentIndex < db.length - 1

  const canSwipe = currentIndex >= 0

  // set last direction and decrease current index
  const swiped = (direction, nameToDelete, index) => {
    setLastDirection(direction)
    updateCurrentIndex(index - 1)
  }

  const outOfFrame = (name, idx) => {
    console.log(`${name} (${idx}) left the screen!`, currentIndexRef.current)
    // handle the case in which go back is pressed before card goes outOfFrame
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    // TODO: when quickly swipe and restore multiple times the same card,
  }

  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
    }
  }

  const handleNoClick = () => {
    navigate('../nopage', {replace: true});
  }

  const handleYesClick = () => {
    navigate('../yespage', {replace: true});
  }

  const handleLeftClick = () => {
    swipe('left');
  }

  const handleRightClick = () => {
    swipe('right');
  }

  // increase current index and show card
  const goBack = async () => {
    if (!canGoBack) return
    const newIndex = currentIndex + 1
    updateCurrentIndex(newIndex)
    await childRefs[newIndex].current.restoreCard()
  }

  return (
    <div>
        <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />

      { db[currentIndex] ? <>
        <h1 className='text-[32px] mb-4'>Heyyyo, Just Listen </h1>
        <div className='cardContainer'>
        {db.map((character, index) => (
          <TinderCard
            ref={childRefs[index]}
            className='swipe'
            key={character.name}
            onSwipe={(dir) => swiped(dir, character.name, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div
              style={{ backgroundImage: 'url(' + character.url + ')' }}
              className='card'
            >
                <h3>{character.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div> 
      </>: <>
      <div className="fixed inset-0 z-50 flex justify-center items-center">
      <Lottie 
	      options={defaultOptions}
        height={400}
        width={400}
      />
      </div>
      <h1 className='text-[32px] mb-4 w-[80%]'>Would you be my valentine?</h1>
      <h2 className='text-[18px] w-[80%]'>I'll wait for your reply ❤️</h2>
      </>
      }
      
      { 
        db[currentIndex] ?
        <div className='buttons'>
          <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={handleLeftClick}>{db[currentIndex] ? db[currentIndex].btn : "I'm Sorry, It's a No"}</button>
          {/* <button style={{ backgroundColor: !canSwipe && '#c3c4d3' }} onClick={handleRightClick}>{!myState ? "Next 👉" : "I say Yes ❤️"}</button> */}
          <h2 className='text-[12px]'>Click the button or Swipe :)</h2>

        </div> : 
        <div className='buttons'>
          {/* <button onClick={handleNoClick}>{"It's a No 💔"}</button>
          <button onClick={handleYesClick}>{"I say Yes ❤️"}</button> */}
        </div>
      }
    </div>
  )
}


export default Advanced