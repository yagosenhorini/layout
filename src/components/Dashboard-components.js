import styled from 'styled-components'

export const Header = styled.header`
    width: 100%;
    height: 80px;
    background: #2a3246;
    display: flex;
    flex-direction: row;
`

export const Logo = styled.h1`
    width: auto;
    height: auto;
    margin: auto;
    color: white;
    margin: auto 50px;
`

export const UserDiv = styled.div`
    width: 300px;
    margin-left: auto;
    display: flex;
    flex-direction: row;
`

export const UpgradePlus = styled.button`
    width: 120px;
    height: auto;
    margin: 20px 10px;
    padding: 10px;
    border: 1px solid white;
    background: transparent;
    border-radius:  50px;
    color: white;
    cursor: pointer;
    transition: 0.45s
    &:hover{
        background: white;
        color:#2a3246;
    }
`
//using div to simulate an image on header nav
export const UserImg = styled.div`
    margin: 10px 30px;
    padding: 10px 30px;
    border-radius: 100%;
    background: white;
`

//the background color is just to make this visible for now
export const OptionDiv = styled.nav`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
`

export const InputSearch = styled.input`
    width: 200px;
    height: 50px;
    margin: 0 50px 0 10px;
    border: none;
    padding: 10px;
    font-family: FontAwesome, arial
`

export const AddPersonButton = styled.button`
    width: 120px;
    height: auto;
    margin: 10px 10px;
    padding: 5px;
    border: none;
    color: white;
    border-radius:50px;
    background: #293246;
    cursor: pointer;

`

export const ProfileBox = styled.div`
    width: 300px;
    height: auto;
    margin: 25px auto;
    padding: 100px 0;
    background: #ffffff;
    border: 1px solid black;
`