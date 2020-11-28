

const Card2 = (props) => {
    return ( 
        <section id="card2">
            <div>
                 <img  id='instagramIcon' src="../img/instagramicon.png" alt=""  />
            </div>
            <figure>
                <img src={props.userImg} alt="" />
                <figcaption>
                    <p className="text">{props.userText}</p>
                    <h4 className="text2">{props.userText2}</h4>
                </figcaption>
            </figure>
        </section>
     );
}
 
export default Card2;