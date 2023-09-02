const Navbar =() =>{
    return(
        <nav className="container">
            <div className="logo">
                <img src="/images/Nike-Logo.png" alt="logo" id="logo-img" />
            </div>
            <div><ul>
                  <li>Menu</li>
                  <li>Location</li>
                  <li>About Us</li>
                  <li>Contact</li>
            </ul></div>
            <button>Login</button>
        </nav>
    );
}
export default Navbar;