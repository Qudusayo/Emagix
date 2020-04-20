import React from 'react'

const form = props => {
    return(
        <form className="form-inline d-flex justify-content-center md-form form-sm mt-0" onSubmit={props.submitted}>
            <i className="fas fa-search" aria-hidden="true"></i>
            <input autoComplete="off" className="form-control form-control-sm ml-3 w-75" name="search" type="text" placeholder="Search Emage"
            aria-label="Search" />
        </form>
    );
}

export  default form