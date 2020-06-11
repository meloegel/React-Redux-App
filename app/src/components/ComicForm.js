import React from 'react';
import {connect} from 'react-redux';
import {getData} from '../actions';

const ComicForm = props => {

    const handleGetData = e => {
        e.preventDefault();
        props.getData();
    };

    return (
        <>
            {props.isFetchingData ? (
                <div>**We are fetching data**</div>
            ) : (
                <button onClick={handleGetData}>Get Random Dog</button>
            )}
        </>
    );
};


const mapStateToProps = state => {
    return {
        isFetchingData: state.isFetchingData
    }
}

export default connect(mapStateToProps, { getData })(ComicForm);