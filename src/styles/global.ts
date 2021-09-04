import {createGlobalStyle} from 'styled-components';

export const Global = createGlobalStyle`

html, body {background: black};
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: sans-serif;
        list-style: none;
    }
    button {
        border: 0;
        cursor: pointer;
    }
    .container {
        max-width:  1300px;
        margin: auto;
    }
    .paginate {
        display: flex;
        margin: 20px 0;
        justify-content: center;
        align-items: center;
        &-count {
            color : #9a2dc2;
            margin: 0 20px;
        }
        button {
            width: 50px;
            height: 50px;
            border-radius: 50%;
            display: flex;
            background: #fff;
            align-items: center;
            justify-content: center;
            background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69yQtmGUV3yhBh6gN7Xk5XADPavN7fUleuA&usqp=CAU') ;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;
            &:first-child{
                transform: rotate(180deg);
            }
        }
        
    }
`;
