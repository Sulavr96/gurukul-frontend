import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';


function S_Dashboard() {
    return (

        <div>
            <SideNav 
            onSelect={(selected) => {

    }}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="resources">
                    <NavItem eventKey="resources">
                        <NavIcon>
                            <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Resource Materials
            </NavText>
                    </NavItem>
                    <NavItem eventKey="profile">
                        <NavIcon>
                            <i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                           Profile
            </NavText>

                    </NavItem>



                    <NavItem eventKey="Assignments">
                        <NavIcon>
                            <i className="fa fa-fw fa-copy" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Assignments
            </NavText>

                    </NavItem>


                    <NavItem eventKey="Courses">
                        <NavIcon>
                            <i className="fa fa-fw fa-book" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Courses
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

export default S_Dashboard;