import React, { useState } from "react";
import "./Weather.css";

// this is where we will build outline (html) of weather app, what it'll look like //
export default function Weather() {
  return (
    // conditional rendering so it doesn't loop and keep rendering, if ready it true//
    // if weatherData object is ready, being ready is true
    <div className="Weather">
      {/*create search engine with a form */}
      {/*add event listener on form to use as search engine*/}
      <form>
        {/* make into row and col so they'll appear side by side */}
        <div className="row">
          <div className="col-6">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-search-bar w-100"
              /*in react use autoFocus with captial F */
              /* turn on so when page loads it focuses on search bar to start typing right away*/
              autoFocus="on"
              //whenever this changes, onChange, handle city change (function)//
              //calling to axios with EVERY letter typed, making too many requests and being blocked
              //onChange={handleCitySearched}
            />
          </div>
          <div className="col-3">
            {/*use as a button, give bootstrap className*/}
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
          {/* added button here to be able to search for current location */}
          <div className="col-3">
            <button className="btn btn-primary w-100">Current</button>
          </div>
        </div>
      </form>
    </div>
  );
}
