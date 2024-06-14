


function Item({ name, isPacked }) {
  return (
    <li className="item">
      {name} {isPacked ? ' 😏 ' : `💩` }
    </li>
  );
}

export default function PackingList() {
  return (
    <section>
      <h1>Things need to replace in Car</h1>
      <ul>
        <Item 
          isPacked={true} 
          name="Car Fenders" 
        />
        <Item 
          isPacked={true} 
          name="Door panels" 
        />
        <Item 
          isPacked={false} 
          name="Windscreen" 
        />
      </ul>
    </section>
  );
}
