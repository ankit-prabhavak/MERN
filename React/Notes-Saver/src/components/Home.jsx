import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updateToPastes } from "../redux/pasteSlice";

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get("pasteId");
  const dispatch = useDispatch();
  const allPastes = useSelector((state) => state.paste.pastes);

  useEffect(() => {
    if (pasteId) {
      const paste = allPastes.find((p) => p._id === pasteId);
      setTitle(paste.title);
      setValue(paste.content);
    }
  }, [pasteId]);

  function createPaste() {
    const paste = {
      title: title,
      content: value,
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      // update
      dispatch(updateToPastes(paste));
    } else {
      // create
      dispatch(addToPastes(paste));
    }

    // after updation or creation
    setTitle("");
    setValue("");
    setSearchParams({});
  }

  return (
    <div className="home-container">
      <div className="title-container">
        <input
          className="title"
          placeholder="Title Please"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button onClick={createPaste} className="btn">
          {pasteId ? "Update Notes" : "Save Notes"}
        </button>
      </div>
      <div>
        <textarea
          className="text-container"
          value={value}
          placeholder="Color it with your creativity..."
          onChange={(e) => setValue(e.target.value)}
          rows={15}
          cols={40}
        />
      </div>
    </div>
  );
};

export default Home;
