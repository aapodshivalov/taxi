import React, { Component } from 'react';
import { Button, TextField } from '@material-ui/core';
import { connect } from 'react-redux';

class Car extends Component {
    render () {
        if (!this.props.car) {
            return <p>no car selected</p>
        }
        return (
            <div>
                <p>Name: {this.props.car.marketName}</p>
                <p>License Plate: {this.props.car.licensePlate}</p>
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        car: state.car
    };
}

// function matchDispatchToProps (dispatch) {
//     return bindActionCreators({ addCarsList: addCarsList }, dispatch);
// }

export default connect(mapStateToProps)(Car);
