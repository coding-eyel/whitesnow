import React, { useState } from "react";
import "../styles/homeLayout.css"
import NewPostForm from "./NewPostForm";

function CreatePostButton(props) {
  const [isOpen, setIsOpen] = useState(false);

  const openNewPostDialog = () => {
    setIsOpen(true);
  };

  const closeNewPostDialog = () => {
    setIsOpen(false);
  };


  return (
    <div>
      <button className="open-create-post-dialog" onClick={openNewPostDialog}>Create Flake +</button>
      {isOpen && (
        <dialog className="new-post-dialog" open>
          <NewPostForm closeNewPostDialog={closeNewPostDialog} />
        </dialog>
      )}
    </div>
  )
}

export default CreatePostButton