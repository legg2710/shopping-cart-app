import { Link, useMatch, useResolvedPath } from "react-router-dom"
 
export default function Navbar() {
    return (
        <nav className="nav body">
            <Link to="/" className="site-title">
                Il Bagliore
            </Link>
            <ul>
                <CustomLink to="/menu">Menù</CustomLink>
                <CustomLink to="/contacto">Contattaci</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink ({ to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    return (
        <li className={isActive ? "active" : ""}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
        
    )
}