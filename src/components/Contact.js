import React, { useState, useEffect } from "react";

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [showToast, setShowToast] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form gönderildi:", formData);
        setShowToast(true);
        setFormData({ name: "", email: "", message: "" });
    };

    useEffect(() => {
        if (showToast) {
            const timer = setTimeout(() => {
                setShowToast(false);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [showToast]);

    return (
        <div className="relative p-6 bg-gray-100 min-h-screen flex items-center justify-center">
            <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 overflow-hidden gap-10 p-8">
                {/* Form */}
                <form className="p-8" onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">İletişim Formu</h2>

                    <div className="mb-4">
                        <p className="text-lg font-semibold text-gray-700 mb-1">Ad Soyad</p>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-lg font-semibold text-gray-700 mb-1">E-posta</p>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div className="mb-4">
                        <p className="text-lg font-semibold text-gray-700 mb-1">Mesaj</p>
                        <textarea
                            name="message"
                            rows="5"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
                    >
                        Gönder
                    </button>
                </form>

                {/* İletişim Bilgileri */}
                <div className="bg-blue-50 p-8 flex flex-col justify-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-6">İletişim Bilgilerim</h2>
                    <ul className="space-y-4 text-gray-700">
                        <li><strong>GitHub:</strong> <a href="https://github.com/gizemmct" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">github.com/gizemmct</a></li>
                        <li><strong>LinkedIn:</strong> <a href="https://linkedin.com/in/gizem-çetinkaya-04483131a" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/gizem-çetinkaya</a></li>
                        <li><strong>E-posta:</strong> <a href="mailto:gizemctt@gmail.com" className="text-blue-600 hover:underline">gizemctt@gmail.com</a></li>
                        <li><strong>X:</strong> <a href="https://x.com/gizemctky" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">@gizemctky</a></li>
                    </ul>
                </div>
            </div>

            {/* TOAST MESAJI */}
            {showToast && (
                <div
                    style={{
                        position: "fixed",
                        top: "20px",
                        left: "50%",
                        transform: "translateX(-50%)",
                        backgroundColor: "#4caf50",
                        color: "white",
                        padding: "12px 24px",
                        borderRadius: "8px",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                        fontWeight: "600",
                        zIndex: 9999,
                        animation: "slideDown 0.5s ease forwards, fadeOut 0.5s ease 2.5s forwards"
                    }}
                >
                    Mesajınız başarıyla gönderildi!
                </div>
            )}

            {/* Basit animasyon */}
            <style>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateX(-50%) translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
          }
        }
        @keyframes fadeOut {
          to {
            opacity: 0;
          }
        }
      `}</style>
        </div>
    );
};

export default Contact;
