import { LoadMore } from "./Button.styled";

const Button = ({ onClick }) => {
  return (
    <LoadMore type="button" onClick={onClick}>
      Load More
    </LoadMore>
  );
};

export default Button;
