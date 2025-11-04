import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);

  // Find the paste by ID (not filter)
  const paste = allPastes.find((p) => p._id === id);

  if (!paste) {
    return <p>Paste not found.</p>;
  }

  return (
    <div className="home-container">
      <div className="title-container">
        <input
          className="title"
          type="text"
          value={paste.title}
          disabled
        />
      </div>

      <div>
        <textarea
          className="text-container"
          value={paste.content}
          disabled
          rows={25}
          cols={40}
        />
      </div>
    </div>
  );
};

export default ViewPaste;
