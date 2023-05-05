import style from "./Button.module.scss";

// button for handling title and action props
function Button({ title, action }) {
  return (
    <button className={style.button} onClick={action}>
      {title}
    </button>
  );
}

export default Button;
