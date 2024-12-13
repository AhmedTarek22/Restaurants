function Team() {
  return (
    <div className="py-14 px-20 flex items-center gap-4 bg-[#030303] text-white">
      <div className="w-1/2 text-center">
        <h4 className="text-center text-3xl">Team</h4>
        <p className="my-8 text-2xl">
          The cooks, with their culinary expertise, bring flavors to life
          through their cooking techniques, seasoning, and presentation.
        </p>
        <button className="py-2 px-7 bg-[#E86A33] rounded-md">
          Kitchen & team
        </button>
      </div>
      <div className="w-1/2">
        <figure className="w-[600px] h-[450px]">
          <img
            className="rounded-md w-full h-full"
            src="images/team.jpeg"
            alt="Team photo"
          />
        </figure>
      </div>
    </div>
  );
}

export default Team;
