import React from "react";
import { connect } from "react-redux";
import { getSmurf } from "../actions/actions"
import Smurf from "./Smurf"

const SmurfList = props => {
    console.log("SMURFS", props)
    return (
        <>
        <button onClick={() => props.getSmurf()} >Smurfy</button>
        <div>
            {props.smurfs.map(smurf => (
                <Smurf name={smurf.name} height={smurf.height} age={smurf.age} id={smurf.id}/>
            ))}
        </div>
        </>
    )
}

const mapStateToProps = {
    getSmurf
}

export default connect(
    state=> state,
    mapStateToProps
)(SmurfList)