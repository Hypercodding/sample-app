import axios from "axios";
import { useEffect, useState } from "react";

interface SuperHero {
    id: number;
    name: string
}

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(true);
  const [data, setData] = useState<SuperHero[]>([]);

  useEffect(() => {
    axios.get("http://localhost:4000/superheroes").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <h2>Loading.....</h2>;
  }

  return (
    <div>
      <h1>Super Heroes</h1>
      {data.map((hero) => {
        return <div key={hero.id}>{hero.name}</div>;
      })}
    </div>
  );
};
