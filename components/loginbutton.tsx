interface Loginbuttonprops {
  name: string;
  onClick?: () => void;
}

const Loginbutton = (props: Loginbuttonprops) => {
  return (
    <div className="pt-10 pr-10">
      <button className="py-3 px-5 bg-blue-600 rounded-xl text-white hover:bg-blue-800" onClick={props.onClick}>
      <div>{props.name}</div>
      </button>
    </div>
  );
};

export default Loginbutton;
