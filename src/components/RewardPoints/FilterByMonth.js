import { useState } from "react";

export default function FilterByMonth({ handleSubmit, placeHolderText, labelText }) {
  const [text, setText] = useState("");
  function handleChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e, text)}
        className="FilterByMonth"
        data-testid="input-form"
      >
        <label>{labelText} </label>
        <input
          type="text"
          value={text}
          onChange={handleChange}
          placeholder={placeHolderText}
          data-testid="input-element"
        />
      </form>
    </>
  );
}

