import PropTypes from "prop-types";
import List from "./List";

Compon.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string
}


export default function Compon({src, alt}){


    return (
        <>
            {/* <video width="400" controls>
              <source src="mov_bbb.mp4" type="video/mp4">
            </video> */}

            <List />
                

            <img src={src} alt={alt} />
        </>
    );
}