import { Component } from "react";
import FormComponent from "./FormComponent";
import "./styles.css";

class FormContainer extends Component {
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

  render() {
    return <FormComponent handleChange={this.handleChange} data={this.state} />;
    //an alternative to passing data={this.state}, is to use object spread operator {...this.state} so long as correct ES version is supported. The advantage here is that you don't have to specify props.data.firstName, for example, and just say props.firstName. However, props.data.child is a bit easier to trace and follow, and is a perfectly accepted way to do this, so I will stick to this.
  }
}

export default FormContainer;
