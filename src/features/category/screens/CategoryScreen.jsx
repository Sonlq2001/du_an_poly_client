import React, {useState, useEffect, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Loading from 'components/Loading/Loading';
import Breadcrumb from 'components/Breadcrumb/Breadcrumb';

import CategoryControl from './../components/CategoryControl/CategoryControl';
import { getProductMajor } from './../redux/category.slice';
import ProductMajor from '../components/productMajor/ProductMajor';

const CategoryScreen = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [nameCategory,setnameCategory] = useState(null)
  const getData = useCallback(()=>{
    dispatch(getProductMajor(id));
  },[dispatch,id])
  useEffect(() => {
    getData()
  }, [dispatch,getData]);
  const { loading } = useSelector((state) => state.category);
  if (loading && loading) {
    return <Loading />;
  }
  return (
    <>
      <Breadcrumb position="Chuyên ngành" />
      <CategoryControl setnameCategory={setnameCategory} />
      <div className="container">
        <ProductMajor />
      </div>
    </>
  );
};

export default CategoryScreen;
