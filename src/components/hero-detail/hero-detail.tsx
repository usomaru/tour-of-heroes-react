import { useEffect, useState } from "react";
import { Hero } from "../heroes/heroes";

// 関数コンポーネントの書き方の正解がわからない
export default function HeroDetail({ selectedHero }) {

  // useStateを使って子コンポーネントからもらった値を別の変数として管理
  const [hero, setSelectedHero] = useState<Hero | null>(selectedHero);

  // selectedHeroが変更されたときに値も更新したい場合
  useEffect(() => {
    setSelectedHero(selectedHero);
  }, [selectedHero]);

  const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (hero) {
      setSelectedHero({ ...hero, name: e.target.value });
    }
  }

  return (
    <>
      {hero && (
        <>
          <h2>{hero.name} Details</h2>
          <div><span>id: </span>{hero.id}</div>
          <div>
            <label>Hero name: </label>
            <input type="text" value={hero.name} onChange={onChangeName} />
          </div>
        </>
      )}
    </>
  );
}