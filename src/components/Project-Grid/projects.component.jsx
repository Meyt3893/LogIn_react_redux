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
          <div>
          <h1> Projects Detailes:</h1>
                <div>
                  <h4>ID:</h4>
                  <h5>{this.props.projectsData.length? this.props.projectsData[0].id:null}</h5> 
                  <h4>Name:</h4>
                  <h5>{this.props.projectsData.length? this.props.projectsData[0].name:null}</h5> 
                  <h4>Score:</h4>
                  <h5>{this.props.projectsData.length? this.props.projectsData[0].score:null}</h5>       
                </div>
            </div>
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



