import "./Home.css";
const ListItem = (props) => {
  const { nama, umur, jkelamin } = props.data;
  const { hapusPengunjung, editAnggota } = props;

  return (
    <tbody>
      <tr>
        <td>{nama}</td>
        <td>{umur}</td>
        <td>{jkelamin}</td>
        <td className="removeBorder" onClick={editAnggota}>
          <button>Sunting nama</button>
        </td>
        <td className="removeBorder" onClick={hapusPengunjung}>
          <button>Hapus</button>
        </td>
      </tr>
    </tbody>
  );
};

export default ListItem;
