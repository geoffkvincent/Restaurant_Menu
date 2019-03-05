import React from 'react';
import axios from 'axios';
import Form from './Form'
import {Button, Card, Container, Icon} from 'semantic-ui-react'

class MenuItem extends React.Component {
  state = { menu_item: {}, editing: false }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.params.id}`)
      .then( res => this.setState({ menu_item: res.data }) )
  }

  toggleEdit = () => this.setState({ editing: true })
    

  updateItem = (menu) => {
    debugger
    axios.put(`/api/menus/${this.props.match.params.id}`, { menu })
      .then( res => this.setState({ menu_item: res.data, editing: false }) );
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

  deleteItem = () => {
    const  { id }  = this.props.match.params
    axios.delete(`/api/menus/${id}`)
      .then( () => {
        this.props.history.push('/menu')
      })
  }

  show() {
    const { menu_item: { name, description, price, }} = this.state;
    return (
      <Container>
        <Card centered>
          <Card.Content>
            <Card.Header>
              <h1>{name}</h1>
            </Card.Header>
            <Card.Description>
              <h3>{description}</h3>
            </Card.Description>
            <Card.Meta>
              <h3>{price}</h3>
            </Card.Meta>
            <Card.Content extra>
              <Button 
                onClick={this.toggleEdit}
                size='mini'
              >
                { this.state.edit ? 'Cancel' : 'Edit' }
              </Button>
              <Icon 
                onClick={this.deleteItem}
                name='trash'
              />
            </Card.Content>
          </Card.Content>
        </Card>
      </Container>
    )
  }

  edit() {
    return (
      <Form 
        {...this.state.menu_item}
        submit = {this.submit} 
        id = {this.props.match.params.id} 
        updateItem = {this.updateItem}
      />
    )
  }

  render() {
    const { editing } = this.state;
    return (
      <div>
        { editing ? this.edit() : this.show() }
      </div>
    )
  }
}

export default MenuItem;
