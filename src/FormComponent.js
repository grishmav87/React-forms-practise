import React from "react";

export default function FormComponent(props) {
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="First Name"
          autoComplete="off"
          name="firstName"
          value={props.data.firstName}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Last Name"
          autoComplete="off"
          name="lastName"
          value={props.data.lastName}
          onChange={props.handleChange}
        />
        <br />
        <input
          type="text"
          placeholder="Age"
          autoComplete="off"
          name="age"
          value={props.data.age}
          onChange={props.handleChange}
        />
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={props.data.gender === "Female"}
            onChange={props.handleChange}
          />{" "}
          Female
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={props.data.gender === "Male"}
            onChange={props.handleChange}
          />{" "}
          Male
        </label>
        <br />
        <label>
          <strong>Travelling to:</strong>
          <select name="destination" onChange={props.handleChange}>
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
              checked={props.data.isVegetarian}
              name="isVegetarian"
              onChange={props.handleChange}
            />{" "}
            Vegetarian
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={props.data.isKosher}
              name="isKosher"
              onChange={props.handleChange}
            />{" "}
            Kosher
          </label>
          <br />
          <label>
            <input
              type="checkbox"
              checked={props.data.isLactoseFree}
              name="isLactoseFree"
              onChange={props.handleChange}
            />{" "}
            Lactose free
          </label>
        </label>
        <br />
        <br />
        <button>Submit</button>
      </form>

      <h2>
        Name:
        {props.data.firstName} {props.data.lastName}
      </h2>
      <h2>Age: {props.data.age}</h2>
      <h2>Gender: {props.data.gender}</h2>
      <h2>Travelling to: {props.data.destination}</h2>
      <h2>Dietary restrictions:</h2>
      <ul className="list">
        <li>{props.data.isVegetarian ? "Vegetarian" : null}</li>
        <li>{props.data.isKosher ? "Kosher" : null}</li>
        <li>{props.data.isLactoseFree ? "Lactose-free" : null}</li>
      </ul>
    </div>
  );
}
