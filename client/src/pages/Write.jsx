import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";
import moment from "moment";

function Write() {
  const state = useLocation().state;
  const [value, setValue] = useState(state?.value || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file,setFile]=useState(state?.file || "");
  const [cat,setCat]=useState(state?.cat || "");

  const navigate = useNavigate()

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await axios.post("/upload", formData);
      return res.data;
    } catch (err) {
      console.log(err);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const imgUrl = await upload();

    try {
      state
        ? await axios.put(`/posts/${state.id}`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
          })
        : await axios.post(`/posts/`, {
            title,
            desc: value,
            cat,
            img: file ? imgUrl : "",
            date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
          });
          navigate("/")
    } catch (err) {
      console.log(err);
    }
  };
 
  return (
    <div className='add'>
      <div className="content">
        <input 
        type="text"
        value={title}
        placeholder='Title' 
        onChange={(e) => setTitle(e.target.value)}/>

        <div className="editorContainer">
        <ReactQuill
            className="editor"
            theme="snow"
            value={value}
            onChange={setValue}
          />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
       
          <span>
            <b>Visibility:</b> Public
          </span>

          <input 
          type="file" 
          name='' 
          id='file'
          onChange={(e) => setFile(e.target.files[0])}/>


          <div className="buttons">
          
            <button onClick={handleClick}>Publish </button>
          </div>
        </div>
        <div className="item">
          <h1>Category</h1>
          <div className="cat">
             <input 
             type="radio" 
             checked={cat === "IEEE"}
             name='cat' 
             value="IEEE" 
             id="IEEE"
             onChange={(e) => setCat(e.target.value)}/>
             <label htmlFor="IEEE">IEEE</label>
          </div>
         <div className="cat">
            <input 
            type="radio"
            checked={cat === "Securinets"}
            name='cat' 
            value="Securinets" 
            id="Securinets"
            onChange={(e) => setCat(e.target.value)}/>
            <label htmlFor="Securinets">Securinets</label>
         </div>

         <div className="cat">
         <input 
         type="radio" 
         checked={cat === "Tunivision"}
         name='cat' 
         value="Tunivision" 
         id="Tunivision"
         onChange={(e) => setCat(e.target.value)}/>
          <label htmlFor="Tunivision">Tunivision</label>
         </div>

         <div className="cat">
         <input 
         type="radio" 
         checked={cat === "Gaming-LAb"}
         name='cat' 
         value="Gaming-LAb" 
         id="Gaming-LAb"
         onChange={(e) => setCat(e.target.value)}/>
          <label htmlFor="Gaming-LAb">Gaming-LAb</label>
          </div>

          <div className="cat">
          <input 
          type="radio" 
          checked={cat === "Game-zone"}
          name='cat' 
          value="Game-zone" 
          id="Game-zone"
          onChange={(e) => setCat(e.target.value)}/>
          <label htmlFor="Game-zone">Game-zone</label>
          </div>
{/*           
          <div className="cat">
          <input 
          type="radio" 
          checked={cat === "ACM"}
          name='cat' 
          value="ACM" 
          id="ACM"
          onChange={(e) => setCat(e.target.value)}/>
          <label htmlFor="ACM">ACM</label>
          </div> */}
        
        <div className="cat">
        <input 
        type="radio" 
        checked={cat === "Formaclub"}
        name='cat' 
        value="Formaclub" 
        id="Formaclub"
        onChange={(e) => setCat(e.target.value)}/>
          <label htmlFor="Formaclub">Formaclub</label>
        </div>
        
        <div className="cat">
        <input 
        type="radio" 
        checked={cat === "MTC"}
        name='cat' 
        value="MTC" 
        id="MTC"
        onChange={(e) => setCat(e.target.value)}/>
          <label htmlFor="MTC">MTC</label>
        </div>
           
        </div>
      </div>
    </div>
  )
}

export default Write