import { observer } from 'mobx-react-lite';
import React, {useEffect,useState} from 'react';
import {Col, Container, Row, Table, Button} from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { deleteTrafficurl, fetchTrafficurls } from '../../http/trafficAPI';
import { ADD_TRAFFIC_ROUTE } from '../../utils/consts';

const TrafficUrl = observer(() => {
    const [allItems, setAllItems] = useState([])

    useEffect(() => {
        fetchTrafficurls().then(data => setAllItems(data))
    }, [])

    const deleteTraffic = (id) =>{
        deleteTrafficurl(id)
    }

    return (
        <div>
            <Container>
                <div className="d-flex">
                    <h2>Traffic</h2>
                    <NavLink to={ADD_TRAFFIC_ROUTE}><Button variant={'outline-success'}>ADd</Button></NavLink>
                </div>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>№</th>
                                <th>Name</th>
                                <th>Full Url</th>
                                <th>Short Url</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    allItems.map(url =>
                                        <tr
                                        key={url._id}
                                        >
                                            <td>{url.name}</td>
                                            <td>{url.fullUrl}</td>
                                            <td><a href={url.shortUrl} target="_blank">{url.shortUrl}</a></td>
                                            <td>{url.description}</td>
                                            <td>
                                                {/* <Button variant="primary" onClick={() => history.push(GET_PRODUCT_ROUTER + '/'+product._id)}>view</Button> */}
                                                <Button variant="danger" className="ms-2" onClick={() => deleteTraffic(url._id)}>delete</Button>
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

export default TrafficUrl;