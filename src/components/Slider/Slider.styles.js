import styled from 'styled-components';

export const SliderMain = styled.div`
  overflow: hidden;
  position: relative;
`;

export const SliderItem = styled.div`
  width: 100%;
  max-height: 505px;
  position: relative;

  &::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    position: absolute;
    top: 0;
    left: 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const GroupSearch = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 2rem;
  color: var(--white-color);
  width: 60%;
  border-radius: 1rem;
  text-align: center;

  .title-search {
    font-size: 3rem;
    line-height: 3.5rem;
    font-weight: 700;
    margin-bottom: 1.5rem;
    font-family: 'Open Sans', sans-serif;
  }

  .box-search {
    position: relative;
  }

  .input-search {
    width: 100%;
    height: 6rem;
    border-radius: 5px;
    border: none;
    padding: 0 3rem 0 5rem;
    font-size: 1.5rem;
  }

  .input-search::placeholder {
    color: var(--bbb-color);
  }

  .icon-search {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    color: var(--aaa-color);
    font-size: 2.5rem;
    cursor: pointer;
    height: 100%;
    padding: 0 1rem;
    transition: ease-in-out 0.2s;
  }

  .icon-search:hover {
    color: var(--txt-color);
  }
`;

export const BoxTrending = styled.div`
  margin-top: 1.3rem;
  font-size: 1.4rem;
  color: var(--ddd-color);

  .txt-popular {
    display: inline-block;
    margin-right: 1rem;
  }
`;
