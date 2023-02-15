import {
  RouterProvider
} from "react-router-dom";

import LoadCont from "./context/LodingAuth";
import router from "./router/routers";
function App() {

  return (
    <>
    
     <section>
    {/* <Login /> */}
      {/* <Layout/> */}
      <LoadCont>
          <RouterProvider router={router} />
      </LoadCont>
     </section>
    </>
  );
}

export default App;
