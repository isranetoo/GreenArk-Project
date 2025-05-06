import React from 'react';

const Carousel = () => {
    return (
        <section className="py-16 bg-gray-100" id="carrossel">
            <div className="container mx-auto px-4" id="problemas">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="text-content">
                        <h1 className="text-3xl font-bold mb-6">Problemas em foco:</h1>
                        <div className="space-y-8">
                            <div id="texto1" className="block">
                                <h2 className="text-2xl font-semibold mb-4">Energia</h2>
                                <p className="text-gray-700 leading-relaxed">
                                    Fontes de energia limpa e sustentável tornaram-se uma busca essencial devido ao aumento da demanda energética global e ao esgotamento dos combustíveis fósseis, que comprometem a segurança energética e intensificam as mudanças climáticas. O uso excessivo desses recursos está diretamente ligado à emissão de gases de efeito estufa, agravando o aquecimento global.
                                </p>
                            </div>
                            <div id="texto2" className="hidden">
                                {/* Add content for texto2 */}
                            </div>
                            <div id="texto3" className="hidden">
                                {/* Add content for texto3 */}
                            </div>
                        </div>
                        <div className="flex justify-center space-x-2 mt-6">
                            {[1, 2, 3].map((dot) => (
                                <button
                                    key={dot}
                                    className="w-3 h-3 rounded-full bg-gray-300 hover:bg-green-500 focus:bg-green-500"
                                    aria-label={`Slide ${dot}`}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="carousel-images flex items-center justify-center">
                        {/* Add images here */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Carousel;