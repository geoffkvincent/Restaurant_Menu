import React from 'react';
import {Header, Container, Image} from 'semantic-ui-react'

const Home = () => (
  <Container textAlign='center'>
    <div className="guy-home" >
      <Header textAlign='center' as='h1'>Guy Ferraris 
        <br/>
        Sizzlin Steak House
      </Header>
      <div className="guy-pic">
        <Image src="https://media1.fdncms.com/orlando/imager/u/blog/6220103/guyfieri.jpg?cb=1503350375"/>
      </div>
    </div>
  </Container>
)

export default Home