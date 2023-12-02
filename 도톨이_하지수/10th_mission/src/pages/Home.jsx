import * as React from "react";
import { useState, useEffect } from "react";
import HomeCard from "../component/HomeCard";
import { useSelector } from "react-redux";
import InputText from "../component/InputText";
import { HomeContainer } from "../style/Home.style";
import TextCard from "../component/TextCard";

export default function Home() {
  const [data, setData] = useState([]);
  const state = useSelector((state) => state.user.isLogin);
  const contents = useSelector((state) => state.user.contents.content);

  useEffect(() => {
    fetch("http://localhost:3000/data/data.json")
      .then((res) => res.json())
      .then((json) => {
        setData(json.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const reversedContents = [...contents].reverse();

  return (
    <HomeContainer>
      {state ? <InputText /> : <></>}
      {reversedContents.map((contents) => (
        <TextCard contents={contents} />
      ))}
      {data.map((item) => (
        <HomeCard
          id={item.id}
          name={item.name}
          title={item.title}
          subheader={item.subheader}
          image={item.image}
          content={item.content}
        />
      ))}
    </HomeContainer>
  );
}
