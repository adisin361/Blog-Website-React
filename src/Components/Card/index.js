import * as React from 'react';
import './style.css';
import clapSrc from '../../Assets/Icons/clapping.svg';
import heartSrc from '../../Assets/Icons/heart-black.svg';
import heartLikedSrc from '../../Assets/Icons/heart-red.svg';
import clappedSrc from '../../Assets/Icons/clapped.svg';
const Card = (props) => {
  const imageSrc = require(`../../Assets/Images/${props.image}`);
  const [isLiked, setIsLiked] = React.useState(props.liked);
  const [isClapped, setIsClapped] = React.useState(true);
  const handleLike = () => {
    setIsLiked(!isLiked);
  }

  const handleClap = () => {
    setIsClapped(!isClapped);
  }

  return (
    <>
      <div className='card'>
        <div className='image'>
          <img src={imageSrc} alt='abstract' />
        </div>
        <div className='description-section'>
          <div>
            <div className='date-time'>
              <p>{props.date}</p>
              <p>{props.readingTime}</p>
            </div>

            <p className='heading'>{props.title}</p>
            <p className='meta-data'>{props.description}</p>
          </div>

          <div className='footer'>
            <center><hr></hr></center>
            <div className='reaction'>
              <div className='clap'>
                <img src={isClapped ? clapSrc : clappedSrc} alt='clapIcon' onClick={handleClap} />
                <p>{isClapped ? props.claps : props.claps + 1}</p>
              </div>
              <img src={isLiked ? heartLikedSrc : heartSrc} alt='heartIcon' onClick={handleLike} />
            </div>
          </div>

        </div>
      </div>
    </>

  );
};

export default Card;