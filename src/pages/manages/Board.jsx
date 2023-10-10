import React, { useState } from 'react'
import Table from 'react-bootstrap/Table';
import AccountModal from '../../modals/AccountModal';

const Board = ({ listObj = [] }) => {
    const [modalShow, setModalShow] = useState(false);

    for (let index = 0; index < 50; index++) {
        listObj.push({
            name: `Số hưởng số ${index} `,
            address: "2",
            openTime: "3",
            closeTime: "4",
            description: "5",
            images: ["sdfklj"],
        });
    }

    const handleOnclick = () => {
        setModalShow(true);
    };

    const firstItem = {
        name: "1",
        address: "2",
        openTime: "3",
        closeTime: "4",
        description: "5",
        images: ["sdfklj"],
    };

    let tableHead = [];
    Object.keys(firstItem).map((key, index) => {
        tableHead.push(key)
    })
    return (
        <>
            <div className="d-flex justify-content-end p-2">
                <button
                    type="button"
                    className="bg-my-primary text-center text-white fs-5 p-2 rounded-1 border-0"
                    onClick={handleOnclick}
                >
                    Tạo tài khoản nhân viên
                </button>
            </div>
            <Table responsive striped bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        {tableHead.map((key, index) => (
                            <th key={index}>{key}</th>
                        ))}
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listObj.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    {
                                        tableHead.map((key, index) => (
                                            <td key={index}>{item[key]}</td>
                                        ))
                                    }
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <AccountModal
                show={modalShow}
                onHide={() => setModalShow(false)}
                action="Tạo tài khoản"
            />
        </>
    )
}

export default Board