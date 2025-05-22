import Banner from '../Components/Banner/Banner';
import BeginnerPlants from '../Components/BeginnerPlants/BeginnerPlants';
import NewPlants from '../Components/NewPlants/NewPlants';
import PlantCareMistakes from '../Components/PlantCareMistakes/PlantCareMistakes';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewPlants></NewPlants>
            <PlantCareMistakes></PlantCareMistakes>
            <BeginnerPlants></BeginnerPlants>
        </div>
    );
};

export default Home;