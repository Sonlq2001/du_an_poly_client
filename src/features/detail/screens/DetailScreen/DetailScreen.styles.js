import styled from 'styled-components';

export const WrapDetail = styled.div`
  padding-top: 5rem;
  margin-bottom: 10rem;
  .image-gallery {
    height: 48rem;
    width: 100%;
    object-fit: cover;
    border-radius: 3px;
    border: 1px solid var(--eee-color);
  }
  .current-slide {
    height: 8rem;
    object-fit: cover;
    border-radius: 5px;
  }
  .slick-dots {
    position: relative;
    top: 5px;
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
  .messenger{
    display: flex;
    justify-content: center;
    font-size: 1.5rem;
    font-weight: 500;
    color: var(--ee-color);
  }
`;

export const ListCurrentImg = styled.div`
  & + & {
    margin-left: 2rem;
  }

  img {
    width: 100%;
    height: 100%;
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
  font-size: 1.3rem;
  color: var(--txt-color);
  line-height: 2.5rem;
  margin-top: 2.5rem;
  text-align: justify;
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
  margin-top: 4rem;
  margin-right: 7rem;
`;
