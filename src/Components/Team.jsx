function Team() {
  return (
    <div className="py-14 px-20 flex items-center gap-4 bg-[#030303] text-white">
      <div className="text-center">
        <h4 className="text-center text-3xl">Team</h4>
        <p className="my-8 text-xl">
          The cooks, with their culinary expertise, bring flavors to life
          through their cooking techniques, seasoning, and presentation.
        </p>
        <button className="py-2 px-7 bg-[#E86A33] rounded-md">
          Kitchen & team
        </button>
      </div>
      <div>
        <img className="rounded-md" src="images/team.jpeg" alt="" />
      </div>
    </div>
  );
}

export default Team;
