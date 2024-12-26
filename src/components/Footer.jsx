const Footer = (props) => {
  return (
    <footer className="bg-[mediumblue] fixed bottom-0 left-0 right-0 ">
      <p className="text-center text-white text-xl">
        {props.listLength} {props.listLength === 1 ? "item" : "items"} left
      </p>
    </footer>
  );
};

export default Footer;
