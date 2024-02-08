
const newMessage = '23 años'

const mensaje = () => 'retorno un mensaje'

export const App = ( {title = 'valor predeterminado', subTitle} ) => {


    return (
        <>
            <h1>Nicolas { mensaje() } </h1>
            <h2>{ title }, {subTitle + 1}</h2>
            <p>Soy un parrafo</p>
        </>
    )
}