import PropTypes from "prop-types";

Item.propTypes = {
    brand: PropTypes.string.isRequired,
    year: PropTypes.number
}

Item.defaultProps = {
    year: 0
}

export default function Item({lista}){

    return (
        <>
            <h3>Lista</h3>
            {
                lista.map((item) => (
                    <li> {item} </li>
                ))
            }

              {/* <li> {brand} - {year} </li> */}
        </>
    );
}