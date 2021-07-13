import React from 'react'
import styled from 'styled-components'
import ViewersSrc1 from 'images/viewers-disney.png'
import ViewersSrc2 from 'images/viewers-marvel.png'
import ViewersSrc3 from 'images/viewers-national.png'
import ViewersSrc4 from 'images/viewers-pixar.png'
import ViewersSrc5 from 'images/viewers-starwars.png'


function Viewers() {
    return (
        <Container>
            <Wrap>
                <img src={ViewersSrc1} alt="" />
            </Wrap>
            <Wrap>
                <img src={ViewersSrc2} alt="" />
            </Wrap>
            <Wrap>
                <img src={ViewersSrc3} alt="" />
            </Wrap>
            <Wrap>
                <img src={ViewersSrc4} alt="" />
            </Wrap>
            <Wrap>
                <img src={ViewersSrc5} alt="" />
            </Wrap>
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px;
    padding: 30px 0 26px;
    display: grid;
    grid-gap: 25px;
    grid-template-columns: repeat(5 , minmax(0 , 1fr)) ;
`

const Wrap = styled.div`
    border: 3px solid rgb(249, 249, 249 ,0.1);
    border-radius: 10px;
    cursor: pointer;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px ,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    &:hover{
        box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px ,
        rgb(0 0 0 / 72%) 0px 30px 22px -10px;
        transform: scale(1.05);
        border-color: rgba(249 , 249 ,249 , 0.5);
    }
`