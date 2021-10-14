import React from 'react'
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
} from './Services.elements'

import Icon1 from '../../images/svg-4.svg'
import Icon2 from '../../images/svg-5.svg'
import Icon3 from '../../images/svg-6.svg'

const Services = () => {
    return (
        <ServicesContainer id="eco">
            <ServicesH1>Our Ecosystem</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Staking</ServicesH2>
                    <ServicesP>Stake your $SOLARI to earn rewards.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Solari USD</ServicesH2>
                    <ServicesP>Our decentralized, capital efficient, stable coin.</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Farms</ServicesH2>
                    <ServicesP>Join our liquidity mining program to earn rewards.</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services