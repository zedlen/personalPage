import styled from "styled-components";

export const SInput = styled.input`
  padding: .5rem .1rem;
  outline: none;
  width: ${ ({ width }) => width ? width : '100%' };
  border-radius: .2rem;
  border: 1px solid #afafaf;
  margin: .5rem 0;
  font-size: 1.05rem;
`;
