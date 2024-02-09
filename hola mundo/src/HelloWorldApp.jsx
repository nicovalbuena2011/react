import PropTypes from 'prop-types'


const newMessage = '23 años'

const mensaje = () => 'retorno un mensaje'

export const App = ( {title, subTitle} ) => {


    return (
        <>
            <h1>Nicolas { mensaje() } </h1>
            <h2>{ title }, {subTitle + 1}</h2>
            <p>Soy un parrafo</p>
        </>
    )
}

App.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

App.defaultProps = {
    title: 'Valor por defecto',
    subTitle: 'Valor por defecto subtitulo'
}