// funcion login

const LoginAPP = () => {

        return(
        <div>    
             <form>
                <h3>Formulario de login</h3>
                <input type="text" id="nombre" name="nombre" required></input>
                <label for="nombre">Nombre:</label>               
                <label for="email">Correo electrónico:</label>
                <input type="email" id="email" name="email" required></input>
             </form>
        </div>        
        )
}
export default LoginAPP