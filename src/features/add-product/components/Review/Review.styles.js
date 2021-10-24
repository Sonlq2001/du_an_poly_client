import styled from 'styled-components';
export const OverLay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  background-color: #6e6c6c36;
  z-index: 10;
  opacity: 0;
  visibility: hidden;
  &.active {
    opacity: 1;
    visibility: visible;
  }
`;
export const Content = styled.div`
  background-color: var(--white-color);
  padding: 4rem;
  position: absolute;
  max-width: 70%;
  width: 70%;
  z-index: 11;
  left: 15%;
  height: 90%;
  top: 5%;
  visibility: hidden;
  overflow-y: scroll;
  transform: translateY(-20%);
  transition: ease-in-out 0.6s;
  opacity: 0;
  ::-webkit-scrollbar {
    width: 6px;
    border-left: 1px solid #e6ecf8;
    height: 100px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--ddd-color);
    border-radius: 10px;
  }
  &.activeContent {
    visibility: visible;
    transform: translateY(0);
    opacity: 1;
  }
  /* &:hover {
    overflow-y: scroll;
  } */
  & img {
    image-rendering: pixelated;
  }
`;
export const MainReview = styled.div`
  max-width: 100%;
  overflow: hidden;
`;
export const DescriptionReview = styled.div``;
export const ImageSlice = styled.div`
  & .slick-dots li {
    width: 70px;
    height: 70px;
  }
  & .slick-dots {
    width: 85%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  & .slick-list {
    height: 370px;
    overflow: hidden;
  }
  & .slick-list img {
    width: 100%;
    height: 300px;
    image-resolution: center;
    image-rendering: pixelated;
    border-radius: 5px;
  }
`;
export const ContentReview = styled.div`
  padding-left: 2rem;
  & h1 {
    font-size: 2rem;
    line-height: 2.5rem;
    color: var(--txt-color);
  }
`;

export const TitleProject = styled.h1`
  font-size: 2rem;
  line-height: 2.5rem;
  color: var(--txt-color);
`;

export const GroupMember = styled.div`
  margin-top: 2rem;

  .list-member {
    margin: 1.5rem 0 0 2rem;
  }
  .item-member {
    display: block;
    font-size: 1.3rem;
  }
  .item-member + .item-member {
    margin-top: 1rem;
  }
`;

export const LabelProject = styled.div`
  font-size: 1.4rem;
  white-space: nowrap;
  margin-right: 1rem;
  color: var(--first-color);
  font-weight: 500;
  margin-right: 1rem;
`;

export const BoxProject = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  font-size: 1.4rem;
`;

export const GroupDetail = styled.div`
  margin-top: 6rem;
  max-width: 100%;
  width: 100%;
  overflow: hidden;
`;

// group detail
export const ListCurrentImg = styled.div`
  width: 150px;
  height: 50px;
  overflow: hidden;
  & + & {
    margin: 2rem;
  }
  img {
    height: 100%;
    width: 100%;
  }
  & .current-slide {
    max-height: 70px;
    width: 70px;
    border-radius: 5px;
    image-rendering: pixelated;
    image-resolution: center;
  }
`;
export const TitleMain = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  color: var(--txt-color);

  span {
    display: inline-block;
    margin-left: 1rem;
  }
`;

export const GroupBox = styled.div`
  &:not(:first-child) {
    margin-top: 2.5rem;
  }
`;

export const ContentPost = styled.p`
  font-size: 1.3rem;
  color: var(--txt-color);
  line-height: 2.5rem;
  margin-top: 2.5rem;
  text-align: justify;
`;

export const GroupAttach = styled.div`
  margin-top: 2.5rem;
`;

export const ItemAttach = styled.div`
  & + & {
    margin-top: 2rem;
  }
  font-size: 1.2rem;

  .title-attach {
    font-size: 1.4rem;
    font-weight: 500;
    margin-bottom: 5px;
  }
`;

export const BoxYoutube = styled.div`
  width: 100%;
  margin-top: 1rem;
  .video-youtube {
    width: 100%;
    height: 25rem;
  }
`;

// comment
