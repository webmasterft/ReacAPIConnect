import React, { Component } from "react";
import axios from "axios";
import { Card } from "./cards";
import { Search } from "./searchbox";

class App extends Component {
  constructor(props) {
    super(props);
    this.onChildClicked = this.onChildClicked.bind(this);
    this.state = {
      cod: "",
      city: "Quito",
      items: [],
      isLoaded: false
    };
  }
  onChildClicked(value) {
    this.setState({ city: value });
    this.getWeather(value);
    console.log(this.state);
  }

  getWeather = async value => {
    console.log(value);
    return await axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast/?q=${value}&&units=metric&appid=55f878d73891e78f48f3d80c558ea579`
      )
      .then(data => {
        var dataChuncked = [],
          dataFetched = data.data;
        for (let i = 1; i < dataFetched.list.length; i += 8) {
          dataChuncked.push(dataFetched.list[i]);
        }
        this.setState({
          isLoaded: true,
          city: dataFetched.city.name,
          items: dataChuncked
        });
      })
      .catch(err => console.log(err));
  };

  componentDidUpdate(prevProps, prevState) {
    //this.getWeather(this.state.city);
    console.log("here");
  }
  componentDidMount() {
    this.getWeather(this.state.city);
  }

  render() {
    var { isLoaded, items, city } = this.state;
    if (!isLoaded) {
      return <div>Loading...</div>;
    }
    return (
      <div className="App">
        <div className="container">
          <Search func={this.onChildClicked} />
          <p className="cityName">{city}</p>
          {items.map(item => (
            <Card key={item.dt} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
