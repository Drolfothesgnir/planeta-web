import React from "react";
import useFetchedContent from "../../../utilities/useFetchedContent";

const parser = data => ({
    sidebarTextEl: data[0].nothing,
    items: data.map(({ title, view_node }) => {
        return {
            title,
            link: view_node
        };
    })
});

function Portfolio() {
  const content = useFetchedContent({
    url: "/portfolio",
    name: "portfolio",
    parser
  });
  console.log(content);
  return <div>{
      content ? content.items.map(item => (
          <p key={item.title}>{item.title}</p>
      )) : <h1>Loading...</h1>
  }</div>;
}

export default Portfolio;
