import "../styles/Navbar.css"


export default function Navbar() {
    return (
        <div className="navegador d-flex ">
            <nav class="navbar navbar-expand-lg container-fluid d-flex ">
                <div class="container-fluid ">

                    <img src="../../public/logo.png" width={190} height={60} ></img>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <i class="fa-sharp fa-solid fa-bars text-light"></i>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 ">
                            <li class="nav-item d-none d-md-inline">
                                <div className="d-flex align-items-center">
                                    <p className="text-light mt-3 ms-2">
                                        ADMIN
                                    </p>
                                    <i class="fa-sharp fa-regular fa-circle-user text-light fs-1 ms-3"></i>
                                </div>
                            </li>


                        </ul>
                        <ul className="d-lg-none navbar-nav">
                            <li >
                                <div className="d-flex py-3 text-decoration-none text-dark opcionesN" href={""}>
                                    <i class="fa-solid fa-square-parking fs-1 me-3 opcionesN"></i>
                                    <h3 className="opciones">Plazas</h3>
                                </div>
                            </li>

                            <li >
                                <div className="d-flex py-3  text-decoration-none text-dark opcionesN" href={""}>
                                <i class="fa-solid fa-calendar-days fs-1 me-3 opciones"></i>
                                    <h3 className="opciones">Reservas</h3>
                                </div>
                            </li>
                            <li>
                                <div className="d-flex py-3  text-decoration-none text-dark opcionesN" href={""}>
                                <i class="fa-solid fa-user fs-1 me-3 opciones "></i>
                                    <h3 className="opciones">Gestionar</h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>


    )
}