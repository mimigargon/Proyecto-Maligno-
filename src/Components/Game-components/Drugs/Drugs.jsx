import { useEffect, useState } from "react";
import axios from "axios";

const Drugs = () => {
  const [drugs, setDrugs] = useState([]);
  const [info, setInfo] = useState({});
  useEffect(() => {
    const getDrugs = async () => {
      try {
        const res = await axios("https://cima.aemps.es/cima/rest/psuministro");
        console.log(res);
        // const {info, results} = await res.json(); //  Fetch
        const { info, resultados } = res.data;
        setDrugs(resultados);
        setInfo(info);
      } catch (error) {
        console.log("Error en petición", error);
      }
    };

    getDrugs();
  }, []); // [] quiere decir que solo se ejecuta una vez
 
  return (
    <>
      <h1>drugs</h1>
      <div className="character__container">
        {drugs.map((drug) => {
          return (
            <body>
            <div className="character" key={drug}>
           
          
              <p>
               nombre: {drug.nombre}
              </p>
              <p>
               precio: {drug.tipoProblemaSuministro} ETH
              </p>
              <p>
               stock: {drug.ffin} uds
              </p>
        
            </div>
            </body>
          );
        })}
      </div>
      
    </>
  );
};

export default Drugs;



/*
  <>
      <h1>drugs</h1>
      <div className="character__container">
        {drugs.map((drug) => {
          return (
            <body>
            <div className="character" key={drug}>
           
            <p>I will display &#10100;</p>
              <p>
               nombre: {drug.nombre}
              </p>
              <p>
               precio: {drug.tipoProblemaSuministro} ETH
              </p>
              <p>
               stock: {drug.ffin} uds
              </p>
        
            </div>
            </body>
          );
        })}
      </div>
      
    </>
*/