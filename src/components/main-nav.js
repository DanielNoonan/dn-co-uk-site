import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';


const MainNav = () => {
    return (
        <NavWrapper>
            {/* <NavLogo>
                Picture of camera gear
            </NavLogo> */}
            <NavTitle>
                <Link to='/'>
                    <h1>Daniel.Noonan</h1>
                    {/* <h2>Photography</h2> */}
                </Link>
            </NavTitle>
            <NavItemsWrapper>
                <NavItems>
                    <li>
                        <Link exact to='/' activeStyle={{color: 'red'}} >HOME</Link>
                    </li>
                    <li>
                        <Link exact to='/about' activeStyle={{color: 'orange'}} >ABOUT ME</Link>
                    </li>
                    <li>
                        <Link exact to='/coding' activeStyle={{color: 'green'}} >CODING</Link>
                    </li>
                    <li>
                        <a>PHOTOGRAPHY & CLIENT GALLERIES</a>
                    </li>
                    <li>
                        <a>CONTACT</a>
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
    position: fixed;
    z-index: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    width: 100%;
    // background: black;
    align-items: center;
    min-height: 100px;
    // border-bottom: 3px solid white;
`

const NavLogo = styled.div`
// border: 1px solid black;
    width: 100px;
    // cursor: pointer;
    background-color: white;
`

const NavTitle = styled.div`
// border: 1px solid black;

    a {
        text-decoration: none;
    }

    h1 {
        cursor: pointer;
        color: white;
        text-align: center;
        margin: 0;
        font-style: oblique;
    }

    h2 {
        cursor: pointer;
        color: white;
        text-align: center;
        margin: 0;
        font-style: oblique;
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
        margin-left: 15px;
        margin-bottom: 0;

        a {
            &:hover {
                border-bottom: 3px solid #524763;
            }
            text-decoration: none;
            color: white;
            cursor: pointer;

            &:link {
                color: green;
            }
        }
    }
`
