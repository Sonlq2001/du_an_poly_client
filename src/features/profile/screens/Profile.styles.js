import styled from 'styled-components';

export const HeaderProfile = styled.div`
  max-width: 50rem;
  margin: 0 auto;
  display: flex;
  .profile-left {
    margin-right: 5rem;
  }
  .profile-avatar {
    width: 15rem;
    height: 15rem;
    object-fit: cover;
    border-radius: 50%;
  }
`;
export const GroupProfile = styled.div`
  display: flex;
  font-size: 1.5rem;
  & + & {
    margin-top: 1rem;
  }
  .profile-label {
    display: block;
    width: 10rem;
  }
`;
export const GroupTabsProfile = styled.div`
  margin: 6rem 0 4rem 0;
  .btn-tab {
    background-color: transparent;
    padding-bottom: 5px;
    font-size: 1.5rem;
  }
  .btn-tab + .btn-tab {
    margin-left: 2rem;
  }
  .btn-tab.active {
    color: var(--first-color);
    border-bottom: 2px solid var(--first-color);
  }
`;
export const GroupContent = styled.div`
  margin-top: 3rem;
  .no-result {
    width: 100%;
  }
`;
export const BoxProduct = styled.div`
  & {
    box-shadow: 0 0 2rem var(--ddd-color);
    border-radius: 5px;
  }
  .product-content {
    padding: 6px 1rem;
  }
  .product-img {
    position: relative;
    width: 100%;
    height: 15rem;
    overflow: hidden;
    border-radius: 5px;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: 0.3s linear;
  }
  .box-content:hover img {
    transform: scale(1.1);
  }
  .box-content:hover .product-name {
    color: var(--first-color);
  }
  .product-name {
    font-size: 1.4rem;
    margin-top: 1rem;
    line-height: 2rem;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
`;
