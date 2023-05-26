import { useRef } from "react";


const Ereader = () => {
  const viewerCanvas = useRef(null);
  google.books.load();

  function initialize() {
    var viewer = new google.books.DefaultViewer(
      document.getElementById("viewerCanvas")
    );
    viewer.load("ISBN:0738531367");
  }

  google.books.setOnLoadCallback(initialize);
  return <div ref={viewerCanvas} id="viewerCanvas" style={{width: "1000px", height: "700px"}}></div>;
};

export default Ereader;
