import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

const Ereader = () => {
  const { id } = useParams();
  const [loaded, setLoaded] = useState(false);
  const viewerCanvas = useRef();

  useEffect(() => {
    const scriptTag = document.createElement("script");
    scriptTag.src = "https://www.google.com/books/jsapi.js";
    scriptTag.addEventListener("load", () => setLoaded(true));
    scriptTag.id = "google-script";
    document.body.appendChild(scriptTag);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    else {
      if (window.viewer) {
        let viewer = new window.google.books.DefaultViewer(
          viewerCanvas.current
        );
        viewer.load(id);
      } else {
        window.google.books.load();
        window.google.books.setOnLoadCallback(() => {
          let viewer = new window.google.books.DefaultViewer(
            viewerCanvas.current
          );
          window.viewer = viewer;
          viewer.load(id);
        });
      }
    }
  }, [loaded]);
  return (
    <div>
      {loaded ? (
        <div>
          <div
            ref={viewerCanvas}
            id="viewerCanvas"
            style={{ width: "1000px", height: "700px" }}
          ></div>
        </div>
      ) : (
        "Script not loaded"
      )}
    </div>
  );
};

export default Ereader;
