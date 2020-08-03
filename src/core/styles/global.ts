import { createGlobalStyle } from 'styled-components'

import { normalize } from 'core/styles/normalize'

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  
  * { 
    box-sizing: border-box;
  }
  
  html, body, #root {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    font-family: 'Roboto', sans-serif;
  }
  
  .rc-pagination {
    display: flex;
    flex-wrap: wrap;
    width: fit-content;
    list-style: none;
    padding: 0;
    max-height: 38px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    margin: 0;
    font-size: 14px;
            
    button {
      background: transparent;
      border: none;
      width: 100%;
      cursor: pointer;
      text-align: center;
      height: 100%;
    }
  }
  
  .rc-pagination-item-active {
    color: white;
    background-color: rgb(238,92,85);
  }
  
  .rc-pagination-item-active:hover {
    color: black;
    background-color: white;
  }
  
  .rc-pagination-item:hover, 
  .rc-pagination-jump-next:not(.rc-pagination-disabled):hover, 
  .rc-pagination-jump-prev:not(.rc-pagination-disabled):hover, 
  .rc-pagination-prev:not(.rc-pagination-disabled) button:hover, 
  .rc-pagination-next:not(.rc-pagination-disabled) button:hover {
    color: white;
    background-color: rgb(238,92,85);
  }
  
  .rc-pagination-item {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 38px;
    width: 38px;
    border-radius: 2px;
    outline: 0;
    cursor: pointer;
    user-select: none;
    margin-right: 4px;
  }
  
  .rc-pagination-jump-prev button:after, .rc-pagination-jump-next button:after {
    display: block;
    content: '•••';
}

  .rc-pagination-jump-next, .rc-pagination-jump-prev {
    width: 38px;
    border-radius: 2px;
  }

  .rc-pagination-prev button, .rc-pagination-next button {
    padding-bottom: 5px;
    width: 38px;
    height: 38px;
    border-radius: 2px;
  }
 
  .rc-pagination-prev button:after {
    content: '‹';
    display: block;
  }
    
  .rc-pagination-next button:after {
    content: '›';
    display: block;
  }
`
