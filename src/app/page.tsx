import Image from "next/image";

export default function Home() {
  
  const update = () => {
    const today = new Date();
    const usaTime = today.getTime() + (today.getTimezoneOffset() * 60 * 1000);
    const korTime = new Date(usaTime + (9 * 60 * 60 * 1000))
    return korTime+"";
  }
  return (
    <div className="w-screen h-screen">
      <div className="h-1/2 bg-pink-200">
        update : {update()} <br /><br />
        I love pink!
      </div>
      <div className="h-1/2 bg-sky-200">
        and sky!
      </div>
    </div>
  );
}
