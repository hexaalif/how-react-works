import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props.country);
    const {area, region, capital, name, flags} = props.country;
    return (
        <div className='country rounded'>
            <h2>Country Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <h4>Capital: {capital}</h4>
            <b>Region: {region} </b>
            <i>Area: {area}</i>
        </div>
    );
};

export default Country;