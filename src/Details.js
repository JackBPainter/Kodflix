import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Details() {
  const [detailsText, setDetailsText] = useState(
    "Hello, this will be the details page for each Movie & TV Show :)"
  );

  useEffect(() => {
    setTimeout(() => {
      setDetailsText("Coming soon! :)");
    }, 3000);
  }, []);

  return (
    <div>
      <h1>{detailsText}</h1>
      <Link to="/">Return to the Home page</Link>
    </div>
  );
}
