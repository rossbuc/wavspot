const ContentDisplay = (selectedLeftNav) => {
  console.log(selectedLeftNav);
  console.log(selectedLeftNav == "Home");
  if (selectedLeftNav == "Home") {
    console.log("Home");
    return (
      <div className="content-display">
        <h1>home stuff to go here</h1>
      </div>
    );
  } else if (selectedLeftNav == "Feed") {
    return (
      <div className="content-display">
        <h1>feed stuff to go here</h1>
      </div>
    );
  } else if (selectedLeftNav == "Trending") {
    return (
      <div className="content-display">
        <h1>trending stuff to go here</h1>
      </div>
    );
  } else if (selectedLeftNav == "DailyDigs") {
    return (
      <div className="content-display">
        <h1>daily digs to go here</h1>
      </div>
    );
  } else if (selectedLeftNav.length > 1) {
    console.log("this string length is greater than 1");
  }
};

export default ContentDisplay;
