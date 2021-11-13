import styled from 'styled-components';

export const GroupShare = styled.div`
  display: flex;
  margin-top: 2.5rem;
  .button-social {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    font-size: 2.5rem;
    padding: 5px;
    border-radius: 5px;
  }

  .button-social + .button-social {
    margin-left: 1.5rem;
  }

  .share-facebook {
    color: #4267b2;
  }

  .share-twitter {
    color: #1da1f2;
  }

  .share-instagram {
    color: #e1306c;
  }

  .share-linkedin {
    color: #2867b2;
  }
`;
