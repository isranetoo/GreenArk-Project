import React from 'react';
import { Link } from 'react-router-dom';

const Usuario = () => {
    return (
        <div className="bg-gray-900 text-white">
            <header className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('../assets/images/BACKGROUND.cidade-home.png')" }}>
                <div className="flex items-center justify-between p-4">
                    <Link to="/">
                        <img src={require('../assets/images/LOGO.BioVolt-home.png')} alt="Logo" className="h-12" />
                    </Link>
                    <nav className="flex gap-6">
                        <Link to="/usuario" className="hover:underline">HOME</Link>
                        <a href="#carrossel" className="hover:underline">PROBLEMAS</a>
                        <a href="#solucao" className="hover:underline">SOLUÇÃO</a>
                        <a href="#contatos" className="hover:underline">CONTATOS</a>
                    </nav>
                    <Link to="/login" className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600">Minha Conta</Link>
                </div>
                <div className="text-center mt-16">
                    <h1 className="text-4xl font-bold">Energia limpa, rios vivos:</h1>
                    <h2 className="text-2xl mt-4">juntos por um futuro sustentável.</h2>
                </div>
            </header>
            <main className="space-y-16">
                <section id="carrossel" className="py-16 bg-gray-800">
                    <div className="container mx-auto text-center">
                        <h1 className="text-3xl font-bold mb-8">Problemas em foco:</h1>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                                <h2 className="text-xl font-semibold">Energia</h2>
                                <p className="mt-4">Fontes de energia limpa e sustentável tornaram-se uma busca essencial devido ao aumento da demanda energética global...</p>
                            </div>
                            {/* Add more cards for other problems */}
                        </div>
                    </div>
                </section>
                <section id="solucao" className="py-16 bg-gray-900">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Como?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                                {/* Content for solution item */}
                            </div>
                            {/* Add more solution items */}
                        </div>
                    </div>
                </section>
                <section id="diferencial" className="py-16 bg-gray-800">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Benefícios do Diferencial</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-gray-700 rounded-lg shadow-lg">
                                {/* Content for benefit card */}
                            </div>
                            {/* Add more benefit cards */}
                        </div>
                    </div>
                </section>
                <section id="contatos" className="py-16 bg-gray-900">
                    <div className="container mx-auto text-center">
                        <h1 className="text-3xl font-bold mb-4">Venha fazer parte da solução!</h1>
                        <p className="mb-8">Faça parte da equipe!</p>
                        <Link to="/contato" className="bg-blue-500 px-6 py-3 rounded hover:bg-blue-600">Entre em Contato</Link>
                    </div>
                </section>
            </main>
            <footer className="bg-gray-800 py-4">
                <div className="container mx-auto text-center">
                    <img src={require('../assets/images/LOGO.BioVolt-footer.png')} alt="BioVolt" className="mx-auto h-12" />
                    <p className="mt-4">© 2023 BioVolt. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
};

export default Usuario;