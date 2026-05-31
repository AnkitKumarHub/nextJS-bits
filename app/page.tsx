// example of server component
import Image from "next/image";

export default async function Home() {
  const data = await fetch('https://api.freeapi.app/api/v1/public/randomusers/user/random')
  const res = await data.json();
  console.log(res);
  return (
    <div>
      <h1 className="text-3xl font-bold">Hello World</h1>
      <p></p>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus praesentium autem aut officia obcaecati soluta. Ipsa nobis eveniet veniam eum.
    </div>
  );
}
