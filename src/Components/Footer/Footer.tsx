import { ReactComponent as Fb_Logo } from '../../assets/icon-facebook.svg'
import { ReactComponent as Ig_Logo } from '../../assets/icon-instagram.svg'
import { ReactComponent as Pt_Logo } from '../../assets/icon-pinterest.svg'
import { ReactComponent as Tt_Logo } from '../../assets/icon-twitter.svg'
import { ReactComponent as Yt_Logo } from '../../assets/icon-youtube.svg'
import { ReactComponent as Logo } from '../../assets/logo.svg'

export default function Footer() {

    const Logos: React.ReactElement[] = [
        <Fb_Logo data-logo-name="facebook" />,
        <Ig_Logo data-logo-name="instagram" />,
        <Pt_Logo data-logo-name="pinterest" />,
        <Tt_Logo data-logo-name="Twitter" />,
        <Yt_Logo data-logo-name="Youtube" />
    ]
        .map((item, index) => {
            return (
                <li key={`logo-${index}`}>
                    {/* lol retard kys */}
                    <a href="#" aria-label={item.props['data-logo-name']}> {item}</a>
                </li>
            )
        })
    const navItems = ['Home', 'Pricing', 'Products', 'About Us', 'Careers', 'Community', 'Privacy Policy']
    const footerNav = navItems.map((item, index) => {
        return (
            <li key={`list-item-${index}`}>
                <a href="#">{item}</a>
            </li>
        )
    })
    return (
        <footer className="footer | bg-neutral-900 text-neutral-100">
            <div className="container">
                <div className="even-columns">
                    <div>
                        <Logo />
                        <ul role="list" aria-label="social links">
                            {Logos}
                        </ul>
                    </div>
                    <div>
                        <nav className='footer-nav'>
                            <ul role="list" aria-label="Footer">
                                {footerNav}
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <form action="">
                            <input type="email" />
                            <button>Go</button>
                        </form>
                    </div>
                </div>
            </div>
        </footer>
    )
}