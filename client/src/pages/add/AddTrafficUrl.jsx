import { observer } from 'mobx-react-lite';
import React, {useState} from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createTrafficurl } from '../../http/trafficAPI';

const AddTrafficUrl = observer(() => {    
    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [fullUrl,setFullUrl] = useState('')

    const addTraffic = async () => {
        try { 
            let data;
            const formData = new FormData()
            formData.append('name', name)
            formData.append('description', description)
            formData.append('fullUrl', fullUrl)
            data = await createTrafficurl(formData)
            // setTitleUz('')
            // setTitleRu('')
            // setPrice('')
            // setDescriptionUz('')
            toast.success(`${name} Qo'shildi`, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }catch(e) {
            toast.error(e.response.data.message, {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }
    return (
        <div>
            <Container>
                <h1>Add Trafic</h1>
                <Row>
                    <Col>
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Img</Form.Label>
                                        <Form.Control type="text" value={name} onChange={e=>setName(e.target.value)}/>
                                    </Form.Group> 
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Img</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group> 
                                </Col>
                            </Row>   
                            <Row>
                                <Col>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Img</Form.Label>
                                        <Form.Control type="text" value={fullUrl} onChange={e=>setFullUrl(e.target.value)}/>
                                    </Form.Group> 
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                <Form.Group className="mb-3">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control as="textarea" rows={3} value={description} onChange={e=>setDescription(e.target.value)}/>
                                </Form.Group>
                                </Col>
                            </Row>
                            <Button variant={"success"} onClick={addTraffic}>Add</Button>
                        </Form>
                    </Col>
                </Row>
            <ToastContainer />
            </Container>
        </div>
    );
});

export default AddTrafficUrl;