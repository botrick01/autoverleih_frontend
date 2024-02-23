interface Loginbuttonprops {
  name: string;
}

const Loginbutton = (props: Loginbuttonprops) => {
  return (
    <div className="pt-10 pl-5">
      <button className="py-3 px-5 bg-blue-600 rounded-xl text-white hover:bg-blue-800">
      <div>{props.name}</div>
      </button>
    </div>
  );
};

export default Loginbutton;
