import React, { useState } from "react";

export default function TextU(ok) {
  const [text, setText] = useState("");
  // setText("enter");
  // let wrd=0;

  const upbtn = () => {
    // console.log("you clicked " +text);
    let newtext = text.toUpperCase();

    setText(newtext);
  };
  const lowbtn = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };
  const clrbtn = () => {
    let newtext = "";
    // setText=newtext
    setText(newtext);
  };
  const oncng = (k) => {
    // console.log("you change");
    setText(k.target.value);
    // wrd=text.split(" ").length;
    // console.log(text);
  };
  const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor: "white"
  });
  const [btntext, setbtntext] = useState("DarkMode On");
  const Darkmode = () => {
    if (mystyle.color === "black") {
      setmystyle({
        color: "white",
        backgroundColor: "black"
      });
      setbtntext("DarkMode Off");
    } else {
      setmystyle({
        color: "black",
        backgroundColor: "white"
      });
      setbtntext("DarkMode On");
    }
  };
  const copy = () => {
    var text = document.getElementById("Mybox");
    // console.log("copy")
    text.select();
    window.alert("copied");
    navigator.clipboard.writeText(text.value);
  };
  const extspace = () => {
    let ntext = text.split(/[ ]+/);
    setText(ntext.join(" "));
  };
  return (
    <>
      <div className="container">
        <div className="mb-3  my-3">
          <h3>Enter the text here</h3>
          <textarea
            placeholder="type here"
            className="form-control my-3"
            value={text}
            onChange={oncng}
            id="Mybox"
            rows="9"
            style={mystyle}
          ></textarea>
        </div>
        <button className="btn btn-primary my-3 mx-1" onClick={upbtn}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={lowbtn}>
          Convert to Lowpercase
        </button>
        <button className="btn btn-primary my-3 mx-1" onClick={clrbtn}>
          Clear
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={Darkmode}>
          {btntext}
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={extspace}>
          {" "}
          Single Spaces
        </button>
        <button className="btn btn-primary my-3 mx-2" onClick={copy}>
          Copy ClipBord
        </button>
      </div>
      <div className="container my-2">
        <h1>Text Summary</h1>
        <p>
          <b>
            Words:{text.split(" ").length - 1}, charecters:{text.length},
            Minutes read : {0.004 * (text.split(" ").length - 1)}{" "}
          </b>
        </p>
        <div className="container">
          <h2>Preview</h2>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
}
