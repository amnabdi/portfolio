import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Experience from "../components/experience/Experience";
import WorkTogether from "../components/workTogether/WorkTogether";
import Profession from "../components/profession/Profession";
import "../../index.css";
import Projects from "../components/projects/Projects";

const Home = () => {
  return (
    <div className="relative">
      <div className="introduction-profile-background">
        <div className="content">
          <Introduction />
          <Profile />
        </div>
      </div>
      <div className="bg-soft-white pt-30">
        <WorkProcess />
      </div>
      <Experience />
      <div className="blog-background">
        <Projects />
      </div>
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <div className="bg-soft-white">
        <Profession />
      </div>
      {/* <HappyClients />
      <Testimonial /> */}
      {/* <Contact /> */}
    </div>
  );
};

export default Home;
