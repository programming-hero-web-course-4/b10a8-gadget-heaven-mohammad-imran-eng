const Footer = () => {
  return (
    <div className="max-w-lg mx-auto">
        <h1 className="text-center font-bold text-[30px]">Gadget Heaven</h1>
        <p className="text-center font-medium">Leading the way in cutting-edge technology and innovation.</p>
      <footer className="footer p-10">
        <nav>
          <h6 className="text-[18px] font-bold text-gray-900">Services</h6>
          <a className="link link-hover">Product Support</a>
          <a className="link link-hover">Order Tracking</a>
          <a className="link link-hover">Shipping & Delivery</a>
          <a className="link link-hover">Returns</a>
        </nav>
        <nav>
          <h6 className="text-[18px] font-bold text-gray-900">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
        </nav>
        <nav>
          <h6 className="text-[18px] font-bold text-gray-900">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
