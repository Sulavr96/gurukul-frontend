import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import SignInLinks from '../navbar/SignInLinks.component'





function TDashboard() {
    return (

        <div>
            <SignInLinks></SignInLinks>


            <SideNav>

                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="home">
                    <NavItem eventKey="home">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Home
            </NavText>
                    </NavItem>
                    <NavItem eventKey="account">
                        <NavIcon>
                            <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Account
            </NavText>

                    </NavItem>


                    <NavItem eventKey="courses">
                        <NavIcon>
                            <i className="fa fa-fw fa-book" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Courses
            </NavText>
                    </NavItem>



                    <NavItem eventKey="Students">
                        <NavIcon>
                            <i className="fa fa-fw fa-users" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Students
            </NavText>

                    </NavItem>


                    <NavItem eventKey="Settings">
                        <NavIcon>
                            <i className="fa fa-fw fa-cogs" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Settings
            </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </div>



    );
}

export default TDashboard;