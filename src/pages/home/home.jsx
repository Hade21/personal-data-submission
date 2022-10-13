import { useNavigate } from "react-router-dom";
import { getData } from "../../utilities/utilities";

export const Home = () => {
  const data = getData();
  const navigate = useNavigate();

  return (
    <main className="flex w-full flex-col items-center justify-center py-12">
      <h1 className="text-center text-2xl font-bold text-slate-700 sm:text-4xl">
        Daftar Member
      </h1>
      <div className="mt-14 table">
        <div className="addMember">
          <button
            className="rounded bg-blue-500 px-4 py-2 text-xs font-semibold text-white sm:text-base"
            onClick={() => navigate("/add")}
          >
            Tambah Data
          </button>
        </div>
        {data && (
          <table className="mt-4">
            <thead className="bg-sky-200 text-sm sm:text-base">
              <tr>
                <th className="borderborder-r-white border-r border-l border-l-blue-200 p-2">
                  No
                </th>
                <th className="border-x border-x-white p-2">Nama</th>
                <th className="hidden border-x border-x-white p-2 sm:block">
                  Email
                </th>
                <th className="hidden border-x border-x-white p-2 sm:block">
                  No. HP
                </th>
                <th className="border-l border-l-white border-r-blue-200 p-2">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((item, index) => {
                  console.log(item.id);
                  return (
                    <tr key={index}>
                      <td className="border border-blue-200 p-2 text-right text-sm sm:text-base ">
                        {index + 1}
                      </td>
                      <td className="border border-blue-200 p-2 text-sm sm:text-base">
                        {item.personalData.nama}
                      </td>
                      <td className="hidden border border-blue-200 p-2 text-sm sm:block sm:text-base">
                        {item.personalData.email}
                      </td>
                      <td className="hidden border border-blue-200 p-2 text-sm sm:block sm:text-base">
                        {item.personalData.noHp}
                      </td>
                      <td className="border border-blue-200 p-2 text-sm sm:text-base">
                        <button
                          className="rounded bg-sky-500 p-2 text-sm font-medium text-white"
                          onClick={() => navigate(`/${item.id}`)}
                        >
                          Lihat Detail
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        )}
        {!data && (
          <h1 className="text-center text-2xl font-bold">Tidak ada member</h1>
        )}
      </div>
    </main>
  );
};
