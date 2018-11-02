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

export const OptionDiv = styled.nav`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
`

export const InputSearch = styled.input`
    width: 200px;
    height: 49px;
    margin: 0 50px 0 10px;
    border: none;
    padding: 10px;
    font-family: FontAwesome, arial
`

export const AddPersonButton = styled(UpgradePlus)`
    width: 120px;
    height: auto;
    margin: 10px 10px;
    padding: 5px;
    border: none;
    color: white;
    border-radius:50px;
    background: #293246;
    cursor: pointer;
    transition: 0.45s;
    &:hover{
        color: #293246;
        background: #CCC
    }

`

export const RelevantButton = styled(AddPersonButton)`
width: 80px;
padding: 5px;
margin: auto 20px auto 10px;
height: 30px;
border: 1px solid lightgray;
background: #ffffff;
color: lightgray;
&:hover{
    background: #293246;
    color: #fff;
}
`

export const MainSection = styled.section`
background: #ecf1f5;
display: flex;
flex-direction: row;
`

export const SidebarNav = styled.aside`
width: 80px;
height: calc(768px - 130px);
background: #2a3246;
display: flex;
flex-direction: column;
`

export const SidebarIcon = styled.div`
    width: 40px;
    height: 50px;
    padding: 30px 0;
    margin: 20px auto;
    border-bottom: 1px solid lightgray;
`

export const ProfileBox = styled.div`
    width: 300px;
    height: 50px;
    margin: 25px auto;
    padding: 100px 0;
    background: #ffffff;
    border: 1px solid black;
`