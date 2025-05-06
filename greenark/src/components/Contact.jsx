import React, { useState } from 'react';

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setError('');

        if (name.length < 2) {
            setError('O nome precisa ter mais de 2 letras, preencha todos os campos.');
            return;
        }
        if (email.length === 0 || number.length === 0 || message.length === 0) {
            setError('Preencha todos os campos.');
            return;
        }

        alert('Mensagem enviada com sucesso!');
        // Reset form fields
        setName('');
        setEmail('');
        setNumber('');
        setMessage('');
    };

    return (
        <div className="contatos_caixa">
            <div className="contatos_caixa_texto">
                <h1 className="text-2xl font-bold">Venha fazer parte da <br />solução!</h1>
                <p className="text-lg">Faça parte da equipe!</p>
            </div>
            <form className="contatos_caixa_preencher space-y-4" onSubmit={handleSubmit}>
                {error && <div className="erro text-red-500">{error}</div>}
                <input
                    type="text"
                    id="nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nome"
                    className="border border-gray-300 rounded p-2 w-full"
                />
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="border border-gray-300 rounded p-2 w-full"
                />
                <input
                    type="text"
                    id="numero"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Número"
                    className="border border-gray-300 rounded p-2 w-full"
                />
                <textarea
                    id="mensagem"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Mensagem"
                    className="border border-gray-300 rounded p-2 w-full"
                />
                <button type="submit" className="bg-blue-500 text-white rounded p-2 w-full">Enviar</button>
            </form>
        </div>
    );
};

export default Contact;