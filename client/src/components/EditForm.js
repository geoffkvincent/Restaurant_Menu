import React from 'react';
import { Form } from 'semantic-ui-react'


class MenuForm extends React.Component {
  defaultValues = { name: '', price: '', description: ''}
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id)
      this.setState({...this.props})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const item = { ...this.state }
    this.props.submit(item)
    this.setState({ ...this.defaultValues })
  }

  handleChange = (e) => {
    const { target: { name, value }} = e;
    this.setState({ [name]: value })
  }

  render() {
    const { name, price, description } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <input
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <input
          name="price"
          placeholder="Price"
          type="number"
          value={price}
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default MenuForm;