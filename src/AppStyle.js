import { fonts, colors} from "./components/fonts_colors"


// Made Grid for all elements in the app
export const appStyle = {
    boxSizing: 'border-box',
    background: colors.white,
    height: '100vh',
    with: '100%',
    backgroundSize: '100% 100%',
    overflowX: 'hidden',
    borderLeft: 'black solid 1px', // Decorative
    borderRight: 'black solid 1px', // Decorative
    margin: '-0.8rem 4rem',
    padding: '0rem 5rem',
    display: 'grid',
    gridTemplateColums: '40% 40% 20%',
    gridTemplateRows: '13% 65% auto',
    gap: '2rem'
}