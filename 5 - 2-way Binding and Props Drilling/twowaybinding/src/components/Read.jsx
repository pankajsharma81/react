
export default function Read(props) {
  const { userName} = props;
  return (
    <div>
      {userName.map((name, idx) => {

        return <li key={idx}>{name.name}</li>;
      })}
    </div>
  );
}
