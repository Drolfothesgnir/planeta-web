import React from "react";
import classes from "./Portfolio.module.less";
import useFetchedContent from "../../../utilities/useFetchedContent";
import { BASE_URL } from "../../../utilities/http";
import Spinner from "../../Utilities/Spinner/Spinner";
import useWindowSize from "../../../utilities/useWindowSize";
import Mobile from "./Mobile/Mobile";
import ContentPage from "../ContentPage/ContentPage";

const DesktopHorizontal = React.lazy(() =>
  import("./DesktopHorizontal/DesktopHorizontal")
);

const DesktopVertical = React.lazy(() =>
  import("./DesktopVertical/DesktopVertical")
);

const parser = (data) => {
  return data.map(
    ({ title, view_node, nothing, field_image_preview: imgSrc }) => {
      return {
        title,
        link: view_node,
        buttonText: nothing,
        imgSrc: imgSrc ? new URL(imgSrc, BASE_URL) : "",
      };
    }
  );
};

function Portfolio() {
  const { width } = useWindowSize();
  const [inlineViewMode, setViewMode] = React.useState(false);
  const [items, error] = useFetchedContent({
    url: "/portfolio",
    name: "portfolio",
    parser,
  });
  if (error) {
    return error.message;
  }
  return (
    <ContentPage classes={{ contentPage: classes.portfolio }}>
      {items ? (
        <>
          <React.Suspense fallback={<Spinner />}>
            {width >= 768 ? (
              inlineViewMode ? (
                <DesktopHorizontal items={items} />
              ) : (
                <DesktopVertical items={items} />
              )
            ) : (
              <Mobile items={items} />
            )}
          </React.Suspense>
          <div className={classes.viewToggle}>
            <button
              className={`${inlineViewMode ? classes.active : ""} ${
                classes.inline
              }`}
              onClick={() => setViewMode(true)}
            >
              <span />
              <span />
              <span />
              <span />
            </button>
            <button
              className={`${!inlineViewMode ? classes.active : ""} ${
                classes.vertical
              }`}
              onClick={() => setViewMode(false)}
            >
              <span />
            </button>
          </div>
        </>
      ) : (
        <Spinner />
      )}
    </ContentPage>
  );
}

export default Portfolio;
