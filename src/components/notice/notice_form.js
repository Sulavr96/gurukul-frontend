import React, { Component } from 'react';
import { TextArea } from 'semantic-ui-react';

class notice_form extends Component {
    render() {
        return (
            <Form className="col-sm-2 col-md-5 col-lg-3">
            <h2>Notice</h2>

            <FormGroup>
                <Label for="title">Title</Label>
                <TextInput placeholder={'Title'} value={} onChange={}/>
            </FormGroup>

            <FormGroup>
                <Label for="content">Content</Label>
                <TextArea placeholder={'Content'} value={} onChange={}/>
            </FormGroup>

            <Button color="primary" onClick={(event)=>this.handleClick(event)}>Submit</Button><br/>
        </Form>
        );
    }
}

export default notice_form;