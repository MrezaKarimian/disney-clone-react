/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilm, faHome, faPlus, faSearch, faStar, faVideo,  } from '@fortawesome/free-solid-svg-icons';
import LogoSrc from "images/logo.svg"

function Header() {
    return (
        <Nav>
            <Logo src={LogoSrc} alt=""/>
            <NavMenu>
                <a href="">
                    <FontAwesomeIcon style={{height: "20px"}} icon={ faHome }/>
                    <span>HOME</span>
                </a>
                <a href="">
                    <FontAwesomeIcon style={{height: "20px"}} icon={ faSearch }/>
                    <span>SEARCH</span>
                </a>
                <a href="">
                    <FontAwesomeIcon style={{height: "20px"}} icon={ faPlus }/>
                    <span>WATCHLIST</span>
                </a>
                <a href="">
                    <FontAwesomeIcon style={{height: "20px"}} icon={ faStar }/>
                    <span>ORIGINALS</span>
                </a>
                <a href="">
                    <FontAwesomeIcon style={{height: "20px"}} icon={ faVideo }/>
                    <span>MOVIES</span>
                </a>
                <a href="">
                    <FontAwesomeIcon style={{height: "20px"}} icon={ faFilm }/>
                    <span>SERIES</span>
                </a>

            </NavMenu>
            <UserImg/>        
        </Nav>
    )
}

export default Header



const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x: hidden;
`

const Logo = styled.img`
    width: 80px;
`

const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    a{
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        color: white;
        text-decoration: none;
        justify-content: space-between;
        span{
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            margin-left: 5px;
            &:after{
                content:"";
                height: 2px;
                background: white;
                position: absolute;
                left: 0;
                right: 0;
                bottom: -6px;
                opacity: 1;
                transform: scaleX(0);
                transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
                transform-origin: left center;
            }
        }
        &:hover{
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`
const UserImg = styled.img`
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
`