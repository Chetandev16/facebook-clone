import React from "react";
import "./Widget.css";
const Widget = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fneedforspeed&tabs=timeline&width=340&height=3500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=204490191604431"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default Widget;
