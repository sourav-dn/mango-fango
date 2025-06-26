import Banner from '../Components/Banner/Banner';
import BeginnerPlants from '../Components/BeginnerPlants/BeginnerPlants';
import Blog from '../Components/Blog/Blog';
import NewPlants from '../Components/NewPlants/NewPlants';
import NewsLatter from '../Components/NewsLatter/NewsLatter';
import PlantCareMistakes from '../Components/PlantCareMistakes/PlantCareMistakes';
import Promotions from '../Components/Promotions/Promotions';
import SpecialOffer from '../Components/SpecialOffer/SpecialOffer';
import TopRatedItems from '../Components/TopRatedItems/TopRatedItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewPlants></NewPlants>
            <TopRatedItems></TopRatedItems>
            <Blog></Blog>
            <Promotions></Promotions>
            <SpecialOffer></SpecialOffer>
            <NewsLatter></NewsLatter>
            <PlantCareMistakes></PlantCareMistakes>
            <BeginnerPlants></BeginnerPlants>
        </div>
    );
};

export default Home;