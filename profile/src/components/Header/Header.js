 const Header = (props) => {
    const { user: {firstName, lastName, join} } = props;
  return (
    <header className="App-header">
        <div className="container">
      <h1>Welcome to 30 Days Of React</h1>
      <h3>Getting Started React</h3>
      <h4>JavaScript Library</h4>
     <div>{firstName} {lastName}</div>
        <div>{join}</div>
        </div>
    </header>
  );
}


export default Header;