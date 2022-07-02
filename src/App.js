import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import "./App.css";
function App() {
  //let url ="https://api.openweathermap.org/data/2.5/weather?q=Dehli,ind&appid=6e9f8a2650923de77eb78a76e2e3ef74";

  const [city, setCity] = useState("");
  const [data, setData] = useState("");

  const handleChange = (e) => {
    setCity(e.target.value);
    console.log(city);
  };

  const apiKey = "6e9f8a2650923de77eb78a76e2e3ef74";
  const getWeatherDetail = (cityName) => {
    if (!cityName) return;
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
    axios
      .get(apiURL)
      .then((res) => {
        // console.log("response", res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };

  const handleSearch = () => {
    getWeatherDetail(city);
    setCity("");
  };

  useEffect(() => {
    getWeatherDetail("Islamabad");
  }, []);

  return (
    <div className="App">
      <div className="col-md-12 mx-auto intro">
        <h1 className="text-center p-5  text-white">Weather App</h1>
        <div className="col-md-6 mx-auto">
          <input
            type="text"
            value={city}
            onChange={(e) => handleChange(e)}
            className="form-control"
            placeholder="Search City..."
          />
          <button
            type="button"
            onClick={handleSearch}
            className="btn btn-primary mt-3 mb-5 btn-search"
          >
            Search
          </button>
        </div>
      </div>

      <div className="col-md-6 mx-auto mt-5">
        <div className="shadow rounded weatherBoxResult">
          <div className=" d-flex justify-content-center">
            <img
              className="img"
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
            ></img>
          </div>

          <h5 className="weatherCity">{data?.name}</h5>
          <h6 className="weatherTemp">
            {(data?.main?.temp - 273.15).toFixed(2)} °C
          </h6>
        </div>
      </div>
    </div>
  );
}

export default App;

//https://api.openweathermap.org/data/2.5/weather?q=Dehli,ind&appid=6e9f8a2650923de77eb78a76e2e3ef74
