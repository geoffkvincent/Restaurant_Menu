import React from 'react';
import axios from 'axios';
import Form from './Form'

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
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>{price}</h3>
      </div>
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
        <button onClick={this.toggleEdit}>{ edit ? 'Cancel' : 'Edit' }</button>
      </div>
    )
  }
}

export default MenuItem;