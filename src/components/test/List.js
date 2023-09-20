import Item from "./Item";
import OutraLista from  "./OutraLista";

export default function List(){

    const list = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];

    return (
        <>
            <ul>
                <OutraLista items={list}/>
                {/* <Item lista={list}/> */}
                {/* <Item brand="Toyota" />
                <Item brand="Peogeout" year={2021}/>
                <Item brand="Agua" year={2022}/> */}
                
            </ul>
        </>
    );
}