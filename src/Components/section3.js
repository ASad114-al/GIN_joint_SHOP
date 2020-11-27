const Section3 = () => {
    return ( 
        <div className='section3'>
            <div className='info_section3'>
                <p id='p-earth'>Get in touch</p>
                <h2 id='York'>132 9th Avenue <br/> New York, NY 10011 <br/> 646-559-1671 <br/> info@btgnyc.com</h2>
                
               
                <p id='Operation'>Hours of Operation</p>
            

                <div className='Hours'>
                    <p>Monday</p>
                    <p>8AM - 4PM</p>
                    <p>Tuesday - Friday</p>
                    <p>8AM - 10PM</p>
                    <p>Saturday</p>
                    <p>9AM - 10PM</p>
                    <p>Sunday</p>   
                    <p>9AM - 4PM</p>
                    </div>
                </div>

            <form >
                <input type="text" name="" id="Name_id" placeholder="Name"/>
                <br/>
                <br/>
                <input type="email" name="" id="email_id" placeholder="Email Address"/>
                <br/>
                <br/>
                <input type="number" name="" id="mobile_id" placeholder= 'Mobile'/>
                <br/>
                <br/>
                <input type="text" name="" id = "massege_id"  placeholder=" Message"/>
                <br/>
                <br/>
                <input type="submit"  id='submit_id' value="submit"/>
            </form>
        </div>
     );
}
 
export default Section3;