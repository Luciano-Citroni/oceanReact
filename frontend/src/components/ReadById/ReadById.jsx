import { useEffect, useState } from "react";
import Card from "../Card/Card";

function ReadById(){
    const id = '63f7721a2531bdea397ea780';
    const [item, setItem] = useState();


    async function consultar(){
        //const url = 'http://localhost:3000/item/'+id;
        const url = `http://localhost:3000/item/${id}`;

        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

        setItem(data);

    }

    useEffect( function(){
        consultar();
    },[])
    
    
    if(!item){
        return <div>Carregando...</div>
    }

    
    return <div className="ReadById"><Card item={item} /></div>
}

export default ReadById;