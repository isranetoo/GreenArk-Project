import React, { useState } from 'react';

const Login = () => {
    const [login, setLogin] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');

    const loginAdmin = "usuario_admin";
    const senhaAdmin = "senha_admin123";

    const validarLogin = (event) => {
        event.preventDefault();
        if (login === loginAdmin && senha === senhaAdmin) {
            alert("Logado com sucesso!");
            window.location.href = "./usuario"; // Adjust the path as needed
        } else {
            setError("Senha errada, tente novamente.");
        }
    };

    return (
        <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4">
            <div className="mb-8">
                <img 
                    src={require('../assets/images/LOGO.BioVolt-login.png')} 
                    alt="Logo BioVolt" 
                    className="w-32 h-32 object-contain"
                />
            </div>
            <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
                <div className="space-y-6">
                    <p className="text-lg font-medium text-center text-gray-800">
                        Entre com seu <span className="font-bold">Login</span> e <span className="font-bold">Senha</span>
                    </p>
                    <div className="space-y-4">
                        <div>
                            <input
                                type="text"
                                id="Login"
                                name="Login"
                                placeholder="Login"
                                value={login}
                                onChange={(e) => setLogin(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                id="Senha"
                                name="Senha"
                                placeholder="Senha"
                                value={senha}
                                onChange={(e) => setSenha(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                            />
                        </div>
                        <button
                            onClick={validarLogin}
                            className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-300 font-medium"
                        >
                            Entrar
                        </button>
                        {error && (
                            <p className="text-red-500 text-sm text-center">
                                {error}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;