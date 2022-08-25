import {fonts, colors} from '../fonts_colors';


export const formDiv = {
    boxSizing: 'border-box',
    gridRow: '2',
    gridColumn:'1/3',
    fontFamily: fonts.textLight.fontFamily,
    color: colors.black,
    fontSize: '1.8rem'
}

export const form = {
    boxSizing: 'border-box',
    borderRadius: '35% 0%',
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 45%)',
    gridTemplateRows: '16% 16% 16% 13% 13% 20%',
    background: 'linear-gradient(115.47deg, #E4CBBC 6.83%, rgba(228, 203, 188, 0.6) 44.25%, rgba(228, 203, 188, 0.4) 95.69%)',
    boxShadow: `6em 0em 0em ${colors.cream}`,
    backdropFilter: 'blur(90%)',
    height: '70%',
    width: '60%',
    marginLeft: '9rem',
    marginTop: '5.4rem',
    alignItems: 'center',
    justifyItems: 'end',
    paddingTop: '5rem',
    paddingLeft: '5rem'
}

export const label = {
    justifySelf: 'start',
    paddingLeft: '3rem'
}
export const input = {
    borderRadius: '1%',
    border: 'none',
    boxShadow: 'inset 0 0.05em 0.1em rgba(0, 0, 0, 0.25)',
    height: '45%',
    width: 'fit-content',
    maxWidth: '70%',
    fontSize: '1.8rem',
    textAlign: 'right',
    padding: '0.3rem',
    fontFamily: fonts.textLight.fontFamily
}
export const button = {
    gridColumn: '2',
    gridRow: '6',
    fontFamily: fonts.textThin,
    fontSize: '1.6rem',
    boxShadow: '0em 0.2em 0.2em rgba(0, 0, 0, 0.25)',
    borderRadius: '5%',
    border: 'none',
    background: colors.black,
    color: colors.white,
    width: '45%',
    height: '45%'
}
export const checkboxDiv = {
   gridRow: '5',
   gridColumn: '1/3',
   justifySelf: 'center',
   border: 'none'
}
export const checkboxInput = {
    margin: '1rem'
}