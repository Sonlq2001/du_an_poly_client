import React, { useEffect, useCallback } from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { FiBookmark } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';

import {
  MasonryLayout,
  MasonryBox,
  MasonryHeader,
  MasonryContent,
  MasonryAction,
  MasonryActionItem,
} from './CategoryScreen.styles';
import Loading from 'components/Loading/Loading';

import CategoryControl from './../components/CategoryControl/CategoryControl';
import { getProducts } from './../redux/category.slice';
import { PRODUCT_STATUS_KEY } from './../constants/category.key';
import { DETAIL_PATHS } from './../../detail/constants/detail.paths';
import ProductMajor from '../components/productMajor/ProductMajor';

const CategoryScreen = () => {
  const { path } = useRouteMatch();
  const dispatch = useDispatch();

  const fetchData = useCallback(() => {
    dispatch(getProducts());
  }, [dispatch]);
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const { isLoadingProducts, listProduct } = useSelector((state) => ({
    isLoadingProducts: state.category.isLoadingProducts,
    listProduct: state.category.listProduct?.filter(
      (product) => product.status === PRODUCT_STATUS_KEY.DONE
    ),
  }));
  if (isLoadingProducts) {
    return <Loading />;
  }

  return (
    <>
      <CategoryControl />
      <div className="container">
        <Switch>
          <Route exact path={path}>
            <MasonryLayout>
              {listProduct && listProduct.length > 0
                ? listProduct.map((item) => {
                    return (
                      <MasonryBox className="item" key={item.id}>
                        <MasonryHeader>
                          <img src={item?.image} alt="" />
                        </MasonryHeader>
                        <MasonryContent>
                          <Link
                            to={DETAIL_PATHS.DETAIL_PRODUCT.replace(
                              ':id',
                              item?.id
                            )}
                            className="content-title"
                          >
                            {item?.name}
                          </Link>
                          <p className="content-object">
                            Môn học: {item?.subject?.name}
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
                  })
                : ''}
            </MasonryLayout>
          </Route>
          <Route path={`${path}/:path/:id`}>
                  <ProductMajor/>
          </Route>
        </Switch>
      </div>
    </>
  );
};

export default CategoryScreen;
