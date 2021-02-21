
import React from 'react';
import UserCard from '../../components/User-Card/usercard.component'
import ProjectGrid from '../../components/Project-Grid/projects.component'

import {connect} from 'react-redux'

const ProjectsPage =(props) => (
    <div className='projects-page'>
        <UserCard userData={props.userData}></UserCard>
        <ProjectGrid token={props.userData.token}></ProjectGrid>
    </div>
);

function mapStateToProps(state)
{
    return {userData: state.reducer.userData[0]}
}
export default connect(mapStateToProps)(ProjectsPage); ;