export default function FlightDetails() {
  return (
    <main>
      <form>
        <div className="flex lg:flex-row h-12 lg:gap-6 ">
          <div className="p-3 w-[324px] relative rounded border border-border ">
            <label
              className=" absolute bg-white text-sm left-4 -top-3"
              htmlFor="from"
            >
              From - To
            </label>
            <input
              className="w-full align-bottom h-full outline-none"
              type="text"
              id="from"
            />
          </div>
          <div className="w-[140px] p-3 relative rounded border border-border ">
            <label
              className=" absolute bg-white text-sm left-4 -top-3"
              htmlFor="from"
            >
              Trip
            </label>
            <input
              className="w-full h-full outline-none"
              type="text"
              id="from"
            />
          </div>
          <div className="w-[324px] p-3 relative rounded border border-border ">
            <label
              className=" absolute bg-white text-sm left-4 -top-3"
              htmlFor="from"
            >
              Depart - Return
            </label>
            <input className="w-full h-14 outline-none" type="text" id="from" />
          </div>
          <div className="w-[324px] p-3 relative rounded border border-border ">
            <label
              className=" absolute bg-white text-sm left-4 -top-3"
              htmlFor="from"
            >
              Passenger - Class
            </label>
            <input className="w-full h-14 outline-none" type="text" id="from" />
          </div>
        </div>
      </form>
    </main>
  );
}
