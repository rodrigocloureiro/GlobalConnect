import "./styles/Input.css";

export default function Input({ label, type, name, id, pattern, valor, placeholder, handleEvent, handleInput }) {
  return (
    <>
      {(type !== "submit" && type !== "checkbox") && (
        <label htmlFor={name} className="label">
          {label} <span>*</span>
        </label>
      )}
      <input
        type={type}
        name={name}
        id={id}
        className="input"
        pattern={pattern}
        value={valor}
        placeholder={placeholder}
        onChange={handleEvent}
        onInput={handleInput}
        required
      />
    </>
  );
}
