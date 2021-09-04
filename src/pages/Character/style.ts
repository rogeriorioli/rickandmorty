import styled from 'styled-components';

export const PageCharacter = styled.div`
    color : #fff;
    .details {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -120px;
        position: relative;
        z-index: 9999;
        img {
            border-radius: 50%;
            border : 10px solid #fff;
        }
    }
    .content {
        width: 100%;;
        p {
            font-size: 24px;
            margin: 10px 0;
            text-align : center
        }
    } 
    .button {
            width: 50px;
            height: 50px;
            margin: 50px 0;
            border-radius: 50%;
            display: flex;
            background: #fff;
            align-items: center;
            justify-content: center;
            background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS69yQtmGUV3yhBh6gN7Xk5XADPavN7fUleuA&usqp=CAU') ;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center center;  
            position: absolute;
            z-index : 99999999 ;
            transform: rotate(180deg);
        }  
`;
