import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProjects } from '../../redux/user/user.actions';


class ProjectGrid extends Component {

    constructor(props) {
        super(props);
      }

      componentDidMount()
      {
        this.props.fetchProjects(this.props.token);
      }

      render()
      {
       
        return(
          <div>{this.props.projectsData}</div>
        );

      }
 
}


const mapStateToProps = (state) => {
  return {
    projectsData: state.projectsReducer.projectsData
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjects: (token) => dispatch(fetchProjects(token))
  };
}





  export default connect(mapStateToProps,mapDispatchToProps)(ProjectGrid);



