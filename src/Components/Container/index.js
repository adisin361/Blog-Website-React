import * as React from 'react';
import './style.css';

import Card from '../Card';

const Container = () => {
  const data = require('../../Assets/mockData/index.json');
  return (
    <>
      <div className='container'>
        {data && data.map(({ date, readingTime, title, description, claps, liked, image }) => (
          <div>
            <Card date={date} readingTime={readingTime} title={title} description={description} claps={claps} liked={liked} image={image} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Container;