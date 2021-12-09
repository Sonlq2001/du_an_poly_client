import React, { useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';

import CategoryControl from './../components/CategoryControl/CategoryControl';
import { getProductMajor } from './../redux/category.slice';
import ProductMajor from '../components/productMajor/ProductMajor';
import { PendingSearch } from './CategoryScreen.styles';
import Loading from 'components/Loading/Loading';

const CategoryScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const getData = useCallback(() => {
    dispatch(getProductMajor(id));
  }, [dispatch, id]);
  useEffect(() => {
    getData();
  }, [dispatch, getData]);
  const { loading } = useSelector((state) => state.category);

  return (
    <>
      <Breadcrumb position="Chuyên ngành" />
      <CategoryControl />
      <div className="container">
        {loading ? (
          <PendingSearch>
            <div className="group-pending">
              <Loading nowrap={false} />
            </div>
          </PendingSearch>
        ) : (
          <ProductMajor />
        
        )}
      </div>
    </>
  );
};

export default CategoryScreen;
