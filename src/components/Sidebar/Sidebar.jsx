import React from 'react'
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from "./Sidebar.elements"

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to="about" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        About
                    </SidebarLink>
                    <SidebarLink to="docs" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Documentation
                    </SidebarLink>
                    <SidebarLink to="eco" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Ecosystem
                    </SidebarLink>
                    <SidebarLink to="roadmap" onClick={toggle} smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                        Roadmap
                    </SidebarLink>
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute href="https://app.solari.money/">App</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar