import { useEffect } from "react";
import ListItem from "./ListItem";

import useDeleteUser from "../hooks/useDeleteUser";
import useGetUser from "../hooks/useGetUser";
import useUpdateUser from "../hooks/useUpdateTodo";

const ListPassenger = () => {
  const { anggota, loading, error, subscribeUser } = useGetUser();
  const { updateUser, loadingUpdate } = useUpdateUser();
  const { deleteUser, loadingDelete } = useDeleteUser();

  useEffect(() => {
    subscribeUser();
  });

  if (error) {
    return <h3>Terjadi kesalahan</h3>;
  }

  const hapusPengunjung = (xxxx) => {
    deleteUser({
      variables: {
        id: xxxx,
      },
    });
    setTimeout(() => {
      alert("data berhasil dihapus");
    }, 1500);
  };

  const editAnggota = async (idx) => {
    const item = anggota.find((v) => v.id === idx);
    const gantinama = prompt("masukan nama", item.nama);
    if (gantinama) {
      updateUser({
        variables: {
          id: idx,
          nama: gantinama,
        },
      });

      setTimeout(() => {
        alert("nama berhasil diubah");
      }, 3000);
    }
  };

  if (loading || loadingDelete || loadingUpdate) {
    return <h3>Loading...</h3>;
  }

  return (
    <div>
      <table cellPadding="5px" cellSpacing="0" style={{ margin: "auto" }}>
        <thead bgcolor="red">
          <tr>
            <td>Nama</td>
            <td>Umur</td>
            <td>Jenis Kelamin</td>
            <td bgcolor="white" className="removeBorder"></td>
          </tr>
        </thead>
        {anggota.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            data={item}
            editAnggota={() => editAnggota(item.id)}
            hapusPengunjung={() => hapusPengunjung(item.id)}
          />
        ))}
      </table>
    </div>
  );
};

export default ListPassenger;
