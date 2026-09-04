const FOOTER_LINKS = ['About Us', 'Support', 'Privacy Policy', 'Newsletter'];
import "./Footer.css";

export function Footer() {
    return (
        <footer className="footer">
            <div className="shell footer__inner">
                <div className="footer__brand t-label-caps">NEXUS GAMING</div>

                <div className="footer__links">
                    {FOOTER_LINKS.map((link) => (
                        <a className="footer__link t-body-md" href="#" key={link}>
                            {link}
                        </a>
                    ))}
                </div>

                <div className="footer__copy t-body-md">
                    © 2024 NEXUS GAMING platform. All rights reserved.
                </div>
            </div>
        </footer>
    );
}