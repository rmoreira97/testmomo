import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import ProfilePageOwnersView from "./pages/ProfilePageOwnersView";
import Rectangle2 from "./pages/Rectangle2";
import Rectangle6 from "./pages/Rectangle6";
import Rectangle10 from "./pages/Rectangle10";
import Gallery from "./pages/Gallery";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/rectangle":
        title = "";
        metaDescription = "";
        break;
      case "/rectangle1":
        title = "";
        metaDescription = "";
        break;
      case "/rectangle2":
        title = "";
        metaDescription = "";
        break;
      case "/gallery":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<ProfilePageOwnersView />} />
      <Route path="/rectangle" element={<Rectangle2 />} />
      <Route path="/rectangle1" element={<Rectangle6 />} />
      <Route path="/rectangle2" element={<Rectangle10 />} />
      <Route path="/gallery" element={<Gallery />} />
    </Routes>
  );
}
export default App;
