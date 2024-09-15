import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import Card2 from './Card2.jsx'
import Button from './Button.jsx'
import Student from './student.jsx'

function App() {

  return(
     <>
          <Header/>
          <Card/>
          <Button/>
          <Card2/>
          <Student name="Spongebob" age={30} Roll={true}/>
          <Food/>
          <Footer/>
    </>
  ); 
}

 
export default App
