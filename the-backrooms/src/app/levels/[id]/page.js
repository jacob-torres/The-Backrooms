export default async function Levels({params}) {
  console.log(params);
  const levelID = (await params).id;
  return <div>Level {levelID}</div>
}