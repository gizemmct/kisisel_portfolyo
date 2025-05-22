import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav>
        <Link to="/">🏠 Ana Sayfa</Link>
        <Link to="/benkimim">🙋‍♀️ Ben Kimim?</Link>
        <Link to="/neler-yapabilirim">🛠️ Neler Yapabilirim?</Link>
        <Link to="/portfolyo">📁 Portfolyo</Link>
        <Link to="/iletisim">📬 İletişim</Link>
    </nav>
);

export default Navbar;
