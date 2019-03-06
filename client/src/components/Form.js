import React from 'react';
import { Form } from 'semantic-ui-react'


class MenuForm extends React.Component {
  defaultValues = { name: '', price: '', description: '', image: '' }
  state = {...this.defaultValues}

  componentDidMount() {
    if (this.props.id)
      this.setState({...this.props})
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const item = { ...this.state }
    const { id, updateItem, submit } = this.props
    if (id) {
      updateItem(item)
      this.setState({ ...this.defaultValues })
    } else {
      submit(item)
      this.setState({ ...this.defaultValues })
    }
  }

  handleChange = (e) => {
    const { target: { name, value }} = e;
    this.setState({ [name]: value })
  }

  render() {
    const { name, price, description, image } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <Form.Input
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleChange}
          required
        />
        <Form.Input
          name="description"
          placeholder="Description"
          value={description}
          onChange={this.handleChange}
        />
        <Form.Input
          name="price"
          placeholder="Price"
          type="number"
          value={price}
          onChange={this.handleChange}
        />
        <Form.Input
          name="image"
          placeholder="Image"
          value={image}
          onChange={this.handleChange}
        />
        <Form.Button>Submit</Form.Button>
      </Form>
    )
  }
}

export default MenuForm;