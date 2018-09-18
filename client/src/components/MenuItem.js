import React from 'react';
import axios from 'axios';

class MenuItem extends React.Component {
  state = { menu_item: {} }

  componentDidMount() {
    axios.get(`/api/menus/${this.props.match.params.id}`)
      .then( res => this.setState({ menu_item: res.data }) )
  }

  render() {
    const { menu_item: { name, description, price }} = this.state;
    return (
      <div>
        <h1>{name}</h1>
        <h3>{description}</h3>
        <h3>${price}</h3>
      </div>
    )
  }
}

export default MenuItem;