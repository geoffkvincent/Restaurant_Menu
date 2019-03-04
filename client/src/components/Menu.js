import React from 'react';
import Form from './Form'
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Header, Table } from 'semantic-ui-react'



class Menu extends React.Component {
  state = { items: [], showForm: false }

  componentDidMount() {
    axios.get('/api/menus')
      .then( res => this.setState({ items: res.data }) )
  }

  show() {
    const { items } = this.state
    return (
      <Table>
        <Table.Body>
          { items.map( i =>
          <Table.Row key={i.id}>
            <Table.Cell>
              <Header.Content>
                <Link to={`/menus/${i.id}`}>
                  {i.name}
                </Link>
              </Header.Content>
            </Table.Cell>
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

  submit = (item) => {
    const { items } = this.state
    axios.post('/api/menus', { item } )
      .then( res => this.setState({ items: [res.data, ...items ], showForm: false }) )
  }

  toggleForm = () => {
    this.setState( state => {
      return { showForm: !state.showForm }
    })
  }

  render() {
    const { showForm } = this.state;
    return (
      <div>
        <Header>Menu</Header>
        <Button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Add Entree' } </Button>
        { showForm ? this.form() : this.show() }     
      </div>
    )
  }
}

export default Menu;