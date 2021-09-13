import React from 'react';
import { Link } from 'react-router-dom';

import {
  MasonryLayout,
  MasonryBox,
  MasonryHeader,
  MasonryContent,
} from './CategoryScreen.styles';

const CategoryScreen = () => {
  const array = [
    {
      path: 'https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029__480.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2015/11/19/21/14/glasses-1052023__480.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2016/02/16/21/07/books-1204029__480.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2016/03/09/09/14/books-1245690__480.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2016/11/14/03/16/book-1822474__340.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2016/11/14/03/16/book-1822474__340.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2018/05/10/08/59/book-3387071__340.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2015/07/23/14/58/child-857021__340.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2016/11/29/04/45/aged-1867381__340.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2018/03/19/18/20/tea-time-3240766__340.jpg',
    },
  ];
  return (
    <div className="container">
      <div>control header</div>

      <MasonryLayout>
        {array.map((item, index) => {
          console.log(item);
          return (
            <MasonryBox className="item" key={index}>
              <MasonryHeader>
                <img src={item.path} alt="" />
              </MasonryHeader>
              <MasonryContent>
                <Link to="/" className="content-title">
                  name project
                </Link>
                <div className="action">like</div>
              </MasonryContent>
            </MasonryBox>
          );
        })}
      </MasonryLayout>
    </div>
  );
};

export default CategoryScreen;
