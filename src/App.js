import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Prenavabar from './Components/Prenavabar'
import Navabar from './Components/Navabar';
import Slider from './Components/Slider';
import data from './data/data.json';
import Offers from './Components/Offers';
import Heading from './Components/Heading';
import Product from './Components/Products';
import Hotaccessoriemenu from './Components/Hotaccessoriemenu';
import Hotaccess from './Components/Hotaccess';
import Productreview from './Components/Productreview';
import Video from './Components/Video';
import Banner from './Components/Banner';
import Footer from './Components/footer';
import Navdesc from './Components/Navdesc';

function App() {
  return (
    <div className="App">
<Router>
<Prenavabar/>
     <Navabar logo={data.logo}/>
     <Navdesc miphone={data.miPhones} redmi={data.redmiPhones} tv={data.tv} laptop={data.laptop} fl={data.fitnessAndLifeStyle}
      hom={data.home} aud={data.audio} access={data.accessories}/>
     <Slider start={data.banner.start}/>
     <Offers offer={data.offer}/>
     <Heading text="STAR PRODUCTS"/>
     <Product starproduct={data.starProduct}/>
     <Heading text="HOT ACCESSORIES"/>
     <Hotaccessoriemenu/>
     <Routes>
     <Route exact path='/music' element={<Hotaccess music={data.hotAccessories.music} musiccover={data.hotAccessoriesCover.music}/>}>
     </Route>
     <Route path='/smartdevice' element={ <Hotaccess smartdevice={data.hotAccessories.smartDevice} smartcover={data.hotAccessoriesCover.smartDevice}/>}>
     </Route>
     <Route path='/Home' element={ <Hotaccess home={data.hotAccessories.home} homecover={data.hotAccessoriesCover.home}/>}>
     </Route>
     <Route path='/lifestyle' element={ <Hotaccess lifestyle={data.hotAccessories.lifeStyle} lifecover={data.hotAccessoriesCover.lifeStyle}/>}>
     </Route>
     <Route path='/' element={ <Hotaccess mobile={data.hotAccessories.music} mobilecover={data.hotAccessoriesCover.music}/>}>
     </Route>
     </Routes>
     <Heading text="PRODUCT REVIEW"/>
     <Productreview reviews={data.productReviews}/>
     <Heading text="VIDEOS"/>
     <Video videos={data.videos}/>
     <Heading text="IN THE PRESS"/>
     <Banner end={data.banner.end}/>
     <Footer fotters={data.footer}/>
</Router>
    
    </div>
  );
}
export default App;
