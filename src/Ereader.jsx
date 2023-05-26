import { useRef } from "react";
import { useParams } from "react-router-dom";

const Ereader = () => {
  const { id } = useParams();
  
  const viewerCanvas = useRef(null);
  // eslint-disable-next-line no-undef
  google.books.load();

  function initialize() {
    // eslint-disable-next-line no-undef
    var viewer = new google.books.DefaultViewer(
      document.getElementById("viewerCanvas")
    );
    viewer.load(id);
  }

  // eslint-disable-next-line no-undef
  google.books.setOnLoadCallback(initialize);
  return (
    <div
      ref={viewerCanvas}
      id="viewerCanvas"
      style={{ width: "1000px", height: "700px" }}
    ></div>
  );
};

export default Ereader;
