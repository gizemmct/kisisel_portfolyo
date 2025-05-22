import React, { useState } from 'react';

const About = () => {
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        container: {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px',
        },
        card: {
            backgroundColor: '#FFF8E7',  // Açık krem rengi
            borderRadius: '15px',
            padding: '30px',
            width: '320px',
            boxShadow: isHovered
                ? '0 10px 20px rgba(0,0,0,0.2)'
                : '0 4px 8px rgba(0,0,0,0.1)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            cursor: 'pointer',
            color: '#333',
        },
    };

    return (
        <section style={styles.container}>
            <div
                style={styles.card}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <h2>Ben Kimim ? 🙋‍♀️</h2>
                <p>Ben Gizem Çetinkaya,Balıkesir Üniversitesi Bilgisayar Mühendisliği 2. sınıf öğrencisiyim.</p>
                <p>Yazılım geliştirme, web tasarımı ve kullanıcı deneyimi konularına ilgi duyuyorum.</p>
                <p>
                    <strong>Teknik Beceriler:</strong> JavaScript, React, Python, HTML/CSS, problem
                    çözme ve proje geliştirme.
                </p>
            </div>
        </section>
    );
};

export default About;

