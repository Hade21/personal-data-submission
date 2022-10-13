import { useParams } from "react-router-dom";
import { getDataById } from "../../utilities/utilities";

export const Detail = () => {
  const { id } = useParams();
  const data = getDataById(id);
  console.log(data);
  return (
    <main>
      <h1>Detail</h1>
    </main>
  );
};
