import React, { Component } from 'react';

class TodoItem extends Component {
    
  render() {
    //console.log(this.props);
    return (
        
      <li className="Todo">
          <strong>{this.props.todo.title} </strong>
      </li>
    );
  }
}


export default TodoItem;
