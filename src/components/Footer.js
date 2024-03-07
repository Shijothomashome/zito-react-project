const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="flex justify-center items-center flex-col mt-8"> {/* Center content horizontally and align items in the center */}
      <p>Created by <a href='https://www.linkedin.com/in/shijo-thomas-home/'>Shijo Thomas</a></p>
      <p><i className="fa-regular fa-copyright"></i> {year}</p>
    </div>
  );
};

export default Footer;
