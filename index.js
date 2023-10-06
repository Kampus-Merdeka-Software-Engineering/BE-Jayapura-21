const express = require("express");
const app = express();
const PORT = 3000;
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

app.listen(PORT, (req, res) => {
    console.log(`Server running on localhost:${PORT}`);
});