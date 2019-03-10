import React from 'react';
import {Header, Container} from 'semantic-ui-react'

const Home = () => (
  <Container>
    <div className="guy-home" >
      <Header as='h1'>Guy Ferraris 
        <br/>
        Sizzlin Steak House
      </Header>
      <div className="guy-pic">
        <img src="https://media1.fdncms.com/orlando/imager/u/blog/6220103/guyfieri.jpg?cb=1503350375"/>
      </div>
    </div>
  </Container>
)

export default Home