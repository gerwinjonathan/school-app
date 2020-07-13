import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Table, Badge } from 'reactstrap';
import { AiOutlineEdit, AiOutlineDelete } from 'react-icons/ai';

const ListBar = (props) => {
    return (
        <tr>
            <td>{props.student.student_name}</td>
            <td>{props.student.student_number}</td>
            <td>{props.student.student_entry}</td>
            <td>
                {props.student.student_verification ? <Badge color="primary">Verified</Badge> : <Badge color="warning">Not Verified</Badge>}
            </td>
            <td>
                <Link to={"/edit/" + props.student._id}><AiOutlineEdit /></Link>
                <Link to={"/delete/"+props.student._id}><AiOutlineDelete /></Link>
            </td>
        </tr>
    );
}

const ListStudent = () => {
    const [listData, setListData] = useState({ lists: [] });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                'http://localhost:4000/all_student/'
            );
            setListData({ lists: result.data });
        };
        fetchData();
    }, []);

    return (
        <div>
            <h3>List Student</h3>
            <Table striped style={{ marginTop: 20 }}>
                <thead>
                    <tr>
                        <th>Student Name</th>
                        <th>Student Number</th>
                        <th>Student Entry</th>
                        <th>Verification</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {listData.lists.map((current, i) => (
                        <ListBar student={current} key={i} />
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default ListStudent;