import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const URL = process.env.REACT_APP_BACKEND_API_ENDPOINT;

export default function DownloadButton() {
    const [downloadLink, setDownloadLink] = useState('')

    const onClick = async (e) => {
        fetch(`${URL}/download`)
            .then(response => response.text())
            .then(result => setDownloadLink(result))
    }

    return (
        <Container fluid>
            <Button variant="primary" type="submit" onClick={onClick}>
                Download CSV File
            </Button>
            {
                downloadLink ?
                <a href={downloadLink}>Download Link Here!</a>
                :
                <div></div>
            }
        </Container>
    )
}