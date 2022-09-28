const Header = (props) => {
    return (
        <nav class="navbar bg-light">
            <div class="container">
                <span class="navbar-brand mb-0 h1">{props.logo}</span>
            </div>
        </nav>
    )
};

export default Header;