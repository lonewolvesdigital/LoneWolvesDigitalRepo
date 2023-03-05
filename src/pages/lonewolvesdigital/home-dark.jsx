import React from "react";
import Navbar from "../../components/Navbar/navbar";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";
import AboutUs from "../../components/About-us/about-us";
import Services from "../../components/Services/services";
import Works from "../../components/Works/works";
import Services5 from "../../components/Services5/services5";
import Numbers from "../../components/Numbers/numbers";
import VideoWithTestimonials from "../../components/Video-with-testimonials/video-with-testimonials";
import Clients from "../../components/Clients/clients";
import Blogs1 from "../../components/blogs/Blogs1/blogs1";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer2 from "../../components/Footer2/footer2";
import DarkTheme from "../../layouts/Dark";

const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme mobileappstyle>
       <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <AboutUs />
        {/* <Services /> */}
        <Services5  />
        <Works />
        <Numbers />
        <VideoWithTestimonials />
        <Clients theme="dark" />
        <Blogs1 />
        <CallToAction />
        <Footer2 />
      </div>
    </DarkTheme>
  );
};

export default Homepage1;