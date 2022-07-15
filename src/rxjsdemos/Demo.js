import React, { useEffect, useState } from "react";
import { of } from "rxjs";

const source = ["Adam", "Brock", "Chris"];
const names$ = of(source); // returns observable

export function Demo() {
  const [names, setNames] = useState();

  useEffect(() => {
    const sub = names$.subscribe(setNames);
    return () => sub.unsubscribe(); // clean the cache of stream
  }, []);

  return (
    <div>
      <h3 className="bg-warning text-center">RxJS with React</h3>
      <List items={names} />
    </div>
  );
}

const List = ({ items = [], loading = false }) => (
  <ul className={loading ? "loading" : null}>
    {items.map((item) => (
      <li key={item}>{item}</li>
    ))}
  </ul>
);
