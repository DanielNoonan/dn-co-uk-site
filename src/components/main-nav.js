import React from 'react';
import styled from 'styled-components';

const MainNav = () => {
    return (
        <NavWrapper>
            <NavLogo>Logo</NavLogo>
            <NavTitle>
                <h1>Site Title</h1>
            </NavTitle>
            <NavItemsWrapper>
                <NavItems>
                    <li>HOME</li>
                    <li>ABOUT ME</li>
                    <li>CONACT</li>
                    <li>CLIENT GALLERIES</li>
                </NavItems>
            </NavItemsWrapper>
        </NavWrapper>
    )
}

export default MainNav;

//styled components
const NavWrapper = styled.nav`
border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 100%;
    background: blue;
    align-items: center;
    height: 200px;
`

const NavLogo = styled.div`
border: 1px solid black;
    flex: 0 0 calc(100% / 12 * 2);
    cursor: pointer;
    height: 50px;
    background-color: red;
`

const NavTitle = styled.div`
border: 1px solid black;
    flex: 0 0 calc(100% / 12 * 3);
    cursor: pointer;
    color: grey;
`

const NavItemsWrapper = styled.div`
border: 1px solid black;
    display: flex;
    flex: 0 0 calc(100% / 12 * 6);
`

const NavItems = styled.ul`
border: 1px solid black;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 0 0 calc(100% / 12 * 11);
    list-style: none;
    li {
border: 1px solid black;
        color: red;
        cursor: pointer;
        &:hover {
            border-bottom: 5px solid black;
        }
    }
`

// const MainNav = styled.nav`
//     ul {
//       list-style: none;
//       display: flex;
//       li {
//         margin-left: 10px;
//         font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
//         a {
//           text-decoration: none;
//           color: white;
//           &:hover {
//             border-bottom: 3px solid #524763;
//           }
//         }
//       }
//     }