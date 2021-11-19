import React,{useEffect} from "react";
import Pagination from "./Pagination";
import {Product}  from "./style" 
import {Link}  from "react-router-dom"
import { useSelector, useDispatch } from "react-redux";
import { convertData } from "../redux/profile.slice";
const ProductUnactive = ()=>{
    const dispatch = useDispatch()
    const {productUnactive}  = useSelector(state=>state.productProfile)
    useEffect(()=>{
        dispatch(convertData())
    },[dispatch])
    const str = 'Website xây dựng bán hàng toàn quốc';

    return (
        <>
        { productUnactive && productUnactive.length> 0 ?
         <> 
        <Product>
              <div className="productItem ">
                <div className="productImage">
                  <div className="overlay"> </div>
                  <img
                    src="https://i.pinimg.com/564x/25/99/9a/25999ad05b6a91e4a905a532b965c93c.jpg"
                    alt=""
                  />
                </div>
                <div className="contenPro">
                  <p className="title">{str.slice(0, 20) + ' ...'}</p>
                </div>
              </div>
              <div className="productItem ">
                <div className="productImage">
                  <div className="overlay"> </div>
                  <img
                    src="https://wiki.matbao.net/wp-content/uploads/2019/09/iframe-la-gi.png"
                    alt=""
                  />
                </div>
                <div className="contenPro">
                  <p className="title">Ứng dụng phầm mềm </p>
                </div>
              </div>
              <div className="productItem ">
                <div className="productImage">
                  <div className="overlay"> </div>
                  <img
                    src="https://dsgc.edu.vn/wp-content/uploads/2019/08/123.jpg"
                    alt=""
                  />
                </div>
                <div className="contenPro">
                  <p className="title">Thiết kế đồ họa </p>
                </div>
              </div>
              <div className="productItem ">
                <div className="productImage">
                  <div className="overlay"> </div>
                  <Link to="/product/1">
                    <img
                      src="https://i.pinimg.com/originals/de/91/27/de91277cf048a4954346d2ab353291a9.png"
                      alt=""
                    />
                  </Link>
                </div>
                <div className="contenPro">
                  <p className="title">
                    <Link to="/product/1"> {str.slice(0, 20) + ' ...'} </Link>
                  </p>
                </div>
              </div>
            </Product>
            <Pagination />
        </>
        : <div className="messenger"> Chưa có sản phẩm nào   !! </div>
        }
        </>
    )
}
export default  ProductUnactive