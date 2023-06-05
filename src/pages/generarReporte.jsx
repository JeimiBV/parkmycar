import "../styles/PagesStyles/generarReporte.css"

import DatePicker from "react-datepicker";
import DocumentPDF from "../components/DocumentPDF";

import { useState } from "react";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { PDFViewer } from "@react-pdf/renderer";
import { postPeticion } from "../functions/useFetch";

export default function () {
    const [dateEntrada, setDateEntrada] = useState(new Date());
    const [dateSalida, setDateSalida] = useState(new Date());
    const [dataForm, setDataForm] = useState({
        plateId: "",
        fromDate: "",
        toDate: ""
    });
    const [datae, setData] = useState();

    const handleNotification = () => {
        toast.warning('¡las fechas no son validas!', { autoClose: 2000 });
    };

    const llenarForm = (e) => {
        setDataForm({ ...dataForm, [e.target.name]: e.target.value })
    }

    const handlePost = async () => {
        if (dataForm.toDate > dataForm.fromDate) {
            setData(await postPeticion("http://parkmycar-001-site1.atempurl.com/Reserves/Plate", dataForm))
        }
        else {
            handleNotification()
        }
    };

    return (
        <div className="containerReporte overflow-y-scroll">
            <h1>Generar Reporte</h1>
            <div className="cardReporte p-5 rounded h-100 mb-3">

                <div className="row w-100 me-0 ms-0 mb-5">

                    <div className="col-md-4 row d-flex justify-content-center align-items-center">
                        <label className="col-md-5"> Fecha inicial</label>
                        <div className="col">
                            <input
                                type="date"
                                name="fromDate"
                                onChange={e => llenarForm(e)}
                                className="bg-date p-2 rounded"
                            />
                        </div>
                    </div>

                    <div className="col-md-4  row d-flex align-items-center">
                        <label className="col-md-4">Fecha final</label>
                        <div className="col">
                            <input
                                type="date"
                                name="toDate"
                                selected={dateEntrada}
                                onChange={e => llenarForm(e)}
                                className="bg-date p-2 rounded"
                            />
                        </div>
                    </div>
                    <input type="text"
                        placeholder="Buscar placa"
                        id="buscadorPlaca"
                        className="col-md-2 "
                        name="plateId"
                        required
                        maxlength="6"
                        onChange={e => {
                            llenarForm(e)
                        }} />
                    <button type="button" class="btn botonReporte col-md-2 ms-1" onClick={() => { handlePost() }}>
                        <i class="fa-solid fa-magnifying-glass me-2"></i>
                        Buscar
                    </button>
                </div>
                {datae ?
                    <PDFViewer style={{ width: "100%", height: "80%" }}>
                        <DocumentPDF
                            datae={datae}
                        ></DocumentPDF>
                    </PDFViewer> : <>
                        Ingrese la placa del vehiculo del cual quiere hacer seguimiento
                    </>
                }

            </div>
        </div>
    );
}