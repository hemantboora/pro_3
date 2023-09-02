const Footer = () => {
  return (
    <div>
      <hr />
      <div className="ft">
        <div className="copyRight">
          <h3>AllRights Hemant Boora</h3>
        </div>
        <div className="logoss">
          <a href="https://www.facebook.com/" target="_blank">
            <img src="./images/f_logo.jpg" alt="facebook" className="f_img" />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <img src="./images/Insta-logo.png" alt="Instagram" className="f_img" />
          </a>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <img src="./images/linked-logo.png" alt="LinkedIn" className="f_img"/>
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <img src="./images/youtube-logo.png" alt="YouTube" className="f_img"/>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
