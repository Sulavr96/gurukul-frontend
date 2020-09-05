import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import {Link} from "react-router-dom";


function Student_SideBar() {
    return (

        <div>
            <SideNav
                onSelect={(selected) => {

                }}>
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="stream">
                    <NavItem eventKey="stream">
                        <NavIcon>
                            <Link className="nav-link " to="/student/stream/"> <span><i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} /></span></Link>
                        </NavIcon>
                        <NavText>
                            Stream
            </NavText>
                    </NavItem>
                    <NavItem eventKey="profile">
                        <NavIcon>
                        <Link className="nav-link " to="/student/profile/"> <span><i className="fa fa-fw fa-user" style={{ fontSize: '1.75em' }} /></span></Link>
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

export default Student_SideBar;