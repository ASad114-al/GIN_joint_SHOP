import Footer2 from './Footer2';
const Footer1 = () => {
    return ( 
        <section className='footer'>
            <nav>
              <div id="footer_img"></div>
                <div id="find_us">
                    <h3>Find Us</h3>
                   
                   <p>132 9th Avenue</p>
                    <p>New York, NY 10011</p>
                    <p>646-559-1671</p>
                    <p>Info@btgnyc.com</p> 
                </div> 
                <div>
                <h3>Hours of Operation</h3>
                 <div className="Hours">
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
            </nav>
        
           
                <Footer2 />
           
        </section>
     );
}
 
export default Footer1;