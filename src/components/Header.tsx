import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";


const Header = () => {
    const tabContents = [
        'Home',
        'About',
        'Experience',
        'Services'
    ];
    return <>
        <header className="__portfolio-header">
            <div className="__portfolio-block-1">
                <ul className="__portfolio-content-group-1">
                    {tabContents?.map((value, index) => {
                        return <li className={`content-item ${value}`} key={index}><p>{value}</p></li>
                    })}
                </ul>
            </div>
            <div className="__portfolio-block-2">
                <ul className="__portfolio-content-group-2">
                    <li><FontAwesomeIcon
                        icon={faGithub}
                    /></li>
                    <li>
                        <FontAwesomeIcon
                            icon={faFacebook}
                        />
                    </li>
                    <li>
                        <FontAwesomeIcon
                            icon={faLinkedin}
                        />
                    </li>
                </ul>
            </div>
        </header>
    </>
}

export default Header;