import React from 'react';
import axios from 'axios';
import Form from './Form'
import {Button, Card} from 'semantic-ui-react'

class MenuItem extends React.Component {
  state = { menu_item: {} }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.params.id}`)
      .then( res => this.setState({ menu_item: res.data }) )
  }

  toggleEdit = () => {
    this.setState( state => {
      return { edit: !this.state.edit }
    });
  }

  submit = (menu_item) => {
    axios.put(`/api/menus/${this.props.match.params.id}`, { menu_item })
      .then( res => this.setState({ menu_item: res.data, edit: false }) );
  }

  show() {
    const { menu_item: { name, description, price }} = this.state;
    return (
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
            >
              { this.state.edit ? 'Cancel' : 'Edit' }
            </Button>
          </Card.Content>
        </Card.Content>
      </Card>
    )
  }

  edit() {
    return <Form {...this.state.product} submit={this.submit} />
  }

  render() {
    const { edit } = this.state;
    return (
      <div>
        { edit ? this.edit() : this.show() }
      </div>
    )
  }
}

export default MenuItem;
