import styled from 'styled-components';

export const CardContainer = styled.div`
       display: inline-block;
        width: 23%;
        margin: 1% ;
        background-color: #fff;
        vertical-align: top;
        @media screen and (max-width : 768px) {
            width: 48%;
        }
        @media screen and (max-width : 468px) {
            width: 98%;
            margin: 1% auto;
        }   

   .card {
        border:  1px solid #1d2127;
        padding: 5px;
        &-body {
            padding: 10px;
            color : #1d2127;
            h2 {
                color : #9a2dc2;
                margin: 10px 0;
            }

        }
        &-image {
            img {
                width: 100%;
                object-fit: cover;
            }
        }
        &-description {
            margin: 10px 0;
        }
        &-footer {
            padding: 10px 0;
            border-top: 1px solid #1d2127 ;
            display: flex;
            justify-content: center;
            align-items : center;
            a {
                padding: 10px;
                width: 200px;
                background-color: #9a2dc2;
                color: #fff;
                text-align : center;
                text-transform: uppercase;
                text-decoration: none;

            }
        }
    }

`;
