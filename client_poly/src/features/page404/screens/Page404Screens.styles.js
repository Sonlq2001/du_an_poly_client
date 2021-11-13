import styled from 'styled-components';

export const Page404 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const Page404Image = styled.div`
  .pag404 {
    width: 60rem;
  }
`;

export const Page404Content = styled.div`
  margin-top: -6rem;
  text-align: center;

  h2 {
    font-size: 2rem;
    color: var(--txt-color);
  }
  p {
    font-size: 1.4rem;
    color: var(--aaa-color);
    margin-top: 1rem;
  }

  .back-home {
    padding: 2rem;
    display: inline-block;
    margin-top: 2rem;
    border-radius: 2.5rem;
    font-size: 1.5rem;
    background-image: linear-gradient(to right, #00945a, #64df94, #00945a);
    color: var(--white-color);
    background-size: 35rem auto;
    transition: ease-in-out 0.3s;
    font-weight: 500;
  }

  .back-home:hover {
    background-size: 16rem auto;
  }
`;

export const Paga = styled.div`
  max-width: 522px;
  padding-top: 20rem;
  margin-left: 6rem;
  h2 {
    font-size: 1.8rem;
    line-height: 2rem;
    color: #f2bab9;
  }
  p {
    opacity: 0.5;
    max-width: 300px;
    font-size: 1.4rem;
    padding: 3rem;
  }
`;
