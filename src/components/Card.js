const Card = (props) => {
  return (
    <div
      className={`bg-white rounded-3xl p-4 content-center mx-auto ${props.className}`}
    >
      {props.children}
    </div>
  );
};

export default Card;
