import Header from './Header_home';
import Section1 from './Section1_home';
import Section2 from './jazzBurlDj'
import Food from './Food_home';
import  Trink from './Trink_section';
import Footer1 from './Footer1';



const Home = () => {
    return (
        <section>
           <Header />
           <Section1 />
           <Section2 />
           <Food />
           < Trink />
           <Footer1 />
        </section>
      );
}
 
export default Home;