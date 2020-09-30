import React, {Component} from 'react';

import DaftarMakanan from '../Lib/DaftarMakanan';
import FormMakanan from '../Form/FormMakanan';

const listmakanan = [
  {
    NamaMakanan: "Nasi Padang",
    Harga: "20.000"
  },
  {
    NamaMakanan: "Sate",
    Harga: "20.000"
  },
  {
    NamaMakanan: "Soto",
    Harga: "10.000"
  },
  {
    NamaMakanan: "Uduk",
    Harga: "10.000"
  },
  {
    NamaMakanan: "Nasi Kuning",
    Harga: "15.000"
  }
]

class MenuMakanan extends Component{
  render(){
    return(
      <div>
        <h3>Daftar Makanan Favourite</h3>
        <table>
          <tbody>
            <tr>
              {DaftarMakanan.map((value,index) => {
                return(
                  <td key={index}>
                    <img
                      src = {value.img}
                      alt="Product Makanan"
                      width="150"
                      height="100"
                    />
                    <center>
                      <p>{value.NamaMakanan}</p>
                      <p>Harga : Rp. {value.Harga}</p>
                    </center>
                  </td>
                )
              })
              }
            </tr>
          </tbody>
        </table>
        <h4>List Makanan</h4>
        {listmakanan.map((data,index)=>{
          return(
            <div key={index}>
              <p>
                {data.NamaMakanan} | Harga Rp. {data.Harga}
              </p>
            </div>
          )
        }
        )}
        <FormMakanan/>
      </div>
    )
  }
}
 export default MenuMakanan;