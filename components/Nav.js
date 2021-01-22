const Nav = (props) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    return (
        <div>
            <nav>
                <div>
                    <h1>
                        <a href='/'>LinsTur</a>
                    </h1>
                </div>
                <ul>
                    <li>
                        <a href='/'>
                            <span>Home</span>

                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <span>Entradas</span>
                            
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <span>Resumo</span>
                            
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <span>Kms</span>
                            
                        </a>
                    </li>
                    <li>
                        <a href='#'>
                            <span>Gas</span>
                            
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Nav;
