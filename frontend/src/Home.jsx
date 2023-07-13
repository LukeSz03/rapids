function Home() {
  return (
    <div className="container">
      <div className="content">
        <h1>Rapids</h1>
        <h2>
          Upload <span className="underline">files</span> and share <br />{" "}
          <span className="underline">instantaneously</span>
        </h2>
        <button className="button">Get Started</button>
      </div>
      <img src="logo.png" alt="Rapids logo" id="logo" />
    </div>
  );
}

export default Home;
