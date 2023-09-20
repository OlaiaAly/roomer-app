import {useState} from "react";

export default function Condicional(){

    const [email, setEmail] = useState();

    const handle = (e) => {
        setEmail(e.target.value);
    }

    const sendEmail = () => {
        console.log(`Sending the email! ${email}`);
    }

    const limparEmail = ()=> {
        setEmail();
        document.getElementById("button").innerHTML = "";
    }

    return (
        <div>
            <h2>Cadastre o seu email: </h2>
            <from>

                <input 
                    id="button"
                    type="email"  
                    onChange={(e) => {handle(e)}}
                    placeholder="Digite o seu email" 
                />

                <button onClick={sendEmail}>Enviar-email</button>
            </from>
            
            {
            email && (
                <div> <h1>O email 'e: {email}</h1><button onClick={limparEmail}>Limpar Email</button></div>
            )
            }
        </div>
    )
}