import React from 'react';
import logoImage from '../assets/images/LOGO.BioVolt-footer.png';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="container mx-auto text-center">
                <img src={logoImage} alt="BioVolt - Energia que Purifica, Futuro que Inspira" className="mx-auto h-12" />
                <p className="mt-4 text-sm">© 2023 BioVolt. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;