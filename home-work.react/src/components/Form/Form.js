import { Component } from "react";
import { nanoid } from "nanoid";
import { Formik, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Button, Label, FormWrap } from "./Form.styled";

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().required(),
});

const initialValues = {
  name: "",
  number: "",
};

const errorMessage = () => {
  return "The Field is required!!!!";
};

class FormRegistration extends Component {
  state = { name: "", number: "" };

  nanoIdGenerate = nanoid();

  onHandleInputChange = (e) => {
    this.setState({ [e.currentTarget.name]: e.currentTarget.value });
  };

  handleSubmitForm = (values, { resetForm }) => {
    console.log(values.name);
    resetForm();
    // e.preventDefault();

    this.props.onSubmit(values.name, values.number);
  };

  render() {
    return (
      <Formik
        initialValues={initialValues}
        onSubmit={this.handleSubmitForm}
        validationSchema={schema}
      >
        <FormWrap>
          <Label htmlFor="name">Name</Label>
          <Field type="text" name="name" />
          <div>
            <ErrorMessage name="name" />
          </div>
          <label htmlFor="number">Telephone</label>
          <Field type="tel" name="number" />
          <div>
            <ErrorMessage name="number" component={errorMessage} />
          </div>
          <Button type="submit">Add contact</Button>
        </FormWrap>
      </Formik>
    );
  }
}

export default FormRegistration;
