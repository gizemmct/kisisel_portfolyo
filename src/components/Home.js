import React from 'react';
import silhouette from '../foto/resim.jpeg';

const Home = () => (
    <section>
        <h1>Merhaba! 👋</h1>
        <img src={silhouette} alt="Silüet" className="silhouette" />
        <h2 className="text-xl font-semibold">GİZEM ÇETİNKAYA</h2>
        <p>Benim kişisel portfolyo siteme hoş geldiniz.</p>
    </section>
);

export default Home;
