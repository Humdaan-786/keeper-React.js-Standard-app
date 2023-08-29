import React, { useState } from "react";

function CreateArea(props) {
  const [stuff, updatestuff] = useState({ title: "", content: "" });
  function handlechange(event) {
    const { name, value } = event.target;
    updatestuff((prev) => {
      return { ...prev, [name]: value };
    });
  }
  function submitNote(event) {
    props.onAdd(stuff);
    updatestuff({ title: "", content: "" });
    event.preventDefault();
  }
  return (
    <div>
      <form>
        <input
          value={stuff.title}
          onChange={handlechange}
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={handlechange}
          value={stuff.content}
          name="content"
          placeholder="Take a note..."
          rows="3"
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
