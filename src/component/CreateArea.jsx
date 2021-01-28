import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

export default function CreateArea(props) {
  const [isExpanded, setExpanded] = React.useState(false);

  const [note, setNote] = React.useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    // console.log(event.target);
    const { name, value } = event.target;

    setNote((preNote) => {
      return {
        ...preNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    // console.log("Submit");
    event.preventDefault();

    props.onAdd(note);
    //' Clear component content after submit.
    setNote({
      title: "",
      content: "",
    });
  }

  function expand() {
    setExpanded(true);
  }

  function onOutControl() {
    console.log("Outside Control");
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded && (
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        )}

        <textarea
          name="content"
          onClick={expand}
          onChange={handleChange}
          onMouseOut={onOutControl}
          value={note.content}
          placeholder="Take a note...."
          rows={isExpanded ? 3 : 1}
        />

        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
