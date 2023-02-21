import * as React from 'react';
import './style.css';
import clapSrc from '../../Assets/Icons/clapping.svg';
import heartSrc from '../../Assets/Icons/heart-black.svg';
import heartLikedSrc from '../../Assets/Icons/heart-red.svg';
import clappedSrc from '../../Assets/Icons/clapped.svg';

import { UPDATE_BLOG_DATA } from '../../Constants/apiEndPoints';
import { getFormattedDateFromUtcDate } from '../../utils/common';
import makeRequest from '../../utils/makeRequest';

const Card = ({ blogData }) => {
  // const imageSrc = require(`../../Assets/Images/${props.image}`);
  const [isLiked, setIsLiked] = React.useState(blogData.liked);
  const [isClapped, setIsClapped] = React.useState(true);
  const [clapCount, setClapCount] = React.useState(blogData.claps);
  const [error, setError] = React.useState();

  const handleLike = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(blogData.id), {
        data: { liked: !isLiked },
      });
      setIsLiked(!isLiked);
    }
    catch (e) {
      setError(e.message);
    }
  };

  const handleClapCount = async () => {
    try {
      await makeRequest(UPDATE_BLOG_DATA(blogData.id), {
        data: { claps: clapCount + 1 }
      });
      setClapCount(clapCount + 1);
    }

    catch (e) {
      setError(e.message);
    }
  };

  const handleClap = () => {
    setIsClapped(!isClapped);
  }

  return (
    <>
      <div className='card'>
        <div className='image'>
          <img src={blogData.image} alt='abstract' />
        </div>
        <div className='description-section'>
          <div>
            <div className='date-time'>
              <p>{getFormattedDateFromUtcDate(blogData.date)}</p>
              <p>{blogData.reading_time}</p>
            </div>

            <p className='heading'>{blogData.title}</p>
            <p className='meta-data'>{blogData.description}</p>
          </div>

          <div className='footer'>
            <center><hr></hr></center>
            <div className='reaction'>
              <div className='clap'>
                <img src={isClapped ? clapSrc : clappedSrc} alt='clapIcon' onClick={() => {
                  handleClap(); handleClapCount()
                }} />
                <p data-testid='clap-counter'>{clapCount}</p>
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