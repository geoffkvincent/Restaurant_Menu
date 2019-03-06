import React from 'react';
import Form from './Form'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Header, Table, Container, Image } from 'semantic-ui-react'



class Menu extends React.Component {
  state = { items: [], showForm: false }

  componentDidMount() {
    axios.get('/api/menus')
      .then( res => this.setState({ items: res.data }) )
  }

  show() {
    const { items } = this.state
    return (
      <Table basic='very' celled collapsing>
        <Table.Body>
          { items.map( i =>
          <Table.Row key={i.id}>
            <Table.Cell textAlign='left'>
              <Header as='h4' image >
                <Image src={i.image} rounded size='mini' />
                <Header.Content>
                  <Link to={{ pathname: `/menus/${i.id}`, state: {}}}>
                    {i.name}
                  </Link>
                  <Header.Subheader style={{ color: 'grey'}}>
                    {i.description}
                  </Header.Subheader>
                </Header.Content>
              </Header>
            </Table.Cell>
            <Table.Cell>{i.price}</Table.Cell>
          </Table.Row>
          )
        }
        </Table.Body>
      </Table>
    )
  }

  form() {
    return <Form submit={this.submit}/>
  }

  submit = (menu) => {
    const { items } = this.state
    axios.post('/api/menus', { menu } )
      .then( res => this.setState({ items: [res.data, ...items ], showForm: false }) )
  }

  // updateItem = (menu_item) => {
  //   const { id } = this.props.match.params
  //   axios.put(`/api/menus/${id}`, (menu_item) )
  //     .then( ({data}) => {
  //       const items = this.state.items.map(item => {
  //         if (item.id === menu_item.id)
  //           return data
  //             return item
  //       })
  //       this.setState({ items })
  //     })
  // }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  render() {
    const { showForm } = this.state;
    return (
      <Container textAlign='centered'>
        <Header as='h1'>Menu</Header>
        <Button size='mini' onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Add Entree' } </Button>
        { showForm ? this.form() : this.show() }     
      </Container>
    )
  }
}

export default Menu;