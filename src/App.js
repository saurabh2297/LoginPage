  
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";
import suggest from './suggest.png'

console.log(suggest)

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${suggest});
`;

function App() {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
}

export default App;