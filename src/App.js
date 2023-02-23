import { Component } from "react";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      gender: "",
      destination: "",
      isVegetarian: false,
      isKosher: false,
      isLactoseFree: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    // Apparently, to avoid a difficult to debug bug, one avoids calling values directly as below, and instead does the following.
    // this.setState({
    //   [event.target.name]: event.target.value
    // });
    const { name, value, type, checked } = event.target;
    type === "checkbox"
      ? this.setState({ [name]: checked })
      : this.setState({ [name]: value });
  }

  handleClick() {
    this.handleChange();
  }

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="First Name"
            autoComplete="off"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Last Name"
            autoComplete="off"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <br />
          <input
            type="text"
            placeholder="Age"
            autoComplete="off"
            name="age"
            value={this.state.age}
            onChange={this.handleChange}
          />
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={this.state.gender === "Female"}
              onChange={this.handleChange}
            />{" "}
            Female
          </label>
          <br />
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={this.state.gender === "Male"}
              onChange={this.handleChange}
            />{" "}
            Male
          </label>
          <br />
          <label>
            <strong>Travelling to:</strong>
            <select name="destination" onChange={this.handleChange}>
              <option value="">--Please select a destination--</option>
              <option value="Melbourne">Melbourne</option>
              <option value="Broome">Broome</option>
              <option value="Darwin">Darwin</option>
            </select>
          </label>
          <br />
          <label>
            <strong>Dietary restrictions:</strong>
            <br />
            <label>
              <input
                type="checkbox"
                checked={this.state.isVegetarian}
                name="isVegetarian"
                onChange={this.handleChange}
              />{" "}
              Vegetarian
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                checked={this.state.isKosher}
                name="isKosher"
                onChange={this.handleChange}
              />{" "}
              Kosher
            </label>
            <br />
            <label>
              <input
                type="checkbox"
                checked={this.state.isLactoseFree}
                name="isLactoseFree"
                onChange={this.handleChange}
              />{" "}
              Lactose free
            </label>
          </label>
          <br />
          <br />
          <button onClick={this.handleClick}>Submit</button>
        </form>

        <h2>
          Name:
          {this.state.firstName} {this.state.lastName}
        </h2>
        <h2>Age: {this.state.age}</h2>
        <h2>Gender: {this.state.gender}</h2>
        <h2>Travelling to: {this.state.destination}</h2>
        <h2>Dietary restrictions:</h2>
        <ul className="list">
          <li>{this.state.isVegetarian ? "Vegetarian" : null}</li>
          <li>{this.state.isKosher ? "Kosher" : null}</li>
          <li>{this.state.isLactoseFree ? "Lactose-free" : null}</li>
        </ul>
      </div>
    );
  }
}

export default App;
