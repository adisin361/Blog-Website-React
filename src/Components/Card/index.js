import * as React from 'react';
import './style.css';
import clapSrc from '../../Assets/Icons/clapping.svg';
import heartSrc from '../../Assets/Icons/heart-black.svg';
import heartLikedSrc from '../../Assets/Icons/heart-red.svg';
const Card = (props) => {
  const imageSrc = require(`../../Assets/Images/${props.image}`);
  const [isLiked, setIsLiked] = React.useState(!props.liked);

  const handleLike = () => {
    setIsLiked(!isLiked);
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
                <img src={clapSrc} alt='clapIcon' />
                <p>{props.claps}</p>
              </div>
              {isLiked ? <img src={heartSrc} alt='heartIcon' onClick={handleLike} /> :
                <img src={heartLikedSrc} alt='heartLikedIcon' onClick={handleLike} />}

            </div>
          </div>

        </div>
      </div>
    </>

  );
};

export default Card;