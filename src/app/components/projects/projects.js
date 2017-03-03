import React, {Component} from 'react';
import axios from 'axios';

import {Project} from './project';

export class Projects extends Component {
  constructor() {
    super();
    this.state = {
      projects: []
    };
  }

  componentDidMount() {
    axios
      .get('app/components/projects/projects.json')
      .then(response => {
        this.setState({
          projects: response.data
        });
      });
  }

  render() {
    return (
      <div className="row center-xs margin-none">
        {this.state.projects.map((project, i) => (
          <div key={i} className="col-xs-12 col-sm-6 padding-none tile">
            <Project project={project}/>
          </div>
        ))}
      </div>
    );
  }
}
