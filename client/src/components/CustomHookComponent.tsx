import { useFetchData } from "./UseFetchData";

function CustomHookComponent() {
  const { data, done } = useFetchData(
    "https://jsonplaceholder.typicode.com/todos"
  );

  console.log(data);

  return (
    <div>
      {done &&
        data.map((obj: any) => {
          return (
            <div>
              <h1>{obj.title}</h1>
              <h2>{obj.id}</h2>
            </div>
          );
        })}
    </div>
  );
}

export default CustomHookComponent;
