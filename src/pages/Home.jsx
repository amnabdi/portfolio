import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Experience from "../components/experience/Experience";
import Projects from "../components/projects/Projects";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";

const Home = () => {
  return (
    <>
      <Introduction />
      <Profile />
      <WorkProcess />
      <Experience />
      <Projects />
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <Profession />
    </>
  );
};

export default Home;
