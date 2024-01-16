"use client";
import Image from "next/image";
import Select from "./(components)/Select";

const options = [
  {
    name:"Mariana Augustine",
    email:"giannopoulas@example.com",
    avatar:"https://w7.pngwing.com/pngs/555/703/png-transparent-computer-icons-avatar-woman-user-avatar-face-heroes-service-thumbnail.png"
  }
  ]

export default function Home() {
  const change = (event) => {
    console.log(event.target.value)
  }
  return (
    <>
    <Select options={options} value={""} onChange={change}/>
    </>
  );
}
