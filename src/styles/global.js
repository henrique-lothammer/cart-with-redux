import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #fafafa;
    color: #000;
    font-size: 1.4rem;
    -webkit-font-smoothing: antialiased
  }

  button {
    cursor: pointer;
    padding: 7px 10px;
    background: #000;
    color: #FFF;
    border: none;
    border-radius: 5px;
  }

  .container{
    width: 90%;
    max-width: 1000px;
    margin: auto;
    display: flex;
    padding: 30px 0;
  }

  section{
    flex: 1;
    &:first-child{
      max-width: 320px;
      margin-right: 100px;
    }
  }

  h1{
    margin-bottom: 10px;
  }

  ul{
    padding-top: 7px;
    li{
      margin-bottom: 10px;
      display: flex;
      justify-content: space-between;
    }
  }

  table{
    width: 100%;
    text-align: left;

    td{
      padding: 5px 3px;
    }
    .empty-cart-text{
      text-align:center;
      padding: 20px 0;
    }
    .align-right{
      text-align: right;
    }
  }
`;
