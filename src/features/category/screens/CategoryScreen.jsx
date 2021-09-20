import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { FiBookmark } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import {
  MasonryLayout,
  MasonryBox,
  MasonryHeader,
  MasonryContent,
  MasonryAction,
  MasonryActionItem,
} from './CategoryScreen.styles';

import CategoryControl from './../components/CategoryControl/CategoryControl';

const CategoryScreen = () => {
  const { path } = useRouteMatch();

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
    {
      path: 'https://cdn.pixabay.com/photo/2020/01/01/18/13/train-4734126__480.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2021/07/19/15/47/lily-6478427__480.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2021/08/19/12/53/bremen-6557996__480.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2021/08/19/14/00/field-6558125__480.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2021/04/29/05/03/desert-6215514__480.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2021/04/23/19/57/yorkshire-terrier-6202621__480.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2021/09/07/09/23/building-6603394__480.jpg',
    },
    {
      path: 'https://cdn.pixabay.com/photo/2021/04/26/20/53/beachy-head-6209982__480.jpg',
    },
  ];
  return (
    <>
      <CategoryControl />
      <div className="container">
        <Switch>
          <Route exact path={path}>
            <MasonryLayout>
              {array.map((item, index) => {
                return (
                  <MasonryBox className="item" key={index}>
                    <MasonryHeader>
                      <img src={item.path} alt="" />
                    </MasonryHeader>
                    <MasonryContent>
                      <Link to="/" className="content-title">
                        name project
                      </Link>
                      <p className="content-object">
                        Môn học: Thiết kế website
                      </p>
                      <MasonryAction>
                        <MasonryActionItem>
                          <span className="icon-masonry">
                            <AiOutlineStar />
                          </span>
                          <span className="icon-masonry">
                            <AiOutlineStar />
                          </span>
                          <span>12</span>
                        </MasonryActionItem>
                        <MasonryActionItem>
                          <span className="icon-masonry">
                            <FaRegComment />
                          </span>
                          <span>15</span>
                        </MasonryActionItem>
                        <MasonryActionItem>
                          <span className="icon-bookmark">
                            <FiBookmark />
                          </span>
                        </MasonryActionItem>
                      </MasonryAction>
                    </MasonryContent>
                  </MasonryBox>
                );
              })}
            </MasonryLayout>
          </Route>
          <Route path={`${path}/:id`}>
            <MasonryBox>Hiển thị sản phẩm theo chuyên ngành</MasonryBox>
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default CategoryScreen;
