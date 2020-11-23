import React from 'react';
import Header from '../components/Header';
import '../assets/styles/notificationView.css'
const NotificactionView = () => {
    return (
        <>
            <Header />
            <div className="contenedor-Notify">
                <div className="div-notify">
                    <p className="text-notify">Notifications</p>
                    <div className="scroll-notify scrollDiv">
                    <table>
                        <tr>
                            <th>User</th>
                            <th>Name Project</th>
                            <th>Actions</th>
                        </tr>
                        <tr>
                            <td>Alejandra Jaimes</td>
                            <td>Scrum</td>
                            <td>
                                <button className="btn btn-primary btn-notify btn-accept">Accept</button>
                                <button className="btn btn-danger btn-notify">Decline</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Abraham Narvaez</td>
                            <td>Peluqueria</td>
                            <td>
                                <button className="btn btn-primary btn-notify btn-accept">Accept</button>
                                <button className="btn btn-danger btn-notify">Decline</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Brad Pitt</td>
                            <td>Portafolio</td>
                            <td>
                                <button className="btn btn-primary btn-notify btn-accept">Accept</button>
                                <button className="btn btn-danger btn-notify">Decline</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Alejandra Jaimes</td>
                            <td>Scrum</td>
                            <td>
                                <button className="btn btn-primary btn-notify btn-accept">Accept</button>
                                <button className="btn btn-danger btn-notify">Decline</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Alejandra Jaimes</td>
                            <td>Scrum</td>
                            <td>
                                <button className="btn btn-primary btn-notify btn-accept">Accept</button>
                                <button className="btn btn-danger btn-notify">Decline</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Alejandra Jaimes</td>
                            <td>Scrum</td>
                            <td>
                                <button className="btn btn-primary btn-notify btn-accept">Accept</button>
                                <button className="btn btn-danger btn-notify">Decline</button>
                            </td>
                        </tr>
                        <tr>
                            <td>Alejandra Jaimes</td>
                            <td>Scrum</td>
                            <td>
                                <button className="btn btn-primary btn-notify btn-accept">Accept</button>
                                <button className="btn btn-danger btn-notify">Decline</button>
                            </td>
                        </tr>
                    </table>
                    </div>
                    <hr/>
                </div>
            </div>
        </>
    );
}

export default NotificactionView;