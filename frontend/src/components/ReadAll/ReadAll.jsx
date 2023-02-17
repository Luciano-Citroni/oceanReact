import Card from "../Card/Card";
import './ReadAll.css'

// Mock Items (exatamente a mesma estrutura que o back traria)
// Isso facilita o trabalho aqui no Front, para conseguir estruturar
// comportamento, sem precisar depender do back para receber dados

const items = [
    {
        _id: '1234',
        nome: 'Rick Sanchez',
        imageUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
        _id: '5484',
        nome: 'Morty Smith',
        imageUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    },
    {
        _id: '7544',
        nome: 'Summer Smith',
        imageUrl: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    },
    {
        _id: '1314',
        nome: 'Bath Smith',
        imageUrl: 'https://rickandmortyapi.com/api/character/avatar/4.jpeg'
    },
    {
        _id: '7841',
        nome: 'Jarry Smith',
        imageUrl: 'https://rickandmortyapi.com/api/character/avatar/5.jpeg'
    }
];
/*
- Para cada item da lista, exibe um card do Rick Sanchez
- Pegar a informação de cada item e enviar para o componente <Card />
- A informação recebida no card deve ser exibida no console.log
- Pegar cada parte da informação recebida e colocá-la nos elementos de HTML
*/

// sintaxe de concatenação de variaveis dentro de JSX 
// { VARIAVEL }

// as { } permite colocar qualquer codigo JavaScript nelas 

function ReadAll(){
    return <div className="ReadAll">
        {items.map(function(item) {
            return <Card key={"card-" + item._id} item={item}/>;
        })}
    </div>
}


export default ReadAll;
