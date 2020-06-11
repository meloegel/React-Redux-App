import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { getData } from '../actions/index'

const DailyComic = props => {

    useEffect(() => {
        getData()
    },[getData])
    

    return (
        <>
        {props.error ? <div className='error'>{props.error}</div> : <div className='img'><img src={props.dailyComic} alt={props.alt}/></div>}
        </>
    )
}

const mapStateToProps = state => {
    return {
        dailyComic: state.dailyComic,
        error: state.error
    }
}

export default connect(mapStateToProps, {getData})(DailyComic);