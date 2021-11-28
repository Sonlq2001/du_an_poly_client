import styled from 'styled-components';

export const ContentSearch = styled.div`
  margin-bottom: 5rem;
`;
export const SearchHeader = styled.div`
  padding: 3rem 0 4rem 0;
  .content-search {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
  }
  .icon-result {
    padding-right: 1.5rem;
    font-size: 2rem;
  }
  .keyword {
    color: var(--first-color);
    font-weight: 500;
    padding: 0 3px;
  }
`;
export const GroupNoResult = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  .body-no-result {
    text-align: center;
  }
  .img-no-result {
    width: 15rem;
  }
  .box-no-result {
    font-size: 1.4rem;
  }
  .label-no-result {
    font-size: 1.6rem;
  }
  .des-no-result {
    margin-top: 1.5rem;
    color: var(--aaa-color);
  }
`;
export const PendingSearch = styled.div`
  min-height: 60vh;
  .group-pending {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .text-pending {
    margin-top: 7rem;
    font-size: 1.4rem;
    color: var(--aaa-color);
  }
`;
