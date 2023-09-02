const Mains = () => {
  return (
    <main>
      <div className="content container">
        <h1 id="h">YOUR FEET DESERVE THE BESST</h1>
        <p id="p1">
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR SHOES.
          YOUR FEET DESERVE THE BEST AND WE'RE HERA TO HELP YOU WITH OUR SHOESS
        </p>
        <button className="btn-shop">Shop Now</button>
        <button className="btn-category">Category</button>
        <p id="p2">Also Avaiable On</p>
        <div className="brand">
          <a
            href="https://www.flipkart.com/womens-footwear/~sports-casual-shoes/pr?&sid=osp%2Ciko&otracker=nmenu_sub_Women_0_Shoes"
            target="_blank"
          >
            <img
              src="./images/Flipkart-Logo.png" alt="flipkartLogo" className="flipkart"
            />
          </a>
          <a href="https://www.amazon.in/s?k=amazon+shoes&rh=n%3A1983518031&dc&ds=v1%3Ae9p64kzZWgT%2FPXe08J4mk9LQOYoCjPxl9PmMOF9n1nU&adgrpid=64475670368&ext_vrnc=hi&hvadid=590593835457&hvdev=c&hvlocphy=1007765&hvnetw=g&hvqmt=e&hvrand=3147493694615705304&hvtargid=kwd-694970439&hydadcr=22282_2255478&qid=1692778284&rnid=3576079031&tag=googinhydr1-21&ref=sr_nr_n_1">
            <img
              src="./images/amazon-Logo.png"
              alt="amazonLogo"
              className="amazon"
            />
          </a>
        </div>
      </div>
      <div className="img">
        <img src="./images/bg-white.jpg" alt="main image" className="mainLogo" />
      </div>
    </main>
  );
};
export default Mains;
