// import Compon from "../components/test/Compon";
// import Form from "../components/test/Form";
// import Button from "../components/test/Button";
// import Condicional from "../components/test/Condicional";
// import List from "../components/test/List";
import * as React from "react";
import { MenuItem, Box, FormControl, Select, InputLabel, Stack, spacing} from "@mui/material";
import {useApi} from '../hooks/useApi';

export default function Test(){

    const a = useApi();





    return (
        <>
            <h1>TestPage</h1> 

            <LayOutFixed/>

        

        </>
    );
}


const LayOutFixed = () =>{

    const forms = [<ReviewrForm/>, <ThanksForm/>, <UserForm/>];

    const {currentComponet, currentStep, changeStape} = useForm(forms);
    
    return (
        <Stack>

            <div className="header">
                <h2>Deixe sua avaliacao</h2>
                <p>Ficamos felizes por sua avaliacao!</p>
            </div>

            <div className="formconteiner">
                <p>Etapas</p>
                <form>
                    <div className="contanerForms">
                        {currentComponet}
                    </div>
                    <div className="actions" >
                        <button type="button" onClick={(e) => changeStape(currentStep - 1, e)} 
                        >

                            <span>Voltar</span>
                        </button>
                        <button type="button" onClick={(e) => changeStape(currentStep + 1, e)}
                        >
                            <span > Avançar</span>
                        </button>
                    </div>
                </form>
            </div>

            


        </Stack>
    )
}

const useForm = (steps) => {
    const [currentStep, setCurrentSpet] =React.useState(0);

    const changeStape = (i, e) => {
       if(e) e.preventDefault();

      
        if(i < 0 ){  
            setCurrentSpet(0);
            return;
        }
        
        console.log(`Controlando  ${i}`);
        if( i >= steps.lenght) {
            console.log(`Dentro do if: ${steps.lenght}`)
            setCurrentSpet(steps.lenght - 1);
            return;
        }
        console.log(`Fora do if: ${steps.lenght}`)
            
        setCurrentSpet(i)
    }
    
    return {
        currentStep,
        currentComponet: steps[currentStep],
        changeStape
    };
}

const UserForm = () => {
    return (
        <>
            <h1>User Form</h1>
        </>
    )
}
const ReviewrForm = () => {
    return (
        <>
            <h1>ReviewrForm Form</h1>
        </>
    )
}

const ThanksForm = () => {
    return (
        <>
            <h1>ThanksForm Form</h1>
        </>
    )
}
const BasicSelect = () =>  {

    const [dropdownValue, setDropdownValue] = React.useState("");

    
    const handleChange = (e) => {
        setDropdownValue(e.target.value)
    }

    const options = [
        {name: "Dez", value: 10},
        {name: "Vinte", value: 20},
        {name: "Trinta", value: 30}
    ];
    
    return (
        <Box>
            <FormControl >
                <InputLabel id="demo-label">My Dropdown Button</InputLabel>
                <Select width={200}
                    labelId = "demo-label"
                    id ="demo"
                    value={dropdownValue}
                    label =  "Dropdown"
                    onChange ={handleChange}
                >
                    {
                        options.map((_item) => {
                            return <MenuItem value={_item.value}>{_item.name}</MenuItem>
                        })
                    }

                </Select>
            </FormControl>

            <h1>{dropdownValue}</h1>

        </Box>
    )
}