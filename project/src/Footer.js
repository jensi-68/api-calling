import {BiEnvelope , BiPhoneCall , BiBuildingHouse} from 'react-icons/bi';
const Footer = () =>
{
    return(
        <>
             <footer class="footer-sec mt-200">
        <div class="container">
            {/* <!-- Widget Area --> */}
            <div class="widget-area p-bottom">
                <div class="row">
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget about-widget">
                            <div class="widget-title">
                                <h5>about us</h5>
                            </div>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex reprehenderit rem illum
                                beatae quis doloremque veniam voluptates nobis, ullam, repudiandae.</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget links-widget">
                            <div class="widget-title">
                                <h5>useful links</h5>
                            </div>
                            <ul class="list-unstyled text-decoration-none">
                                <li><a href="#">privacy policy</a></li>
                                <li><a href="#">terms of service</a></li>
                                <li><a href="#">legal info</a></li>
                                <li><a href="#">knowledge base</a></li>
                                <li><a href="#">support</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget address-widget">
                            <div class="widget-title">
                                <h5>address</h5>
                            </div>
                            <ul class="list-unstyled m-0 p-0">
                                <li><span><BiEnvelope/></span><span
                                        class="text-lowercase margin-left-10">mail@example.com</span></li>
                                <li><span><BiPhoneCall/></span><span class="margin-left-10">+012 34 56
                                        789</span></li>
                                <li><span><BiBuildingHouse/></span><span class="margin-left-10">New York, 20
                                        South Park Avenue</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6">
                        <div class="footer-widget schedule-widget">
                            <div class="widget-title">
                                <h5>working hours</h5>
                            </div>
                            <ul class="list-unstyled m-0 p-0">
                                <li><span>monday</span><span>10:00-11:00</span></li>
                                <li class="divider"></li>
                                <li><span>tuesday</span><span>10:00-11:00</span></li>
                                <li class="divider"></li>
                                <li><span>wednesday</span><span>10:00-11:00</span></li>
                                <li class="divider"></li>
                                <li><span>thursday</span><span>10:00-11:00</span></li>
                                <li class="divider"></li>
                                <li><span>friday</span><span>10:00-11:00</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </footer>
        </>
    )
}
export default Footer;