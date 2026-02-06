import React from 'react';

const Features = () => {
    const features = [
        {
            icon: '🔒',
            title: 'Seguridad Total',
            description: 'Cifrado de extremo a extremo para proteger tus conversaciones y datos personales.',
        },
        {
            icon: '⚡',
            title: 'Velocidad Increíble',
            description: 'Mensajería instantánea con la mejor velocidad de entrega del mercado.',
        },
        {
            icon: '🌐',
            title: 'Multiplataforma',
            description: 'Disponible en Android y iOS. Sincroniza tus conversaciones en todos tus dispositivos.',
        },
        {
            icon: '🎯',
            title: 'Interfaz Intuitiva',
            description: 'Diseño moderno y fácil de usar. Comunícate sin complicaciones.',
        },
        {
            icon: '📱',
            title: 'Llamadas HD',
            description: 'Llamadas de voz y video en alta definición con la mejor calidad.',
        },
        {
            icon: '💬',
            title: 'Grupos Ilimitados',
            description: 'Crea grupos con tus amigos, familia o equipos de trabajo sin límites.',
        },
    ];

    return (
        <section id="features" className="section" style={styles.featuresSection}>
            <div className="container">
                <div style={styles.header}>
                    <h2>¿Por qué elegir TalkNet?</h2>
                    <p style={styles.headerText}>
                        Descubre las características que hacen de TalkNet la mejor opción para comunicarte
                    </p>
                </div>

                <div style={styles.grid}>
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass-card animate-fade-in-up"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div style={styles.icon}>{feature.icon}</div>
                            <h3 style={styles.featureTitle}>{feature.title}</h3>
                            <p style={styles.featureDescription}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const styles = {
    featuresSection: {
        position: 'relative',
    },
    header: {
        textAlign: 'center',
        marginBottom: '4rem',
    },
    headerText: {
        fontSize: '1.125rem',
        maxWidth: '600px',
        margin: '0 auto',
    },
    grid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '2rem',
    },
    icon: {
        fontSize: '3rem',
        marginBottom: '1rem',
    },
    featureTitle: {
        fontSize: '1.5rem',
        marginBottom: '0.75rem',
        color: '#FFFFFF',
    },
    featureDescription: {
        fontSize: '1rem',
        lineHeight: '1.6',
        marginBottom: '0',
    },
};

export default Features;
