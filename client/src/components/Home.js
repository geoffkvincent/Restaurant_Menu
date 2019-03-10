import React from 'react';
import {Header, Container, Image} from 'semantic-ui-react'

const Home = () => (
  <Container textAlign='center'>
      <Header as='h1'>
        Guy Ferraris 
        <br/>
        Sizzlin Steak House
      </Header>
      <div className="guy-pic">
        <Image src="https://media1.fdncms.com/orlando/imager/u/blog/6220103/guyfieri.jpg?cb=1503350375"/>
      </div>
  </Container>
)

export default Home