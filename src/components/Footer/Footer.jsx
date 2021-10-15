import React from 'react'
import Logo from '../../images/solari_logo.png'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink,
    LogoImg
} from './Footer.elements'
import { FaDiscord, FaTelegram, FaGithub, FaTwitter } from 'react-icons/fa'

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Useful Links</FooterLinkTitle>
                            <FooterLink href="https://app.solari.money" target="_blank">App</FooterLink>
                            <FooterLink href="https://docs.solari.money" target="_blank">Docs</FooterLink>
                            <FooterLink href="#" target="_blank">Trade</FooterLink>
                            <FooterLink href="https://docs.solari.money/tokens/tokenomics" target="_blank">Tokenomics</FooterLink>
                            <FooterLink href="//bscscan.com/token/0x" target="_blank">Bscscan</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Social Media</FooterLinkTitle>
                            <FooterLink href="https://twitter.com/@Solari_Protocol" target="_blank">Twitter</FooterLink>
                            <FooterLink href="https://discord.gg/ZMMzreAF7S" target="_blank">Discord</FooterLink>
                            <FooterLink href="https://t.me/joinchat/9KMEWcfGjHFkYzIx" target="_blank">Telegram</FooterLink>
                            <FooterLink href="https://github.com/solari-money" target="_blank">Github</FooterLink>
                            <FooterLink href="https://medium.com/" target="_blank">Medium</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo href="/"><LogoImg src={Logo} alt="Icosahedron"/></SocialLogo>
                        <WebsiteRights>Solari © { new Date().getFullYear() } All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="https://twitter.com/@Solari_Protocol" target="_blank" aria-label="twitter">
                                <FaTwitter/>
                            </SocialIconLink>
                            <SocialIconLink href="https://discord.gg/ZMMzreAF7S" target="_blank" aria-label="discord">
                                <FaDiscord/>
                            </SocialIconLink>
                            <SocialIconLink href="https://t.me/joinchat/9KMEWcfGjHFkYzIx" target="_blank" aria-label="telegram">
                                <FaTelegram/>
                            </SocialIconLink>
                            <SocialIconLink href="https://github.com/solari-money" target="_blank" aria-label="github">
                                <FaGithub/>
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    );
}

export default Footer;