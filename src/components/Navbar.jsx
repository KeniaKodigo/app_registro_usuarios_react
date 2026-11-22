
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-contenido">
                <a href="/" className="logo">👥 UserApp</a>

                <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">Registro</a>
                </li>
                <li>
                    <a href="/usuarios" className="nav-link">Usuarios <span className="contador">0</span></a>
                </li>
                </ul>
            </div>
        </nav>
    );
}
