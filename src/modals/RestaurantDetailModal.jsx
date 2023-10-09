import React, { useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import AppContext from '../contexts/AppContext/AppContext';
import { useNavigate } from 'react-router-dom';

const infoShow = [
    "image",
    "address",
    "openClose",
    "reportOrderCount",
    "des"
];

const RestaurantDetailModal = ({ show, onHide, restaurantModel }) => {
    const { reservation, setReservation } = useContext(AppContext);
    const navigate = useNavigate();
    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {restaurantModel.title}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Thông tin nhà hàng</h4>
                {
                    infoShow.map((item, index) => {
                        return <div className='row' key={index}>
                            <div className='col'>
                                {item}
                            </div>
                            <div className='col'>
                                {restaurantModel[item]}
                            </div>
                        </div>
                    })
                }
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
                <Button onClick={() => { 
                    reservation["restaurantId"] = restaurantModel.title;
                    setReservation(reservation);
                    onHide();
                    navigate("/table");
                    }}>Đặt bàn</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default RestaurantDetailModal