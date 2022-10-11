import './Table.css';

function Table(prop){
    return (
        <div className="row">
        <p>{prop.prop.drugname}</p>
        <p>{prop.prop.manufacturedby}</p>
        <p>{prop.prop.expiredate}</p>
        <p>{prop.prop.catagory}</p>
        <p>{prop.prop.effects}</p>
      </div>
    );
}

export default Table;