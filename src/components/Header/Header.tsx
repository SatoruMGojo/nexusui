const NAV_LINKS = ['Home', 'Categories', 'New Releases', 'Deals'];
const NAV_ICONS = ['search', 'notifications', 'settings'];
const AVATAR_SRC =
    'https://lh3.googleusercontent.com/aida-public/AB6AXuD94KRLEtL10rXDn1sTILzxGhqoPK48PrJBx_iMV_I0iMuSsJuPS4RJc073sm9pQ-mNvFtsUhD9EDtyC-6g-8Ow3c2IhdUiodpFOLYjt77luY7zKwzBkVhrZDJ0h_xZLSjDQEj_3v4E9mj-K26YJiulBkRVzFP-IocT4HhSo7y6m-iJhGTYg_lx7pxMu94vB7Tj9S0J6wavYMmzUO3S_3bVSMUWo9wG67eXSN723JpKxLzVqJLb7Fz3';

import "./Header.css";

export function Header() {
    return (
        <nav className="nav">
            <div className="shell nav__inner">
                <div className="nav__brand">NEXUS GAMING</div>

                <div className="nav__links">
                    {NAV_LINKS.map((label, index) => (
                        <a
                            key={label}
                            className={`nav__link${index === 0 ? ' nav__link--active' : ''}`}
                            href="#"
                        >
                            {label}
                        </a>
                    ))}
                </div>

                <div className="nav__actions">
                    {NAV_ICONS.map((icon) => (
                        <span
                            className="material-symbols-outlined nav__icon"
                            key={icon}
                            role="button"
                            tabIndex={0}
                            aria-label={icon}
                        >
                {icon}
              </span>
                    ))}
                    <img
                        className="nav__avatar"
                        src={AVATAR_SRC}
                        alt="User profile avatar"
                    />
                </div>
            </div>
        </nav>
    );
}