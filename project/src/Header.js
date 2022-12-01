import { FiSearch , FiInstagram } from "react-icons/fi";
import { AiFillGithub , AiOutlineAmazon } from "react-icons/ai";
const Header=()=>
{
    return(
        <>
            <header className="header">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col logo">
                            <img src={require('./images/logo.png')} alt="" />
                        </div>
                        <div className="col-auto">
                        <ul className="main-menu d-flex list-unstyled">
                            <li><a href="#">home</a></li>
                            <li><a href="#">about</a></li>
                            <li><a href="#">pages</a></li>
                            <li><a href="#">blog</a></li>
                            <li><a href="#">contact us</a></li>
                            <li><input type="text" placeholder="search"/></li>
                            <li><a href="#"><span><FiSearch/></span></a></li>
                        </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
export default Header;