import React from 'react';
import Form from './Form'
import { Link } from 'react-router-dom';
import axios from 'axios';



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
    let { items }  = this.state;
      return (
        <ul>
          { items.map( i =>
              <li key={i.id}>
                <Link to={`/menus/${i.id}`}>{i.name}</Link>
              </li>
            )
          }
        </ul>
      )
  }
}

export default Menu;