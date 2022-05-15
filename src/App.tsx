import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./redux/hooks";
import {
  useGetCatOnDemandMutation,
  useGetCatQuery,
} from "./redux/services/catsApi";
import { setCat } from "./redux/slice/catsSlice";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";
import { ProgressSpinner } from "primereact/progressspinner";
import { Button } from "primereact/button";

function App() {
  const fetchCat = useGetCatQuery("json=true");
  const dispatch = useAppDispatch();
  const [getCatOnDemand, response] = useGetCatOnDemandMutation();

  // will be rendered on load
  useEffect(() => {
    if (fetchCat.isSuccess) {
      dispatch(setCat(fetchCat.data));
    }
  }, [fetchCat.isSuccess]);

  // will be rendered on demand
  useEffect(() => {
    if (response.isSuccess) {
      dispatch(setCat(response.data));
    }
  }, [response.isSuccess]);

  return (
    <div
      className="App"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      {!fetchCat.isLoading && !response.isLoading ? (
        <div>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/dashboard" element={<Dashboard />}></Route>
            </Routes>
          </BrowserRouter>
          <div className="mt-6 text-center">
            <Button
              label="Fetch a new cat"
              className="p-button-rounded p-button-raised p-button-outlined"
              onClick={async () => {
                getCatOnDemand("json=true");
              }}
              loading={response.isLoading}
            />
          </div>
        </div>
      ) : (
        <ProgressSpinner />
      )}
    </div>
  );
}

export default App;
