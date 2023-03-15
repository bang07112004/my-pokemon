"use client";

type Props = {};
async function getData() {
  for (let i = 1; i <= 600; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    // Recommendation: handle errors
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch data");
    }

    return res.json();
  }
}
async function check({}: Props) {
  const data = await getData();
  console.log(data);
  return <div>check</div>;
}

export default check;
