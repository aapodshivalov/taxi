import React, { Component } from 'react';
// import './../App.css';
import { Button, TextField } from '@material-ui/core';
// import Carslist from '../components/Page';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addCarsList, selectCar } from '../actions/index';

const cars = [
    { marketName: 'kio rio', color: 'white', licensePlate: "o001oo", dist_m: '100' },
    { marketName: 'kio rio', color: 'white', licensePlate: "o002oo", dist_m: '200' },
];

class CarsList extends Component {
    showList() {
        const list = this.props.carslist && this.props.carslist.map((item, index) => (
            <li key={index}>{item.licensePlate} /
            <Button
                type="button"
                color="primary"
                onClick={() => this.props.selectCar(item)}>
            addCar
        </Button></li>
        ));
        const error = this.props.error || 'no cars';
        return <div>
        {(list && list.length > 0)
          ? <ul>{list}</ul>
          : <div>{error}</div>}
         </div>;
    }
    render () {
        return (
            <div>
                <Button type="button" color="primary" onClick={() => this.props.addCarsList(cars)}>
                    addlist
                </Button>
                {this.showList()}
                {/* <form
                    id="myform"
                    name="myform"
                    onSubmit={(e,a) => {
                        e.preventDefault();
                        console.log('e,a');
                        console.log('e,a', e.target);
                        console.log('e,a', e.currentTarget);
                        }}
                        // className={classes.root}
                        noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Standard" />
                    <TextField id="filled-basic" label="Filled" variant="filled" />
                    <TextField id="outlined-basic" label="Outlined" variant="outlined" />
                </form>
                <Button type="submit" form="myform" variant="contained" color="primary">
                    Hello World
                </Button> */}
            </div>
        );
    }
}

function mapStateToProps (state) {
    return {
        carslist: state.carslist
    };
}

function matchDispatchToProps (dispatch) {
    return bindActionCreators({ addCarsList: addCarsList, selectCar }, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(CarsList);
