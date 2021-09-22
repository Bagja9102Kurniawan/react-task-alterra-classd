import { useState } from "react";
import "./App.css";
import { gql, useQuery, useLazyQuery, useMutation } from "@apollo/client";

export default function App() {
  // const [userId, setUserId] = useState(0);
  // const [list, setList] = useState([]);
  const initialData = {
    nama: "",
    umur: 0,
    jkel: "",
  };
  const [user, setUser] = useState(initialData);
  const AddData = gql`
    mutation MyMutation($object: anggota_insert_input!) {
      insert_anggota_one(object: $object) {
        id
      }
    }
  `;
  const DeleteData = gql`
    mutation MyMutation($id: Int!) {
      delete_anggota_by_pk(id: $id) {
        id
      }
    }
  `;
  const showData = gql`
    query MyQuery {
      anggota {
        nama
        umur
        id
        jkelamin
        keterangans {
          nilai
          pelajaran
          status
        }
      }
    }
  `;

  const { data, loading, error, refetch } = useQuery(showData);
  const [addData, { loading: loadingAdd }] = useMutation(AddData);
  const [deleteData, { loading: loadingDelete }] = useMutation(DeleteData);
  if (loading || loadingAdd || loadingDelete) {
    <>
      <h1 style={{ fontSize: "60px", textAlign: "center" }}>
        Sedang Memuat, mohon tunggu sebentar....
      </h1>
    </>;
  }

  if (error) {
    console.log(error);
    return null;
  }

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleDelete = async (idx) => {
    await deleteData({
      variables: {
        id: idx,
      },
    });
    refetch();
  };
  const onSubmitData = async (e) => {
    e.preventDefault();
    await addData({
      variables: {
        object: {
          nama: user.nama,
          umur: user.umur,
          jkelamin: user.jkel,
        },
      },
    });
    refetch();
    setUser(initialData);
  };
  return (
    <div style={{ marginLeft: "700px" }}>
      <h1>DATA PESERTA KAMPUS MERDEKA</h1>
      <table border="1">
        <tr>
          <td>Nama</td>
          <td>Umur</td>
          <td>Jenis Kelamin</td>
        </tr>
        {data?.Kampus_Merdeka_anggota.map((show) => (
          <tr>
            <td>{show.nama} </td>
            <td>{show.umur}</td>
            <td>
              {show.jkelamin}{" "}
              <button onClick={() => handleDelete(show.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </table>
      <form onSubmit={onSubmitData}>
        <label>
          Nama :
          <input
            onChange={handleInput}
            value={user.nama}
            type="text"
            name="nama"
          />
        </label>
        <label>
          Umur :
          <input
            onChange={handleInput}
            value={user.umur}
            type="number"
            name="umur"
          />
        </label>
        <label>
          Jenis Kelamin :
          <input
            onChange={handleInput}
            value={user.jkel}
            type="text"
            name="jkel"
          />
        </label>
        <label>
          <input type="submit" value="Create" />
        </label>
      </form>
    </div>
  );
}
