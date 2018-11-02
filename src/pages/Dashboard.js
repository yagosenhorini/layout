import React from 'react';
import { ProfileBox, Header, UpgradePlus, Logo, UserDiv, UserImg, OptionDiv, InputSearch, AddPersonButton, RelevantButton, SidebarNav, MainSection, SidebarIcon } from '../components/Dashboard-components'

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
                    <i class="fas fa-sync"></i>
                    <div className="list-header">
                        <i class="fas fa-list-ul"></i>
                    </div>
                    <RelevantButton>Relevant</RelevantButton>
                </OptionDiv>
                <MainSection>
                    <SidebarNav>
                        <SidebarIcon>
                            <i class="fas fa-database"></i>
                        </SidebarIcon>
                        <SidebarIcon>
                            Icon
                        </SidebarIcon>
                        <SidebarIcon>
                            <i class="fas fa-clock"></i>
                        </SidebarIcon>
                        <SidebarIcon>
                            <i class="fas fa-trophy"></i>
                        </SidebarIcon>
                        <SidebarIcon>
                        <i class="fas fa-eye"></i>
                        </SidebarIcon>
                    </SidebarNav>
                    <ProfileBox>Test</ProfileBox>
                </MainSection>
            </main>
        )
    }
} export default Dashboard;