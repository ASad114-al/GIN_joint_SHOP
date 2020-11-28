const Card = (props) => {
    return ( 
        <section id="date">
            <div className="image" style={{backgroundImage:`url(${props.ginImg})`}}>
                <h3>{props.ginGenre}</h3>
            </div>
            <div>
                <h4 className="date">{props.ginDate}</h4>
                <p className="time">{props.ginTime}</p>
                <p >{props.gintextunten}</p>
            </div>
        </section>
     );
}
 
export default Card;