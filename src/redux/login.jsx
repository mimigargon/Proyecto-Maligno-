import axios from "axios";


const getInfo = async () => {
  
        const getCharacters = async (myuser, mypassword) => {
          try {
            const res = await axios("http://localhost:4500/users/");
            console.log("res", res);
            const usuario = res.data[0].username;
            const password = res.data[0].password;
            console.log("usuario", usuario, "\nPassword: " + password);
            
            const userArr = usuario;

            return userArr;
            
          } catch (error) {
            console.log("Error en petición", error);
          }
        };
        
        getCharacters();
   
 
}

export default getInfo;