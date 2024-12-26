const Footer = () => {
  return (
    <footer className="bg-[mediumblue] fixed bottom-0 left-0 right-0 ">
      <p className="text-center text-white text-xl">
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
