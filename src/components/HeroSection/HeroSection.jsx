import React, { useState } from 'react'
import Image from "../../images/fuchsiasunset.png"
import { 
    HeroContainer, 
    HeroBg, 
    ImageBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight,
    HeroButton

} from './HeroSection.elements'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                <ImageBg src={Image} />
            </HeroBg>
            <HeroContent>
                <HeroH1>Solari</HeroH1>
                <HeroP>
                    Solari is a lending platform enabling you to use your capital efficiently.
                </HeroP>
                <HeroBtnWrapper>
                    <HeroButton href="https://app.solari.money/" onMouseEnter={onHover} 
                    onMouseLeave={onHover}
                    >
                        Launch App {hover ? <ArrowForward /> : <ArrowRight />}
                    </HeroButton>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection;