import {
  AboutProduct,
  Functions,
  Future,
  Header,
  OurTeam,
  Results,
  Tools,
  Usage,
  Workflow,
} from "./components";

const App = () => {
  return (
    <div>
      <Header />
      <AboutProduct />
      <Workflow />
      <Functions />
      <Usage />
      <Results />
      <Tools />
      <Future />
      <OurTeam />
    </div>
  );
};

export default App;
