
import Navbar from './components/navbar';
import Body from './components/body';
import Card from './components/card';
import BodyPlacements from './components/placements/bodyPlacements';
import Semester from './components/semester/bodySemester';
import Footer from './components/footer';
function App() {
  return (
    <>
      <Navbar />
      <Body />
      <Card />
      <BodyPlacements/>
      <Semester/>
      <Footer />
    </>

  );
}

export default App;
