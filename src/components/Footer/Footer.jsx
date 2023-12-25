import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    // Fecha
    let fecha = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p 
                            id='footer-info'
                            >
                        {/* <FormattedMessage */}
                            Page created by Md Danish
                        {/* // /> */}
                    </p>
                    <p>&copy; {fecha}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);