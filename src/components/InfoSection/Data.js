import Svg1 from "../../images/svg-1.svg"
import Svg2 from "../../images/svg-2.svg"
import Svg3 from "../../images/svg-3.svg"

export const homeObjOne = {
    
    link: '//app.solari.money',
    id: 'about',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Overview',
    headline: 'Solari is a powerful lending protocol enabling efficient use of your assets.',
    description: "We allow you to borrow our stablecoin slUSD against your idle interest bearing assets, increasing your capital efficiency, and allowing you to further use your money.",
    buttonLabel: 'Launch App',
    imgStart: false,
    img: Svg1,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}

export const homeObjTwo = {
    link: '//docs.solari.money',
    id: 'docs',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Documentation',
    headline: 'Read the docs.',
    description: 'Our documentation provides a general overview of Solari, how it works, and how to interact with our web app.',
    buttonLabel: 'Go to Docs',
    imgStart: true,
    img: Svg3,
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    link: '//docs.solari.money/intro/roadmap',
    id: 'roadmap',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Our Roadmap',
    headline: 'We have a lot planned for the future.',
    description: 'Our roadmap gives an overview of what you can expect from us going forward.',
    buttonLabel: 'See the Roadmap',
    imgStart: false,
    img: Svg2,
    alt: 'Car',
    dark: true,
    primary: true,
    darkText: false
}