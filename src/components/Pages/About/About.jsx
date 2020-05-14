import React from "react";
import Spinner from "../../Utilities/Spinner/Spinner";
import useFetchedContent from "../../../utilities/useFetchedContent";
import PageSlider from "../../Utilities/PageSlider/PageSlider";
import ContentPage from "../ContentPage/ContentPage";
import parser from "./parser";
import FirstSlide from "./FirstSlide";
import SecondSlide from "./SecondSlide";
import ThirdSlide from "./ThirdSlide";
import FourthSlide from "./FourthSlide";

function About(props) {
  const [content, error] = useFetchedContent({
    url: "/block-layout?path=" + props.match.url,
    parser,
    name: "about",
  });

  if (error) {
    return error.message;
  }

  return (
    <ContentPage menuItem={"about"}>
      <PageSlider>
        {content ? (
          [
            <FirstSlide key={"first"} content={content[0]} />,
            <SecondSlide key={"second"} content={content[1]} />,
            <ThirdSlide key={"third"} content={content[2]} />,
            <FourthSlide key={"fourth"} content={content[3]} />,
          ]
        ) : (
          <Spinner />
        )}
      </PageSlider>
    </ContentPage>
  );
}

export default About;
