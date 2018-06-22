import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    //console.log(this.props);
    return (
      <li className="Projects">
          {this.props.project.title} - {this.props.project.category}
        {this.props.test}
      </li>
    );
  }
}

export default ProjectItem;
