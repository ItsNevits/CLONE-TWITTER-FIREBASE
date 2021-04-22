import Sidebar from "../components/Sidebar";
import ContentHome from "../components/ContentHome";
import Widgets from "../components/Widgets";

const Home = () => {
  return (
    <div id='container-home'>
      <Sidebar />
      <ContentHome />
      <Widgets />
    </div>
  );
};

export default Home;
