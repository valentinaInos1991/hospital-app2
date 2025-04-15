import React from "react";
import PropTypes from "prop-types";

const ServiceList=({servicios}) => {
    return (
        <div className="service-list">
            <h2>Servicios Médicos</h2>
            <ul>
                {servicios.map((servicios, index) => (
                    <li key={index}>{servicios}</li>
                ))}
            </ul>
        </div>
    )
}

ServiceList.propTypes = {
    servicios: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ServiceList;