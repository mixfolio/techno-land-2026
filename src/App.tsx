import {
  AboutProduct,
  Cases,
  Footer,
  Functions,
  Future,
  Header,
  Hero,
  OurTeam,
  Results,
  Tools,
  Usage,
  Workflow,
} from "./components";
import { Contacts } from "./components/contacts/Contacts";

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <AboutProduct />
      <Workflow />
      <Functions />
      <Usage />
      <Cases />
      <Results />
      <Tools />
      <Future />
      <OurTeam />
      <Contacts />
      <Footer />
    </div>
  );
};

export default App;
