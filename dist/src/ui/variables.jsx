const app = {
    width: 350,
    height: 450,
    offset: 800
}



const typography = {
    h1: 30
}

const font = {
    default: 'Roboto'
}

const animation = {
    fast: '0.2s',
    middle: '0.4s'
}

const color = {
    primary: '#0f9d58 ',
    danger: '#D8000C',
    warn: '#D8000C',
    help: '#95A5A6',
    white: '#ffffff',
    light: '#f0f3f4',
    text_color: 'rgba(0, 0, 0, 0.54)'
}
const header = {
    minHeight: 50,
    background: color.primary,
    closeIcon: {
        size: 25
    }
}
const styles = {
    boxShadow: '0 0 5px 0 rgba(0,0,0,.4)'
}

export {
    styles,
    color,
    animation,
    typography,
    header,
    app,
    font
}