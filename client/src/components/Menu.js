import React from 'react';
import Form from './Form'
import { Link } from 'react-router-dom';
import axios from 'axios';
import {Button} from 'semantic-ui-react'



class Menu extends React.Component {
  state = { items: [], showForm: false }

  componentDidMount() {
    axios.get('/api/menus')
      .then( res => this.setState({ items: res.data }) )
  }

  show() {
    const { items } = this.state
    return (
      <ul>
        { items.map( i =>
            <li key={i.id}>
              <Link to={`/menus/${i.id}`}>
                {i.name}
              </Link>
            </li>
          )
        }
      </ul>
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
        <h2>Menu Item</h2>
        <button onClick={this.toggleForm}>{ showForm ? 'Hide' : 'Show' } form</button>
        { showForm ? this.form() : this.show() }     
      </div>
    )
  }
}

export default Menu;