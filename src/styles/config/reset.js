export const ResetCss = () => {
  return /*CSS*/ `
    *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
    }
    
    html {
      font-size: 62.5%;
      font-family: 'Inter', sans-serif;
      line-height: 1.6rem;
      color: var(--txt-color);
    }

    a{
      text-decoration: none;
      color: var(--txt-color);
    }

    ul{
      list-style: none;
    }

    button, input,textarea{
      outline: none;
    }

    button{
      cursor: pointer;
      outline: none;
      border: none;
    }

    img{
      max-width: 100%;
      height: auto;
      vertical-align: middle;
    }
    .error-msg{
      color var(--red-color);
      font-size: 1.25rem;
      margin-top: 5px;
    }
    .message-alert{
      font-size: 1.3rem;
    }
  `;
};
