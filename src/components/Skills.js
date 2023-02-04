
import logo from '../assets/img/logo hextech.png';
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Video from "../assets/img/video.jpeg"
import graphic from "../assets/img/graphic.jpeg"
import content from "../assets/img/content.jpeg"
import  Word  from '../assets/img/word press.jpeg';
import app from "../assets/img/app.jpeg"
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <p>HexTech Developers offers a wide range of services in software development, including web development, mobile app development,and desktop application development, as well as graphics design, video editing, and content writing services.</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={Video} alt="Image" />
                                <h5>Video Editing</h5>
                            </div>
                            <div className="item">
                                <img src={content} alt="Image" />
                                <h5>Content Writing</h5>
                            </div>
                            <div className="item">
                                <img src={graphic} alt="Image" />
                                <h5>Graphic Designing</h5>
                            </div>
                            <div className="item">
                                <img src={app} alt="Image" />
                                <h5>App Development</h5>
                            </div>
                            <div className="item">
                                <img src={Word} alt="Image" />
                                <h5>Wordpress Development</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
