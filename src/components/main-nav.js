import React from 'react';
import styled from 'styled-components';

const MainNav = () => {
    return (
        <NavWrapper>
            <NavLogo>Logo</NavLogo>
            <NavTitle>
                <h1>Daniel.Noonan Photography</h1>
            </NavTitle>
            <NavItemsWrapper>
                <NavItems>
                    <li>
                        <a>HOME</a>
                    </li>
                    <li>
                        <a>ABOUT ME</a>
                    </li>
                    <li>
                        <a>CONTACT</a>
                    </li>
                    <li>
                        <a>CLIENT GALLERIES</a>
                    </li>
                </NavItems>
            </NavItemsWrapper>
        </NavWrapper>
    )
}

export default MainNav;

//styled components
const NavWrapper = styled.div`
// border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    background: black;
    align-items: center;
    min-height: 100px;
    border-bottom: 3px solid white;
`

const NavLogo = styled.div`
// border: 1px solid black;
    width: 75px;
    height: 75px;
    cursor: pointer;
    background-color: red;
`

const NavTitle = styled.div`
// border: 1px solid black;

h1 {
        cursor: pointer;
        color: white;
        text-align: center;
        margin: 0;
    }
`

const NavItemsWrapper = styled.nav`
// border: 1px solid black;
`

const NavItems = styled.ul`
// border: 1px solid black;
    display: flex;
    list-style: none;
    margin: 0;

    li {
// border: 1px solid black;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        margin-left: 10px;
        margin-bottom: 0;

        a {
            &:hover {
                border-bottom: 3px solid #524763;
            }
            text-decoration: none;
            color: white;
            cursor: pointer;
        }
    }
`
