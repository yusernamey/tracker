import { uniques } from "./data";
import { Unique } from "./Unique";
export const UniqueList = () => {
  return (
    <div>
      {uniques.map((unique, i) => {
        return <Unique name={unique} key={i} id={i} />;
      })}
    </div>
  );
};
