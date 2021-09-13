import styled from 'styled-components';

export const MasonryLayout = styled.div`
  margin-top: 4rem;
  column-count: 4;
  column-gap: 1.5rem;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
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
`;

export const MasonryHeader = styled.div`
  position: relative;

  &::after {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const MasonryContent = styled.div`
  padding: 1.5rem;

  .content-title {
    color: var(--txt-color);
    font-size: 1.4rem;
    font-weight: 500;
  }

  .content-title::first-letter {
    text-transform: uppercase;
  }
`;
