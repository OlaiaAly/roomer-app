
import styles from "./test.module.css";

export default function OutraLista({items}){
    
    return (
        <>
            {items.length > 0 ? 
                (
                    items.map(
                        (item) => (
                            <li style={styles.lis}>{item}</li>
                        )
                    )
                )
                :
                (
                    <p>Aguarde enquanto a lista carrega!</p>
                )
            }
        </>
    )
} 