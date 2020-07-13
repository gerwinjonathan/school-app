import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUser, AiOutlineExport, AiOutlineDelete } from 'react-icons/ai';
import axios from 'axios';

const DeleteStudent = (props) => {
    const [data, setData] = useState({
        student_name: "",
        student_address: "",
        student_number: "",
        student_entry: "",
        student_year: "",
        student_verification: false
    });

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `http://localhost:4000/all_student/${props.match.params.id}`
            );
            setData({ ...result.data });
        };
        fetchData();
    }, []);

    const onDeleteStudentData = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:4000/all_student/delete/${props.match.params.id}`, data).then(res => console.log(res.data));
        props.history.push('/');
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3>Delete Student</h3>
            <Form onSubmit={onDeleteStudentData}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser /> Student Name </Label>
                        <Input
                            readOnly
                            type="text"
                            name="student_name"
                            className="form-control"
                            value={data.student_name} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Address </Label>
                        <Input
                            readOnly
                            type="text"
                            name="student_address"
                            className="form-control"
                            value={data.student_address} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Student Number </Label>
                        <Input
                            readOnly
                            type="number"
                            name="student_number"
                            className="form-control"
                            value={data.student_number}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Entry Level </Label>
                        <Input
                            readOnly
                            type="text"
                            name="student_entry"
                            className="form-control"
                            value={data.student_entry} />
                    </Col>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Entry Year </Label>
                        <Input
                            readOnly
                            type="number"
                            name="student_year"
                            className="form-control"
                            value={data.student_year}/>
                    </Col>
                </FormGroup>
                <Button color="danger"><AiOutlineDelete /> Delete Data</Button>
            </Form>
        </div>
    );
}

export default DeleteStudent;