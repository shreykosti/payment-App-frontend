export function Th({
  icon1,
  icon2,
  recived,
  amount,
  sendto,
  month,
  year,
  day,
  id,
  hour,
  minutes,
}) {
  const getDayName = () => {
    switch (month) {
      case 0:
        return "Jan";
      case 1:
        return "Feb";
      case 2:
        return "March";
      case 3:
        return "April";
      case 4:
        return "May";
      case 5:
        return "June";
      case 6:
        return "July";
      case 7:
        return "Aug";
      case 8:
        return "Sep";
      case 9:
        return "Oct";
      case 10:
        return "Nov";
      case 11:
        return "Dec";
      default:
        return "";
    }
  };
  return (
    <div
      key={id}
      className="w-full h-[100px] border-b-2 flex flex-col justify-between text-white"
    >
      <div className="flex justify-between">
        <div className="border-black border-[2px] rounded-2xl h-14 w-14 flex justify-center items-center">
          {recived ? icon1 : icon2}
        </div>
        <div className="flex flex-col text-[1rem] sm:text-[1.15rem] md:text-[1.19rem] ">
          <span>{recived ? "Recived from" : "Send to"}</span>
          <span>{sendto}</span>
        </div>
        <div className="mr-0 sm:mr-4 text-lg font-extralight">${amount}</div>
      </div>
      {/* bottom div */}
      <div className="pb-2 font-extralight flex justify-between px-5">
        <span>
          {day} {getDayName(month)} {year}
        </span>
        <span>
          {hour}:{minutes}
        </span>
      </div>
    </div>
  );
}
//  <span></span>
