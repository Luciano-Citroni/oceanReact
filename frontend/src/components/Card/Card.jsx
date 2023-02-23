import './Card.css'

function Card(props){
    const item = props.item;
    const tags = item.tags;
    console.log(tags);
    return (
        <div className="card">
            <img className='img' src={item.imageUrl} />
            <h2>{item.nome}</h2>
              
            {tags && (
            <div className='tag-wrapper'>
                {tags.map(function(tag, index){
                    return <div key={'tag-'+index} className='tag'> {tag} </div>;
                })}
            </div>         
            )}
            
        </div>
    );
}

export default Card;