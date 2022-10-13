import { useNavigate } from "react-router-dom";
import { getData } from "../../utilities/utilities";

export const Home = () => {
  const data = getData();
  const navigate = useNavigate();

  return (
    <main className="">
      <h1 className="text-4xl font-bold text-center">Daftar Member</h1>
      <div className="table">
        <div className="addMember">
          <button onClick={() => navigate("/add")}>Tambah Data</button>
        </div>
        <table>
          <thead>
            <tr>
              <th className="border border-black">No</th>
              <th className="border border-black">Nama</th>
              <th className="border border-black">Email</th>
              <th className="border border-black">No. HP</th>
              <th className="border border-black">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                console.log(item.id);
                return (
                  <tr key={index}>
                    <td className="border border-black">{index + 1}</td>
                    <td className="border border-black">
                      {item.personalData.nama}
                    </td>
                    <td className="border border-black">
                      {item.personalData.email}
                    </td>
                    <td className="border border-black">
                      {item.personalData.noHp}
                    </td>
                    <td className="border border-black">
                      <button onClick={() => navigate(`/${item.id}`)}>
                        Lihat Detail
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </main>
  );
};
