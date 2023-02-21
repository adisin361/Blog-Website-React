import * as React from 'react';
import './style.css';

import Card from '../Card';
import { GET_BLOG_DATA } from '../../Constants/apiEndPoints';
import makeRequest from '../../utils/makeRequest';

const Container = () => {

  const [blogData, setBlogData] = React.useState();
  const [error, setError] = React.useState();

  React.useEffect(() => {
    makeRequest(GET_BLOG_DATA)
      .then((response) => {
        setBlogData(response);
      })
      .catch((e) => {
        setError(e.message);
      });
  }, []);

  if (error) {
    return (
      <div className='blogDataError'>
        <p>{error}</p>
      </div>
    );
  }

  return blogData ? (
    <>
      <div className='container'>
        {blogData.map((eachBlogData) =>
        (
          <Card key={eachBlogData.id} blogData={eachBlogData} />
        ))}
      </div>
    </>
  ) : (
    <div className='blogDataLoader'>
      <p>Loading...</p>
    </div>
  );
};

export default Container;