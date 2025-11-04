import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromPastes } from "../redux/pasteSlice";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div>
      <input
        className="search"
        type="search"
        placeholder="Find Your Destiny..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="cards">
        {filteredData.length > 0 ? (
          filteredData.map((paste) => (
            <div key={paste._id} className="card">
              {" "}
              {/* Only one key here */}
              <div className="card-title">{paste.title}</div>
              <div className="card-content">{paste.content}</div>
              <div className="card-btn">
                <button className="cbtn">
                  <Link to={`/?pasteId=${paste._id}`}>Edit</Link>
                </button>
                <button className="cbtn">
                  <Link to={`/paste/${paste._id}`}>View</Link>
                </button>
                <button
                  className="cbtn"
                  onClick={() => handleDelete(paste._id)}
                >
                  Delete
                </button>
                <button
                  className="cbtn"
                  onClick={() => {
                    navigator.clipboard.writeText(paste.content);
                    toast.success("copied to clipboard");
                  }}
                >
                  Copy
                </button>
                <button
                  className="cbtn"
                  onClick={() => {
                    if (navigator.share) {
                      navigator
                        .share({
                          title: paste.title,
                          text: paste.content,
                          url: window.location.href,
                        })
                        .then(() => toast.success("Shared successfully!"))
                        .catch((err) => toast.error("Failed to share"));
                    } else {
                      navigator.clipboard.writeText(
                        `${paste.title}\n${paste.content}`
                      );
                      toast.success("Link copied to clipboard!");
                    }
                  }}
                >
                  Share
                </button>
              </div>
              <div className="card-date">
                {new Date(paste.createdAt).toLocaleString("en-IN", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </div>
            </div>
          ))
        ) : (
          <p>No results found.</p>
        )}
      </div>
    </div>
  );
};

export default Paste;
