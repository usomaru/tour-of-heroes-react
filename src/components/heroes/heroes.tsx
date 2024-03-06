
import { useState } from "react";
import styles from "./heroes.module.css";

interface Hero {
   id: number;
   name: string;
}

const HEROES: Hero[] = [
   { id: 12, name: 'Dr. Nice' },
   { id: 13, name: 'Bombasto' },
   { id: 14, name: 'Celeritas' },
   { id: 15, name: 'Magneta' },
   { id: 16, name: 'RubberMan' },
   { id: 17, name: 'Dynama' },
   { id: 18, name: 'Dr. IQ' },
   { id: 19, name: 'Magma' },
   { id: 20, name: 'Tornado' }
];

export default function Heroes() {
   // const initHero: Hero = {
   //    id: 1,
   //    name: 'Windstorm'
   // };

   // const [hero, setHero] = useState(initHero);
   const onChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (selectedHero) {
         setSelectedHero({ ...selectedHero, name: e.target.value });
      }   
   }

   const [selectedHero, setSelectedHero] = useState<Hero | null>(null);
   const onSelect = (hero: Hero) => {
      setSelectedHero(hero);
   }

   const heroes = HEROES;

   return (
      <>
         <h2>My Heroes</h2>
         <ul className={styles.heroes}>
            {heroes.map(item =>
               <li key={item.id}>
                  <button type="button" onClick={() => onSelect(item)}>
                     <span className={styles.badge}>{item.id}</span>
                     <span className={styles.name}>{item.name}</span>
                  </button>
               </li>
            )}
         </ul>

         {selectedHero && (
            <>
               <h2>{selectedHero.name} Details</h2>
               <div><span>id: </span>{selectedHero.id}</div>
               <div>
                  <label>Hero name: </label>
                  <input type="text" value={selectedHero.name} onChange={onChangeName} />
               </div>
            </>
         )}


      </>
   );
}
