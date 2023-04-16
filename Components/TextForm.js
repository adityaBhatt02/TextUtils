import React, { useState } from "react";

export default function TextForm(props) {
  let [text, setText] = useState("");

  let handleUpper = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase!","success")
  };
  let handleLower = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase!","success")
  };
  let handleClear = () => {
    setText("");
    props.showAlert("Text Cleared!","success")
  };
  let handleReverse = () => {
    let newText = text.split("").reverse(); // split() is used to make string characters into array element.. so that we can use array methods to the string

    let joinText = newText.join(""); // so to show our result we cant show array of reversed elements of the string , we need to show the actual string is reversed so we use join() method to join all the array elements to an string.
    setText(joinText);
    props.showAlert("Text Reversed!","success")
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
    props.showAlert("Text Will speak now!","success")
  };

  let changeText = (event) => {
    setText(event.target.value);
  };

  let removeExrtaSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces removed!","success")
  };

  return (
    <>
      <div className="mb-3">
        <h2 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {props.heading}
        </h2>
        <textarea
          name=""
          id="myBox"
          rows="8"
          value={text}
          onChange={changeText}
          className="form-control"
          style={{
            // backgroundColor: props.mode === "dark" ? "#454545" : "white",
            backgroundColor: props.mode === "dark" ? "rgb(0 7 36)" : "white",
            color: props.mode === "dark" ? "white" : "black",
          }}
        ></textarea>
      </div>
      <button
        type="button"
        class="btn btn-outline-info mx-2"
        onClick={handleUpper}
      >
        Convert to UpperCase
      </button>
      <button
        type="button"
        class="btn btn-outline-info mx-2"
        onClick={handleLower}
      >
        Convert to LowerCase
      </button>
      <button
        type="button"
        class="btn btn-outline-info mx-2"
        onClick={handleClear}
      >
        Clear All
      </button>
      <button
        type="button"
        class="btn btn-outline-info mx-2"
        onClick={removeExrtaSpaces}
      >
        Remove Extra Spaces
      </button>
      <button
        type="button"
        class="btn btn-outline-info mx-2"
        onClick={handleReverse}
      >
        Reverse Text
      </button>
      <button
        type="button"
        class="btn btn-outline-warning mx-2 my-2"
        onClick={speak}
      >
        Speak
      </button>

      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Enter your text to preview here !!"}</p>
      </div>
    </>
  );
}
