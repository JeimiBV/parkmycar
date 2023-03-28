import "../styles/Sidebar.css"

export default function SideBar() {
    return (
        <div className="main d-none d-lg-inline">
            <ul>
                <div className="opcion">
                    <div className="d-flex py-3 text-decoration-none text-dark align-items-center" >
                        <i class="fa-solid fa-square-parking fs-1 me-3 opciones"></i>
                        <h3 className="opciones fs-5">Plazas</h3>
                    </div>
                </div>

                <div className="opcion">
                    <div className="d-flex py-3  text-decoration-none text-dark align-items-center" >
                        <i class="fa-solid fa-calendar-days fs-1 me-3 opciones"></i>
                        <h3 className="opciones fs-5">Reservas</h3>
                    </div>
                </div>
                <div className="opcion">
                    <div className="d-flex py-3  text-decoration-none text-dark align-items-center" >
                        <i class="fa-solid fa-user fs-1 me-3 opciones "></i>
                        <h3 className="opciones fs-5">Gestionar</h3>
                    </div>
                </div>
            </ul>
        </div>
    )
}