import React from 'react';
import './App.css';

// Fotoğrafları import et
import kutuphane_arsiv from '../foto/kutuphane_arsiv.jpeg';
import soru_bankasi from '../foto/soru_bankasi.jpeg';
import kelime_islemci from '../foto/kelime_islemci.jpeg';
import fiyat_tahmin from '../foto/fiyat_tahmin.jpeg';

const Portfolio = () => {
    const projects = [
        {
            title: 'Kütüphane Arşiv Sistemi',
            description: 'PyQt5 ve SQLite ile geliştirilmiş bir masaüstü uygulaması.Kullanıcı girişi ve kayıt sistemi ile güvenli erişim sağlar. Kullanıcılar kitap ekleyebilir, silebilir, düzenleyebilir ve arayarak kolayca bulabilir. Kitaplar türlerine göre sıralanabilir ve liste PDF olarak dışa aktarılabilir. Ayrıca, kitap ödünç verme ve iade sistemi sayesinde kime hangi kitabın verildiği ve teslim durumu takip edilebilir.',
            image: kutuphane_arsiv, // Artık doğrudan import edilen değişkeni kullanıyoruz
        },
        {
            title: 'Soru Bankası Uygulaması',
            description: 'Kullanıcıların soruları kolayca ekleyip düzenleyebileceği, Excel dosyasına kaydedip görüntüleyebileceği bir sistem sunar. Uygulama üç sekmeden oluşur: soru ekleme, soru listesi ve Excel görüntüleme. Sorular konu, seviye ve doğru cevap bilgileriyle birlikte tabloya eklenir. Kullanıcılar sekmeler arasında butonlarla geçiş yapabilir, verileri Excel\'e aktarabilir ve kaydedilen dosyaları görüntüleyebilir. Arayüz, kullanıcı dostu olacak şekilde tasarlanmıştır ve tüm işlemler PyQt5 ile geliştirilmiştir.',
            image: soru_bankasi,
        },
        {
            title: 'Kelime İşlemci',
            description: ' Kullanıcıların metin oluşturma ve düzenleme ihtiyaçlarını karşılar. Kullanıcılar yeni dosya oluşturabilir, mevcut dosyaları açabilir, metinleri kaydedebilir ve yazdırabilir. Ayrıca metne kalınlık, italik ve renk gibi biçimlendirmeler uygulanabilir. Yazı tipi, boyutu ve stili kullanıcı tarafından ayarlanabilir. PyQt5 ile geliştirilen uygulama, sade ve anlaşılır bir arayüz sunarak yazı düzenleme işlemlerini kolaylaştırır.',
            image: kelime_islemci,
        },
        {
            title: 'Laptop Fiyat Tahmini',
            description: ' Farklı marka ve donanım özelliklerine sahip laptopların fiyatlarını makine öğrenmesi ile tahmin etmeyi amaçlar. Projede kullanılan veri seti; marka, işlemci hızı, RAM kapasitesi, depolama, ekran boyutu ve ağırlık gibi özellikleri içermektedir. Bu veriler işlenerek uygun makine öğrenmesi modelleriyle eğitilir ve kullanıcıdan alınan girişlere göre tahmini fiyat çıktısı verilir.',
            image: fiyat_tahmin,
        },
    ];

    return (
        <section>
            <h2>Projelerim 📁</h2>
            <div className="card-container">
                {projects.map((project, index) => (
                    <div className="card" key={index}>
                        <img src={project.image} alt={project.title} className="card-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
