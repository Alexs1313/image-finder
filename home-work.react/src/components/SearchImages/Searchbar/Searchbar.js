import { CiSearch } from "react-icons/ci";
import {
  Header,
  SearcForm,
  SearchButton,
  SearchFormButtonLabel,
  SearcInput,
} from "./Searchbar.styled";
import { Formik } from "formik";

const Searchbar = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    if (values.name.trim() === "") {
      alert("empty field");
      return;
    }
    onSubmit(values.name);
    resetForm();
  };

  return (
    <Header className="searchbar">
      <Formik initialValues={{ name: "" }} onSubmit={handleSubmit}>
        <SearcForm className="form">
          <SearchButton type="submit" className="button">
            <CiSearch />
            <SearchFormButtonLabel className="button-label">
              Search
            </SearchFormButtonLabel>
          </SearchButton>

          <SearcInput
            className="input"
            type="text"
            name="name"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearcForm>
      </Formik>
    </Header>
  );
};

export default Searchbar;
