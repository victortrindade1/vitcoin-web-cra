import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  font-size: 16px;

  .switch {
    position: relative;
    display: inline-block;
    width: 60px;
    height: 15px;

    margin-right: 10px;
  }

  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 13px;
    width: 30px;
    left: 1px;
    bottom: 1px;
    background-color: ${(props) => (props.checked ? "#44d244" : "#ff003f")};
    -webkit-transition: 0.4s;
    transition: 0.4s;
  }

  input:checked + .slider {
    background-color: ${(props) => props.theme.main};
  }

  input:focus + .slider {
    box-shadow: 0 0 1px ${(props) => props.theme.main};
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(28px);
    -ms-transform: translateX(28px);
    transform: translateX(28px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 15px;
  }

  .slider.round:before {
    border-radius: 15px;
  }
`;
