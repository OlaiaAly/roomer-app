import {useState} from "react";
import styles from "./test.module.css";


export default function Form(){

    const [name, setName] = useState();

    function myEvent(e){
        e.preventDefault();
        console.log("Here I am!");
        console.log(`Name: ${name}` );
    
    }
    
    return (
        <>
            <form onSubmit={myEvent}>
                    <div>
                        <label htmlFor="name">
                            <p>Name: {name}</p>
                            <input 
                                type="text"  
                                id="name" 
                                name="name"
                                placeholder="Digite seu nome"
                                onChange={(e) => {setName(e.target.value)}} 
                            />
                        </label>

                        {/* <label htmlFor="password">
                            <p>Password:</p>
                            <input type="text"  id="passsword" name="passsword" />
                        </label> */}
                       
                    </div>

                  

                    <input type="submit" value="Submit" className={styles.texto} />
                </form>
        </>
    )
}