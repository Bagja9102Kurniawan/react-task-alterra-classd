import { Component } from "react";
import ListPass from "./ListPass";
class PassInput extends Component {
    state = {
        nama: "",
        umur: "",
        jenisKelamin: "",
        editing: true
    }
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = (e) => {
    e.preventDefault();

    const formIsNotEmpty = this.state.nama && this.state.umur && this.state.jenisKelamin
    if (formIsNotEmpty) {
        const newData = {
            nama: this.state.nama,
            umur: this.state.umur,
            jenisKelamin: this.state.jenisKelamin
        }
        this.props.tambahPengunjung(newData);
        this.setState({
            nama: "",
            umur: "",
            jenisKelamin: "Pria"
        })
    } else {
        alert("Data masih kosong")
    }
}
handleBukaInput = () => {
    this.setState({
        editing: false
    })
}
handleTutupInput = () => {
    this.setState({
        editing: true
    })
    
}

render() {
    const viewMode = {}
    const editMode = {}

    if (this.state.editing){
        viewMode.display = 'none';

    } else  {
        editMode.display = 'none';
    }
    return (
        <div>
            <div onSubmit={() => {}} style={viewMode} >
                <p>Masukkan nama Anda</p>
                <input type="text" placeholder="Nama Anda..." value={this.state.nama} name="nama" onChange={this.onChange} />

                <p>Masukkan umur Anda</p>
                <input type="text" placeholder="Umur Anda..." value={this.state.umur} name="umur" onChange={this.onChange}  />

                <p>Masukkan jenis kelamin Anda</p>
                <select onChange={this.onChange} name="jenisKelamin" value={this.state.jenisKelamin} >
                    <option value="Pria" selected>Pria</option>
                    <option value="Wanita">Wanita</option>
                </select>
                <button onClick={this.handleSubmit}>Submit </button>
                <button onClick={this.handleTutupInput}>Selesai </button>
            </div>
            
            <button onClick={this.handleBukaInput} style={editMode}>Masukkan nama penumpang</button>
        </div>
    )
}

}
export default PassInput