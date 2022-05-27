import React from "react"

const Footer = () => <footer className="page-footer font-small blue pt-4">
    <div className="container-fluid text-center text-md-left bg-dark">\
    <hr className="clearfix w-100 d-md-none pb-0"/>
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3 text-white">
                <h5 className="text-uppercase">Feel free to learn with us</h5>
                <p>The more time you spend the better you become.</p>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-2 mb-md-0 mb-3 text-white">
                <h5 className="text-uppercase">DUT-Academy</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" style={{textDecoration:'none', color:'white'}}>About</a></li>
                    <li><a href="#!" style={{textDecoration:'none', color:'white'}}>Cataloge</a></li>
                    <li><a href="#!" style={{textDecoration:'none', color:'white'}}>Home</a></li>
                    <li><a href="#!" style={{textDecoration:'none', color:'white'}}>Contact</a></li>
                </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3 text-white">
                <h5 className="text-uppercase">Community</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" style={{textDecoration:'none', color:'white'}}>Learner</a></li>
                    <li><a href="#!" style={{textDecoration:'none', color:'white'}}>Contributor</a></li>
                    <li><a href="#!" style={{textDecoration:'none', color:'white'}}>Donator</a></li>
                    <li><a href="#!" style={{textDecoration:'none', color:'white'}}>Supporter</a></li>
                </ul>
            </div>

            <div className="col-md-2 mb-md-0 mb-3 text-white">
                <h5 className="text-uppercase">More</h5>
                <ul className="list-unstyled">
                    <li><a href="#!" style={{textDecoration:'none', color:'white'}}>Privacy</a></li>
                    <li><a href="#!" style={{textDecoration:'none', color:'white'}}>Investors</a></li>
                    <li><a href="#!" style={{textDecoration:'none', color:'white'}}>Help</a></li>
                    <li><a href="#!" style={{textDecoration:'none', color:'white'}}>Terms</a></li>
                </ul>
            </div>
        </div>
    </div>

    <div className="footer-copyright text-center py-3 bg-dark text-white">© 2022 Copyright:
        <a href="https://mdbootstrap.com/" style={{textDecoration:'none', color:'white'}}> Megakawa.com</a>
    </div>

</footer>

export default Footer