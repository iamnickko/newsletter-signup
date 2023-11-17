const Button = (props) => {
  return (
    <button
      type={props.type}
      onClick={props.onClick}
      disabled={props.disabled}
      className={`bg-darkslategrey text-white p-3 w-full rounded-lg font-bold text-base hover:cursor-pointer active:bg-gradient-to-r active:from-pink-500 active:to-orange-400 ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
