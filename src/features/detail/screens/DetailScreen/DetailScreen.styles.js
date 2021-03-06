import styled from 'styled-components';

export const ListCurrentImg = styled.div`
  overflow: hidden;
  position: relative;
  & + & {
    margin-left: 2rem;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .current-slide {
    height: 8rem;
    object-fit: cover;
    border-radius: 5px;
    border: 1px solid var(--eee-color);
  }
  @media (max-width: 767.98px) {
    .current-slide {
      height: 6rem;
    }
  }
  @media (max-width: 575.98px) {
    .current-slide {
      height: 4rem;
    }
  }
`;
export const WrapDetail = styled.div`
  margin-bottom: 10rem;
  .image-gallery {
    height: 34rem;
    width: 100%;
    object-fit: cover;
    border-radius: 3px;
    border: 1px solid var(--ddd-color);
  }
  .slick-dots {
    position: relative;
    top: 5px;
    overflow: hidden;
  }
  .slick-dots li {
    width: 100px;
  }
  .slick-next {
    right: 0;
  }
  .slick-prev {
    left: 0;
    z-index: 1;
  }
  .slick-next:before,
  .slick-prev:before {
    color: var(--bbb-color);
  }
  .messenger {
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--ddd-color);
  }
  .slick-active ${ListCurrentImg}::after {
    content: '';
    display: block;
    top: 0;
    left: 0;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
  }
  @media (max-width: 767.98px) {
    .image-gallery {
      height: 30rem;
    }
    .slick-dots li {
      width: 6rem;
    }
  }
  @media (max-width: 575.98px) {
    .image-gallery {
      height: 26rem;
    }
    .slick-dots li {
      width: 4rem;
    }
  }
`;
export const GroupContentDetail = styled.div`
  @media (max-width: 991.98px) {
    margin-top: 3rem;
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
  .group-document {
    position: sticky;
    top
    : 10rem;
  }
  .videoCho{
    background: #f4efef;
    border-radius: 5px;
    width: 16rem;
    padding: 12px 10px;
    margin-top: 1rem;
    font-size: 15px;

  }
  .videoCho:hover{
    cursor: pointer;
    background: #eab462;
  }
  @media (max-width: 991.98px) {
    .group-document {
      margin-top: 3rem;
    }
  }
`;

// group detail
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
  font-size: 1.31rem;
  color: var(--txt-color);
  line-height: 2.5rem;
  margin-top: 2.5rem;
  text-align: justify;
  & img {
    max-width: 80%;
    max-height: 80%;
    border-radius : 5px;
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
export const GroupFeedback = styled.div`
  margin: 4rem 0 7rem 0;
  @media (max-width: 991.98px) {
    margin: 4rem 0 0 0;
  }
`;
export const Video = styled.div`
  margin: 2rem 0px;
  max-width: 100%;
  height: 350px;
  overflow: hidden;
  border-radius: 10px;
  & iframe {
    border-radius: 10px !important;
  }
  &.video {
    height: auto;
  }
  video {
    border-radius: 10px;
  }
  h3 {
    margin: 1rem 0rem;
    font-size: 1.4rem;
  }
  a {
    font-weight: 450;
    color: black;
    font-size: 1.3em;
  }
  @media (max-width: 575.98px) {
    height: 25rem;
  }
`;
