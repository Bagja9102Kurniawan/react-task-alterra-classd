import { Component } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ListPass from './ListPass'
import PassInput from './PassInput'
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data : [
                {
                    id: uuidv4(),
                    nama: 'Yoga',
                    umur: '21',
                    jenisKelamin: 'Pria'
                },
                {
                    id: uuidv4(),
                    nama: 'Andin',
                    umur: '26',
                    jenisKelamin: 'Wanita'
                },
                {
                    id: uuidv4(),
                    nama: 'Broto',
                    umur: '19',
                    jenisKelamin: 'Pria'
                },
                {
                    id: uuidv4(),
                    nama: 'Seno',
                    umur: '27',
                    jenisKelamin: 'Pria'
                },
                {
                    id: uuidv4(),
                    nama: 'Sandi',
                    umur: '21',
                    jenisKelamin: 'Pria'
                },
                {
                    id: uuidv4(),
                    nama: 'Yesi',
                    umur: '21',
                    jenisKelamin: 'Wanita'
                },
            ]
        }
    }
    hapusPengunjung = (id) => {
        const newListPengunjung = this.state.data.filter((item) => item.id !== id)


        this.setState({data: newListPengunjung})
    }
    tambahPengunjung = (newUser) => {
        const newPengunjung = {id: uuidv4(), ...newUser}

        this.setState({data: [...this.state.data, newPengunjung]})
    }
    render () {

        return (
            <div>
                <ListPass data={this.state.data} hapusPengunjung={this.hapusPengunjung} />
                <PassInput tambahPengunjung={this.tambahPengunjung} />
            </div>
        )
    }
}
export default Home