import React from 'react';

const Benefits = () => {
    const benefits = [
        { title: "Sustentabilidade", description: "Promove o uso de energia limpa e renovável." },
        { title: "Economia", description: "Reduz custos com energia a longo prazo." },
        { title: "Impacto Ambiental", description: "Diminui a emissão de gases de efeito estufa." }
    ];

    return (
        <section className="benefits-section bg-gray-100 py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-green-600">Benefícios do Diferencial</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="benefit-card p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;