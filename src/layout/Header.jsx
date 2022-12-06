function Header() {
    return (
        <nav className='#c2185b pink darken-2'>
            <div className='nav-wrapper'>
                <a href='https://1mpulseone.github.io/movies-project/' className='brand-logo'>
                    React Movies
                </a>
                <ul id='nav-mobile' className='right hide-on-med-and-down'>
                    <li>
                        <a href='https://github.com/1MPULSEONE/movies-project/tree/main'>Repository</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export { Header };
