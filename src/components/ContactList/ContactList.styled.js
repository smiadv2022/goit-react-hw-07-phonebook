import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: rgb(225, 210, 225);
  padding: 5px;

  border-radius: 10px;
`;

export const Button = styled.button`
  display: flex;
  padding: 3px;

  background-color: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  color: blue;
  font-size: 1.2rem;
  line-height: 1.25rem;
  font-weight: 600;
  justify-content: center;
  width: 80px;
  margin-left: auto;
  border-radius: 10px;
  border-color: blue;

  :hover {
    background-color: rgba(181, 275, 281, 0.3);
    color: black;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  }
`;
export const List = styled.ul`
  padding: 0px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 1.4rem;
  width: 1000px;
  margin: 0 auto;

  border: 2px solid rgba(33, 33, 33, 0.2);
  padding: 10px;

  background-color: rgba(181, 175, 181, 0.5);
  border-radius: 10px;
`;
export const Item = styled.li`
  display: flex;
  gap: 5px;
  align-items: center;

  padding: 10px;
  font-size: 1.4rem;

  line-height: 1rem;
  border: 1px solid lightgray;

  color: black;
  border-radius: 10px;
`;
export const Title = styled.h2`
  margin: 0px;
  padding: 0px;
  color: #111827;
  font-size: 1.7rem;
  line-height: 2rem;
  font-weight: 600;
  letter-spacing: -0.025em;
`;
export const ModalBtn = styled.button`
  display: flex;
  padding: 3px;

  background: rgba(0, 0, 281, 0.7);

  color: white;
  font-size: 1.2rem;
  line-height: 1.25rem;
  font-weight: 600;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 40px;
  /* margin-left: auto; */
  border-radius: 30px;
  border-color: blue;

  :hover {
    background-color: rgba(181, 275, 281, 0.3);
    color: black;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 6px 24px 0px,
      rgba(0, 0, 0, 0.28) 0px 0px 0px 1px;
  }
`;
export const SectionBtn = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  padding: 10px;
  font-size: 1.6rem;

  line-height: 1rem;
  /* border: 1px solid lightgray; */

  color: blue;
  border-radius: 10px;
`;
