import React from 'react';
import { Link } from 'react-router-dom';

class Menu extends React.Component{
state = {menus: []}

componentDidMount() {
  fetch('/api/menus')
    .then( res => res.json() )
    .then( menus => this.setState({ menus }) )
}

// show() {
//   const { menu_items } = this.state
//   return (
//     <ul>
//       { menu_items.map( p =>
//           <li key={m.id}>
//             <Link to={`/menus/${m.id}`}>
//               {m.name}
//             </Link>
//           </li>
//         )
//       }
//     </ul>
//   )
// }

    addItem = (name, description) => {
      //TODO make api call to rails server to add item
      //TODO update state
    }
  
    updateTodo = (id) => {
      //TODO make api call to update todo
      //TODO update state
    }
  
    deleteTodo = (id) => {
      //TODO make api call to delete todo
      //TODO remove it from state
    }

    render() {
      const {  } = this.state
      return (
        <div>
          <h2>Menu</h2>

        </div>
      )
    }
  }

export default Menu