export const Size = {
    mobileS: '320px',
    mobileM: '376px',
    mobileL: '425px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2560px'
}

export const Device = {
    mobileS: `(min-width: ${Size.mobileS})`,
    mobileM: `(min-width: ${Size.mobileM})`,
    mobileL: `(min-width: ${Size.mobileL})`,
    tablet: `(min-width: ${Size.tablet})`,
    laptop: `(min-width: ${Size.laptop})`,
    laptopL: `(min-width: ${Size.laptopL})`,
    desktop: `(min-width: ${Size.desktop})`,
    desktopL: `(min-width: ${Size.desktop})`,
    largeTabletPortrait: `(min-width: ${Size.laptop}) and (orientation: portrait)`,
    largeTabletLandscape: `(min-height: 1024px) and (orientation: landscape)`
};