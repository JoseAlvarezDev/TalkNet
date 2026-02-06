import React from 'react';

const DownloadButtons = () => {
    return (
        <section id="download" className="section" style={styles.downloadSection}>
            <div className="container">
                <div style={styles.content}>
                    <h2 className="animate-fade-in-up">Descarga TalkNet</h2>
                    <p className="animate-fade-in-up" style={{ ...styles.subtitle, animationDelay: '0.2s' }}>
                        Disponible para Android y iOS. Elige tu plataforma y comienza a comunicarte.
                    </p>

                    <div className="animate-fade-in-up" style={{ ...styles.buttonContainer, animationDelay: '0.4s' }}>
                        {/* Android Download Button */}
                        <a
                            href="#"
                            className="btn btn-primary"
                            style={styles.downloadBtn}
                            onClick={(e) => {
                                e.preventDefault();
                                alert('Próximamente disponible en Google Play Store');
                            }}
                        >
                            <svg style={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4483-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4483.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
                            </svg>
                            <div style={styles.btnText}>
                                <span style={styles.btnLabel}>Disponible para</span>
                                <span style={styles.btnStore}>Android</span>
                            </div>
                        </a>

                        {/* iOS Download Button */}
                        <a
                            href="#"
                            className="btn btn-primary"
                            style={styles.downloadBtn}
                            onClick={(e) => {
                                e.preventDefault();
                                alert('Próximamente disponible en App Store');
                            }}
                        >
                            <svg style={styles.icon} viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            <div style={styles.btnText}>
                                <span style={styles.btnLabel}>Disponible para</span>
                                <span style={styles.btnStore}>iOS</span>
                            </div>
                        </a>
                    </div>

                    <div className="glass-card animate-fade-in-up" style={{ ...styles.infoCard, animationDelay: '0.6s' }}>
                        <p style={styles.infoText}>
                            📱 <strong>Versión actual:</strong> 1.0.0 |
                            ⭐ <strong>Calificación:</strong> 4.8/5 |
                            📥 <strong>Descargas:</strong> 10,000+
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    downloadSection: {
        background: 'linear-gradient(180deg, transparent 0%, rgba(79, 70, 229, 0.05) 100%)',
    },
    content: {
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
    },
    subtitle: {
        fontSize: '1.125rem',
        marginBottom: '3rem',
    },
    buttonContainer: {
        display: 'flex',
        gap: '1.5rem',
        justifyContent: 'center',
        flexWrap: 'wrap',
        marginBottom: '3rem',
    },
    downloadBtn: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        padding: '1rem 2rem',
        minWidth: '200px',
    },
    icon: {
        width: '40px',
        height: '40px',
    },
    btnText: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        textAlign: 'left',
    },
    btnLabel: {
        fontSize: '0.75rem',
        opacity: 0.9,
        fontWeight: 400,
    },
    btnStore: {
        fontSize: '1.125rem',
        fontWeight: 700,
    },
    infoCard: {
        padding: '1.5rem',
        marginTop: '2rem',
    },
    infoText: {
        margin: 0,
        fontSize: '1rem',
        color: '#FFFFFF',
    },
};

export default DownloadButtons;
