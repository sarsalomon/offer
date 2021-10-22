import { observer } from 'mobx-react-lite';
import React, {useState} from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createCategory } from '../../http/categoryAPI';

const AddCategory = observer(() => {
    const [nameUz,setNameUz] = useState('')

    const addCategory = async () => {
        try { 
            let data;
            const formData = new FormData()
            formData.append('nameUz', nameUz)
            data = await createCategory(formData)
            toast.success(`${nameUz} Qo'shildi`, {
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
                                        <Form.Label>Name Uz</Form.Label>
                                        <Form.Control type="text" value={nameUz} onChange={e=>setNameUz(e.target.value)}/>
                                    </Form.Group> 
                                </Col>
                                <Col md={6}>
                                    <Form.Group className="mb-3">
                                        <Form.Label>Name Ru</Form.Label>
                                        <Form.Control type="text" />
                                    </Form.Group> 
                                </Col>
                            </Row> 
                            <Button variant={"success"} onClick={addCategory} className='text-end'>Add</Button>
                        </Form>
                    </Col>
                </Row>
            <ToastContainer />
            </Container>
        </div>
    );
});

export default AddCategory;