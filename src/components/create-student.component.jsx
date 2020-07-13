import React, { useState, useEffect } from 'react';
import { Form, FormGroup, Label, Input, Col, Button } from 'reactstrap';
import { AiOutlineUserAdd, AiOutlineUser, AiOutlineExport, AiOutlineForward } from 'react-icons/ai';
import axios from 'axios';

const CreateStudent = (props) => {
    const [data, setData] = useState({
        student_name: "",
        student_address: "",
        student_number: "",
        student_entry: "",
        student_year: "",
        student_verification: false
    });

    const onChangeStudentData = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitStudentData = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4000/all_student/add', data).then(res => console.log(res.data));
        setData({
            student_name: "",
            student_address: "",
            student_number: "",
            student_entry: "",
            student_year: "",
            student_verification: false
        });
    }

    return (
        <div style={{ marginTop: 10 }}>
            <h3><AiOutlineUserAdd /> Create Student</h3>
            <Form onSubmit={onSubmitStudentData}>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineUser /> Student Name </Label>
                        <Input
                            type="text"
                            name="student_name"
                            className="form-control"
                            value={data.student_name}
                            onChange={onChangeStudentData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Address </Label>
                        <Input
                            type="text"
                            name="student_address"
                            className="form-control"
                            value={data.student_address}
                            onChange={onChangeStudentData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col>
                        <Label><AiOutlineExport /> Student Number </Label>
                        <Input
                            type="number"
                            name="student_number"
                            className="form-control"
                            value={data.student_number}
                            onChange={onChangeStudentData} />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Entry Level </Label>
                        <Input
                            type="text"
                            name="student_entry"
                            className="form-control"
                            value={data.student_entry}
                            onChange={onChangeStudentData} />
                    </Col>
                    <Col md={6}>
                        <Label><AiOutlineExport /> Entry Year </Label>
                        <Input
                            type="number"
                            name="student_year"
                            className="form-control"
                            value={data.student_year}
                            onChange={onChangeStudentData} />
                    </Col>
                </FormGroup>
                <Button color="primary"><AiOutlineForward /> Submit</Button>
            </Form>
        </div>
    );
}

export default CreateStudent;