import Header from "../Components/Header";

function Home() {
  return (
    <div className="relative w-full pt-10 px-20 bg-[url('/images/bgHome.png')] bg-cover text-white">
      <Header />
      <div className="flex gap-10">
        <div className="w-full lg:w-1/2 mt-28">
          <p className="text-6xl">
            Food is the universal language of happiness
          </p>
          <p className="my-10 text-2xl">
            As well known and we are very busy all days advice you. advice you
            to call us of before arriving. s we can guarantee your seat.
          </p>
          <button className="py-3 px-8 bg-[#E86A33] rounded-lg">
            Learn more
          </button>
        </div>
        {/* images */}
        <div className="w-1/2 hidden lg:block">
          <figure className="ms-28">
            <img src="images/home1.png" alt="" />
          </figure>
          <figure className="absolute top-32 w-[200px]">
            <img src="images/home2.png" alt="" />
          </figure>
          <figure className="absolute top-36 end-96 w-[140px]">
            <img src="images/home3.png" alt="" />
          </figure>
          <figure className="absolute top-48 end-40 w-[140px]">
            <img src="images/home4.png" alt="" />
          </figure>
          <figure className="absolute bottom-6 end-96 w-[120px]">
            <img src="images/home5.png" alt="" />
          </figure>
          <figure className="absolute bottom-20 end-40 w-[80px]">
            <img src="images/home6.png" alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Home;
