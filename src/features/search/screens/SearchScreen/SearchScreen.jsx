import React, { memo, useEffect } from 'react';
import { FiBookmark } from 'react-icons/fi';
import { FaRegComment } from 'react-icons/fa';
import { AiOutlineStar } from 'react-icons/ai';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import {
  MasonryLayout,
  MasonryBox,
  MasonryHeader,
  MasonryContent,
  MasonryAction,
  MasonryActionItem,
} from 'features/category/screens/CategoryScreen.styles';
import {
  ContentSearch,
  SearchHeader,
  GroupNoResult,
  PendingSearch,
} from './SearchScreen.styles';
import { useQuery } from 'helpers/convert/use-query';
import { DETAIL_PATHS } from 'features/detail/constants/detail.paths';
import { searchData } from 'features/home/redux/home.slice';
import NoResult from 'assets/images/no-result.png';
import Loading from 'components/Loading/Loading';

const SearchScreen = () => {
  const dispatch = useDispatch();
  const query = useQuery();
  const keyword = query.get('keyword');

  useEffect(() => {
    dispatch(
      searchData({
        text: keyword,
      })
    );
  }, [keyword, dispatch]);

  const { dataSearch, isDataSearchLoading } = useSelector((state) => ({
    dataSearch: state.home.dataSearch,
    isDataSearchLoading: state.home.isDataSearchLoading,
  }));

  return (
    <div className="container">
      <SearchHeader>
        <div className="content-search">
          <span className="icon-result">
            <HiOutlineLightBulb />
          </span>
          Kết quả tìm kiếm cho từ khoá '
          <span className="keyword">{keyword || ''}</span>'
        </div>
      </SearchHeader>

      {isDataSearchLoading ? (
        <PendingSearch>
          <div className="group-pending">
            <Loading nowrap={false} />
            <div className="text-pending">Đang tìm kiếm ...</div>
          </div>
        </PendingSearch>
      ) : (
        <ContentSearch>
          {dataSearch && dataSearch.length > 0 ? (
            <MasonryLayout>
              {dataSearch.map((row) => (
                <MasonryBox className="item" key={row?.id}>
                  <MasonryHeader>
                    <img src={row?.image} alt="" />
                  </MasonryHeader>
                  <MasonryContent>
                    <Link
                      to={DETAIL_PATHS.DETAIL_PRODUCT.replace(':id', row?.id)}
                      className="content-title"
                    >
                      {row?.name}
                    </Link>
                    <p className="content-object">
                      Môn học: {row?.subject?.name}
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
              ))}
            </MasonryLayout>
          ) : (
            <GroupNoResult>
              <div className="body-no-result">
                <img src={NoResult} alt="" className="img-no-result" />
                <div className="box-no-result">
                  <div className="label-no-result">
                    Không tìm thấy kết quả nào
                  </div>
                  <div className="des-no-result">
                    Hãy thử sử dụng các từ khóa chung chung hơn
                  </div>
                </div>
              </div>
            </GroupNoResult>
          )}
        </ContentSearch>
      )}
    </div>
  );
};

export default memo(SearchScreen);
