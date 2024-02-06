
const newMessage = '23 años'

const mensaje = () => 'retorno un mensaje'

export const App = () => {


    return (
        <>
            <h1>Nicolas { mensaje() } </h1>
            <p>Soy un parrafo</p>
        </>
    )
}