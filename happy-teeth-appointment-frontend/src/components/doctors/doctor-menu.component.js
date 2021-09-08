import React from "react";
import './doctor-menu.css'

export default class DoctorMenu extends React.Component {

    render() {
        return (
            <div className="col-md-3 mt-3">
                <nav id="sidebar">
                    <div className="sidebar-header text-center">
                        <div className="common-profile">
                            <img className="common-img" src="https://www.w3schools.com/howto/img_avatar.png" />
                        </div>
                        <h3 className="common-name">Dr. {this.props.currentDoctor.name + " " + this.props.currentDoctor.first_surname + " " + this.props.currentDoctor.second_surname}</h3>
                        <div className="common-details">
                            <h5 className="mb-0">Odontólogo</h5>
                        </div>
                    </div>

                    <ul className="list-unstyled components">
                        <li>
                            <a>Panel de control</a>
                        </li>
                        <li>
                            <a>Citas</a>
                        </li>
                        <li>
                            <a>Mis pacientes</a>
                        </li>
                        <li>
                            <a>Opiniones</a>
                        </li>
                        <li>
                            <a>Mensajes</a>
                        </li>
                        <li>
                            <a>Cerrar Sesión</a>
                        </li>
                    </ul>
                </nav>
            </div>
        )
    }
}