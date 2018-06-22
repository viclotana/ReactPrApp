import React, { Component } from 'react';

class ProjectItem extends Component {
  render() {
    //console.log(this.props);
    return (
      <li className="Projects">
          
        {this.props.test}
      </li>
    );
  }
}

export default ProjectItem;
