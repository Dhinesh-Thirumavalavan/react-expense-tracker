import styled from 'styled-components'
import Home from './Componenets/Home';

const Container=styled.div`
display:flex;
flex-direction:column;
align-items:center;
margin:30px 0 20px;
font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`
const Header=styled.span`
color:black;
font-size:25px;
font-weight:bold;

`
function App() {
  return (
    <Container >
     <Header>Expense Tracker</Header>
     <Home/>
    </Container>
  );
}

export default App;
