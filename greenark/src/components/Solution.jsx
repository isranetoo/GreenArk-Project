import React from 'react';

const Solution = () => {
    const solutions = [
        { title: "Solução 1", description: "Descrição da solução 1." },
        { title: "Solução 2", description: "Descrição da solução 2." },
        { title: "Solução 3", description: "Descrição da solução 3." },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8 text-green-600">Como?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {solutions.map((solution, index) => (
                        <div key={index} className="p-6 bg-white rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-4 text-gray-800">{solution.title}</h3>
                            <p className="text-gray-600">{solution.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Solution;