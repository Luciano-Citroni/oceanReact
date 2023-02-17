import './Card.css'

function Card(props){
    const item = props.item;
    return (
        <div className="card">
            {/* <img className='img' src="https://img.elo7.com.br/product/600x380/30D350E/quadro-poster-serie-rick-and-morty-rick-sanchez-gs047-decoracao-de-casa.jpg" /> */}

            <img className='img' src={item.imageUrl} />
            <h2>{item.nome}</h2>
            
        </div>
    );
}

export default Card;