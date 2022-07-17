import PropTypes from 'prop-types';

function Button({ children, status, ...props }) {
    return (
        <button className={`btn ${status}`} {...props}>
            {children}
        </button>
    );
}

export default Button;

Button.defaultProps = {
    status: '',
    children: '',
};

Button.propTypes ={
    status: PropTypes.string,    
}
