
import GinData from "../Data/GinData.json"
import Card from "./Card"

const Section2 = () => {
    return ( 
        <section className='info_jazz'>
            <p id="covid_text">Due to COVID-19 and the temporary closing of Bathtub Gin, our nightly entertainment is currently on pause. <br/> Stay tuned for updates on our reopening date and new events, coming soon!</p>
        <div id="cards">
        {GinData.map(singleData =>  <Card 
            ginGenre = {singleData.textbk}
            ginDate = {singleData.date}
            ginTime = {singleData.time}
           gintextunten = {singleData.textunten}
            ginImg = {singleData.image}
            key = {singleData.id}
            
        />)}
        </div>
        </section>
     );
}
 
export default Section2;