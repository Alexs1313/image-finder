import { Component } from "react";
import { ModalBackdrop, ModalContent } from "../Modal/Modal.styled";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImg, alt } = this.props;
    return createPortal(
      <ModalBackdrop onClick={this.handleBackdropClick}>
        <ModalBackdrop>
          <ModalContent src={largeImg} alt={alt} width="600" />
        </ModalBackdrop>
      </ModalBackdrop>,
      modalRoot
    );
  }
}

export default Modal;
