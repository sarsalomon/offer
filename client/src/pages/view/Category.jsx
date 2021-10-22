import { observer } from 'mobx-react-lite';
import React, {useEffect,useState} from 'react';
import {Col, Container, Row, Table, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { deleteCategory, fetchCategories } from '../../http/categoryAPI';
import { ADD_CATEGORY_ROUTE } from '../../utils/consts';

const Category = observer(() => {
    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        fetchCategories().then(data => setAllItems(data))
    }, [])

    const deleteC= (id) =>{
        deleteCategory(id)
    }

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <h2>Category</h2>
                    <NavLink to={ADD_CATEGORY_ROUTE}><Button variant={'outline-success'}>ADd</Button></NavLink>
                </div>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>№</th>
                                <th>Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allItems.map(category =>
                                        <tr
                                        key={category._id}
                                        >
                                            <td>{category.nameUz}</td>
                                            <td>
                                                {/* <Button variant="primary" onClick={() => history.push(GET_PRODUCT_ROUTER + '/'+product._id)}>view</Button> */}
                                                <Button variant="danger" className="ms-2" onClick={() => deleteC(category._id)}>delete</Button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    );
});

export default Category;