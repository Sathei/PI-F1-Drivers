import { Link } from "react-router-dom"

const Button = ({ link, text, className}) => {
    return(
        <Link to={link}>
            <button className={className}><span>{text}</span></button>
        </Link>
    )
}

export default Button