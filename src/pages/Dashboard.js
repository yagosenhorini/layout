import React from 'react';
import { ProfileBox, Header, UpgradePlus, Logo, UserDiv, UserImg, OptionDiv, InputSearch, AddPersonButton } from '../components/Dashboard-components'

class Dashboard extends React.Component {
    render() {
        return (
            <main className="App">
                <Header>
                    <Logo>Logo</Logo>
                    <UserDiv>
                        <UpgradePlus>Upgrade Plus</UpgradePlus>
                        <UserImg />
                    </UserDiv>
                </Header>
                <OptionDiv>
                    <InputSearch placeholder="&#xf002; Search for groups, people" />
                    <AddPersonButton>
                        <span style={{ color: '#ed3e3f', fontSize: '16px', marginRight: '5px', fontWeight: '600' }}>+</span>
                        Add person
                    </AddPersonButton>
                </OptionDiv>
                <ProfileBox>Test</ProfileBox>
            </main>
        )
    }
} export default Dashboard;