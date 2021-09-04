import styled from 'styled-components';


type HeroStyleProps = {
    bg : string
}

export const HeroContainer = styled.section<HeroStyleProps>`
    background-image: url(${props => props.bg});
    background-size: cover;
    background-position : center center;
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color : #fff;
    position: relative;
    &:after {
        content: '';
        height: 100%;
        width: 100%;
        background : rgba(0,0,0,.6);
        position : absolute;
    }
    h2 {
        position: relative;
        z-index: 999;
        font-size: 50px;
        text-transform: uppercase;
    }
`;
