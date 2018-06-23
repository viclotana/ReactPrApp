import React, { Component } from 'react';

class AddProjects extends Component {

    static defaultProps = {
        categories: ['Web Design','Web Development', 'Mobile Development']
    }

    handleSubmit(){
        console.log('submitted');
    }
  render() {
    let categoryOptions = this.props.categories.map(category => {
        return <option key={category} value="category">{category}</option>
    });

    return (
      <div>
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" />
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">{categoryOptions}</select>
          </div>
          <input type="submit" value="submit" />
        </form>    
      </div>
    );
  }
}

export default AddProjects;
