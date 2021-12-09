import styled from 'styled-components';

export const MasonryLayout = styled.div`
  margin:1rem 0rem;
  column-count: 4;
  column-gap: 1.5rem;
  @media (max-width: 991.98px) {
    column-count: 3;
  }
  @media (max-width: 767.98px) {
    column-count: 2;
  }
  @media (max-width: 575.98px) {
    column-count: 2;
  }
`;

export const MasonryHeader = styled.div`
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: ease-in-out 0.5s;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.2);
    transition: ease-in-out 0.3s;
  }
`;

export const MasonryBox = styled.div`
  break-inside: avoid;
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  box-shadow: 0 3px 8px var(--eee-color);
  overflow: hidden;
  border-radius: 1rem;
  font-size: 1.4rem;
  &:hover ${MasonryHeader}::after {
    opacity: 0;
  }

  &:hover ${MasonryHeader} > img {
    transform: scale(1.03);
  }
`;

export const MasonryContent = styled.div`
  padding: 1.5rem;

  .content-title {
    color: var(--txt-color);
    font-size: 1.4rem;
    font-weight: 500;
  }

  .content-title:hover {
    color: var(--first-color);
  }
  .content-title::first-letter {
    text-transform: uppercase;
  }

  .content-object {
    font-size: 1.3rem;
    margin-top: 1rem;
  }
`;

export const MasonryAction = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 1.1rem;
`;

export const MasonryActionItem = styled.div`
  color: var(--aaa-color);
  display: flex;
  align-items: center;

  & + & {
    margin-left: 1rem;
  }

  .icon-masonry {
    margin-right: 5px;
    font-size: 1.4rem;
  }

  .icon-bookmark {
    cursor: pointer;
    font-size: 1.4rem;
  }

  .icon-bookmark:hover {
    color: var(--txt-color);
    transition: ease-in-out 0.3s;
  }
`;
export const PendingSearch = styled.div`
  min-height: 100vh;
  background-color: #9e404026;
  border-radius: 10px;
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