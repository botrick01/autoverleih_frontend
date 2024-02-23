interface Inputfieldprops{
    name: string
}

const Inputfield = (props:Inputfieldprops) => {
  return (
    <div className="pt-5 text-lg">
      <div>{props.name}</div>
      <input
        type="text"
        className="p-1 bg-slate-100 rounded-xl hover:bg-slate-200"
      />
    </div>
  );
};

export default Inputfield;
