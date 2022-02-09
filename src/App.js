import Box from "./components/Box";

function App() {

  const array =[
      {
        name:'Cinder',
        power: 'Fire',
        color: 'orange',
        age: 28,
        moves:["Trailblazer ", "Inferno ", "Fire Flash"]
      },
      {
        name:'Aganos',
        power: 'Rock',
        color: '#009999',
        age: 900000,
        moves:["Payload Assault ", "Pulverize ", "Ruin"]
      },
      {
        name:'Jago',
        power: 'Tiger Spirit',
        color: '#336699',
        age: 25,
        moves:["Edokuken ", "Tiger Fury ", "Wind Kick"]
      }
      ];

    let instictsEles = array.map((obj, idx)=>
        <Box key={idx} name={obj.name} power={obj.power} color={obj.color} age={obj.age} moves={obj.moves}/>
    )

    const array2 = [
        {
            name: "Black Orchid",
            power: "Spy",
            color: "#649358",
            age: 32,
            moves: ["Flick Flack ", "Ichi Ni San ", "Ichi Nise "]
        },
        {
            name: "T.J. Combo",
            power: "Cypernetics",
            color: "#b09a65",
            age: 45,
            moves: ["Spin Fist ", "Shoot Toss ", "Powerline "]
        },
        {
            name: "Hisako",
            power: "Undead",
            color: "gold",
            age: 464,
            moves: ["Ryo Zan ", "Possession ", "Influence "]
        }
    ];

  let killerEles = array2.map((obj, idx)=>
      <Box key={idx} name={obj.name} power={obj.power} color={obj.color} age={obj.age} moves={obj.moves}/>
  )

  return (
    <div className="boxes">
        {instictsEles}
        {killerEles}
    </div>
  );
}

export default App;
