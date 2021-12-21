import { useMemo } from "react";
import { useFetchData } from "./UseFetchData";

function CustomHookComponent() {
  const { data, done } = useFetchData(
    "https://jsonplaceholder.typicode.com/todos"
  );
  const oddTodos = useMemo(() => (data || []).filter((todo: any) => todo.id % 20 === 0), [data])

  console.log(oddTodos);

  return (
    <div>
      {done &&
        oddTodos.map((obj: any) => {
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
