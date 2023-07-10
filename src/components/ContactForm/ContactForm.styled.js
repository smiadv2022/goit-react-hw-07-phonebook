import styled from '@emotion/styled';
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  margin: 0 auto;
  display: flex;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  justify-content: center;
  align-items: center;

  background: radial-gradient(
    circle,
    rgba(225, 210, 225, 1) 0%,
    rgba(181, 175, 181, 1) 100%
  );
`;
export const WrapperForm = styled.div`
  position: relative;
  /* display: flex; */
  align-items: center;
  /* flex-direction: column; */
  justify-content: space-between;
  gap: 10px;
  /* background-color: rgb(225, 210, 225); */
  padding: 20px;

  border-radius: 10px;
  width: 1200px;
`;
export const Form = styled.form`
  border: 2px solid rgba(33, 33, 33, 0.2);
  padding: 10px;

  background-color: rgba(181, 175, 181, 0.5);
  border-radius: 10px;
`;
export const Label = styled.label`
  display: block;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;
export const InputContact = styled.input`
  display: block;
  width: 80%;
  font-size: 1.4rem;
  padding: 15px;
  margin-bottom: 10px;
  overflow: hidden;
  border-radius: 10px;
  outline: transparent;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;

  background-color: rgba(181, 175, 181, 0.5);
  background-color: rgba(243, 237, 243, 0.937);
  cursor: pointer;
  &:hover {
    background-color: rgba(181, 275, 281, 0.3);
    color: black;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  }
`;

export const Button = styled.button`
  display: flex;
  padding: 0.375rem 0.75rem;

  background-color: rgba(181, 175, 181, 0.9);
  background-color: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  color: white;
  background-color: blue;
  font-size: 1.5rem;
  line-height: 1.25rem;
  font-weight: 600;
  justify-content: center;
  width: 150px;
  margin-top: 25px;
  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
  border-color: blue;

  :hover {
    background-color: rgba(231, 120, 131, 0.15);

    color: black;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  }
`;
export const ButtonClose = styled.button`
  display: flex;
  padding: 10px 10px;
  position: absolute;
  top: 0px;
  right: 0px;
  margin: 0px;

  background-color: rgba(181, 175, 181, 0.9);
  background-color: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  color: white;
  background-color: blue;
  font-size: 1.5rem;
  line-height: 1.25rem;
  font-weight: 600;
  justify-content: center;
  /* width: 150px;
  margin-top: 25px; */
  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
  border-color: blue;

  :hover {
    background-color: rgba(231, 120, 131, 0.15);

    color: black;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  }
`;
