import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import TableHeader from '../TableHeader/TableHeader';
import TableContent from '../TableContent/TableContent';
import DownloadButton from '../DownloadButton/DownloadButton';

export default function DataDisplay({ users }) {
    return (
        <Container fluid>
            <DownloadButton />
            <Table striped bordered hover>
                <TableHeader users={users}/>
                <TableContent users={users} />
            </Table>
        </Container>
    )
}