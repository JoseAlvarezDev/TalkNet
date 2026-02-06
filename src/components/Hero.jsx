import React from 'react';
import logoLight from '../assets/icon.png';

const Hero = () => {
    return (
        <section className="hero section">
            <div className="bg-gradient-radial"></div>
            <div className="container">
                <div style={styles.heroContent}>
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        <img
                            src={logoLight}
                            alt="TalkNet Logo"
                            style={styles.logo}
                            className="animate-float"
                        />
                    </div>

                    <h1
                        className="animate-fade-in-up"
                        style={{ animationDelay: '0.3s' }}
                    >
                        Comunícate sin Límites
                    </h1>

                    <p
                        className="animate-fade-in-up"
                        style={{ ...styles.subtitle, animationDelay: '0.5s' }}
                    >
                        TalkNet es la plataforma de comunicación instantánea que conecta a las personas de forma segura, rápida y confiable. Disponible para Android y iOS.
                    </p>

                    <div
                        className="animate-fade-in-up"
                        style={{ ...styles.ctaContainer, animationDelay: '0.7s' }}
                    >
                        <a href="#download" className="btn btn-primary">
                            Descargar Ahora
                        </a>
                        <a href="#features" className="btn btn-secondary">
                            Conocer Más
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

const styles = {
    heroContent: {
        textAlign: 'center',
        paddingTop: '4rem',
        paddingBottom: '4rem',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: '100%',
        maxWidth: '400px',
        height: 'auto',
        marginBottom: '2rem',
        filter: 'drop-shadow(0 0 30px rgba(79, 70, 229, 0.3))',
    },
    subtitle: {
        fontSize: '1.25rem',
        maxWidth: '700px',
        margin: '0 auto 2rem',
        lineHeight: '1.8',
    },
    ctaContainer: {
        display: 'flex',
        gap: '1rem',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
};

export default Hero;
