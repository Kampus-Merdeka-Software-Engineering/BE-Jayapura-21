const express = require("express");
const app = express();
const PORT = process.env.PORT||3000;
const bodyParser = require("body-parser");
const { InputData } = require("./models");
const cors = require("cors");

app.use(bodyParser.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(cors({origin:"*"}));

app.get("/tracking/:No_id", async (req, res) => {
    try {
      const nomorId = req.params.No_id;
      const result = await InputData.findOne ({
        where: {
            No_Id: nomorId,
        },
      });
      if (result) {
        return res.send({
            message: "Data berhasil ditampilkan",
        data: result,
        });
      }
      return res.send ({
        message: "Nomor Id tidak ditemukan",
      });
    } catch (error){
        return res.status(500).send({
            message: "Gagal menampilkan data",
        });
    }
});

app.post("/InputBarang", async (req, res) =>{
  try{
    const {
      Nama_Pengirim,
      Email_Pengirim,
      Alamat_Pengirim,
      Nama_Penerima,
      Email_Penerima,
      Alamat_Penerima,
      Your_Message,
    } = req.body;
    const No_Id = new Date().getTime();
    await InputData.create({
      No_Id,
      Nama_Pengirim,
      Email_Pengirim,
      Alamat_Pengirim,
      Nama_Penerima,
      Email_Penerima,
      Alamat_Penerima,
      Your_Message,
    });
    return res.send({
      message: "Data berhasil disimpan",
      status: 200,
      No_Id,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Gagal menambahkan data",
    });
  }
});

app.listen(PORT, (req, res) => {
    console.log(`Server running on localhost:${PORT}`);
});