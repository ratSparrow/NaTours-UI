import "../../css/home/Banner.css"

import logo from "../../assets/img/logo-white.png"

const Banner = () => {
  return (
    <header className="header">
            <div className="logo-box">
                <img src={logo} alt="Logo" className="logo"/>
            </div>
            <div className="text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary-main">Outdoors</span>
                    <span className="heading-primary-sub">Is where life happens</span>
                </h1>
            </div>
        </header>
  );
};

export default Banner;