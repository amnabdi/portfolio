import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Experience from "../components/experience/Experience";
import WorkTogether from "../components/workTogether/WorkTogether";
import Projects from "../components/blog/Projects";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

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
      <div className="bg-gray-900">
        <WorkTogether />
      </div>
      <div className="blog-background">
        <Projects />
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
