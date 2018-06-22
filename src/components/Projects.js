import React, { Component } from 'react';

class Projects extends Component {
  render() {
    let projectItems;
    if (this.props.projects){
      projectItems = this.props.projects.map(project => {
        console.log(project);
      });
    }
    //console.log(this.props);
    return (
      <div className="Projects">
        My Projects
        {this.props.test}
      </div>
    );
  }
}

export default Projects;
