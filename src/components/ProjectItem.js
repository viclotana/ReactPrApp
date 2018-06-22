import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    //console.log(this.props);
    return (
      <li className="Projects">
          <strong>{this.props.project.title} </strong>: {this.props.project.category}
        {this.props.test}
      </li>
    );
  }
}

export default ProjectItem;
