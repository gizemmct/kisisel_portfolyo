import React from 'react';
import { motion } from 'framer-motion';

const skills = [
    {
        title: 'React ile Web Uygulamaları',
        icon: '⚛️',
        description: 'Modern, component tabanlı web arayüzleri geliştiririm.',
    },
    {
        title: 'Veritabanı Yönetimi (SQLite)',
        icon: '💾',
        description: 'Küçük ölçekli projeler için veritabanı sistemleri kurar ve yönetirim.',
    },
    {
        title: 'Python & Java ile Programlama',
        icon: '🐍☕',
        description: 'Temel algoritmalar, uygulama mantığı ve hata ayıklama konusunda deneyimliyim.',
    },
    {
        title: 'Autodesk ile 3D Çizim',
        icon: '📐🧊',
        description: 'Autodesk araçlarıyla temel 3 boyutlu modelleme yapabilirim.',
    },
    {
        title: 'PyQt5 ile Masaüstü Uygulamaları',
        icon: '🖥️',
        description: 'Görsel arayüze sahip Python uygulamaları geliştiririm.',
    },
    {
        title: 'Problem Çözme & Algoritma',
        icon: '🧠',
        description: 'Zor problemleri algoritmik düşünerek çözerim.',
    }
];

const Skills = () => (
    <section className="p-6">
        <h2 className="text-3xl font-bold mb-6">Neler Yapabilirim? 🛠️</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
                <motion.div
                    key={index}
                    className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                >
                    <div className="text-3xl mb-2">{skill.icon}</div>
                    <h3 className="text-xl font-semibold mb-1">{skill.title}</h3>
                    <p className="text-gray-600">{skill.description}</p>
                </motion.div>
            ))}
        </div>
    </section>
);

export default Skills;
