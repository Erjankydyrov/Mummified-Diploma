import "./Header.css";

function Header({ image, title, children, boxTitle, boxChildren }) {
  return (
    <header className="Header container">
      <div className="headerBg">
        <img src={image} alt={title} />
        <section>
          <h1>{title}</h1>
          <p>{children}</p>
        </section>
        <div className="box">
          <h2>{boxTitle}</h2>
          <p>{boxChildren}</p>
        </div>
      </div>
    </header>
  );
}

export default Header;
