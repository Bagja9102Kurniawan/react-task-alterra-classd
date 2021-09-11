import MotionHoc from "./MotionHoc";
import React, { useState,  useRef } from 'react';
import './Input.css';
import Select from 'react-select'


const InputComponent = () => {
    
    const fotoSurat = useRef(null)
    const options = [
        { value: 'golang', label: 'Coding Backend with Golang' },
        { value: 'react', label: 'Coding Frontend with ReactJS' },
        { value: 'full', label: 'Fullstack Developer' }
      ]
    const dataKosong = {
        nama: "",
        email: "",
        no: 0
    }
    const baseError = {
        nama: "",
        email: "",
        no: 0
        
    }
    const [data, setData] = useState(dataKosong);
    const regex = /^[A-Za-z ]*$/;
    const [errMsg, setErrMsg] = useState("")
    const handleInput =  e => {
        const target = e.target
        const name = target.name;
        const value = e.target.value;

        if(name === "nama"){
            if(regex.test(value)){
                setErrMsg()
            }else{
                setErrMsg("Nama Pengarang harus berupa huruf")
            }
            resetData()
            
        }
    

        setData({
            ...data,
            [name]: value
        })
        
    }
    const handleSubmit = (e) => {
        if(errMsg !== ""){
            alert("Terdapat data yang tidak sesuai!")
        }else{
            alert(`Data Formulir atas nama ${data.nama} Berhasil diterima`)
        }
        e.preventDefault()
    }

    const resetData = () => {
        setData(dataKosong);
        setErrMsg("")
    }
//   console.log(data.nama);
  return (
    <div className="form" onSubmit={handleSubmit}>
    <form onSubmit={handleSubmit}>
      <div className="title">Welcome to</div>
      <div className="subtitle">Pendaftaran Peserta Coding Bootcamp</div>
      <div onChange={handleInput} className="input-container ic1">
        <input minLength="6" maxLength="60" id="nama" name="nama" value={data.nama} className="input" type="text" onChange={handleInput} placeholder=" " />
        <div className="cut"></div>
        <label onChange={handleInput} for="nama" className="placeholder">Nama Lengkap
        </label>
      </div>
      <div onChange={handleInput} className="input-container ic2">
        <input required id="email" name="email" value={data.email} className="input" onChange={handleInput} type="email" placeholder=" " />
        <div className="cut"></div>
        <label for="email" className="placeholder">Email</label>
      </div>
      <div className="input-container ic1">
        <input required id="no" name="no" className="input" value={data.no} onChange={handleInput} type="number" placeholder=" " />
        <div className="cut"></div>
        <label for="no" className="placeholder">No Handphone
        </label>
      </div>
      <div className="ic2">
      <p>Latar Belakang Pendidikan:</p>
      <input type="checkbox" id="topping" name="topping"  />IT
      <input type="checkbox" id="topping" name="topping"  />Non IT
      </div>
      <div className="ic2">
        <Select  options={options} />
      </div>
      <div className="ic2">
      <label>
                Foto Surat:    
                <input 
                 type="file"
                 refs={fotoSurat}
                 name="" 
                 className="" />
            </label>
      </div>
      <div className="ic2">
        <p>Harapan untuk coding bootcamp :</p>
        <textarea value={data.pesan}>Some text...</textarea>
      </div>
      <div className="ic2">
        <button type="submit" value="submit" className="submit">Submit</button>
        <button type="text" onClick={resetData} className="submit">Reset</button>
      </div>
    </form>
    </div>


       
   
    );
};

const InputData = MotionHoc(InputComponent);

export default InputData;
