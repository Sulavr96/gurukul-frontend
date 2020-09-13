import React, { Component } from 'react';
import * as InstructorRequestActionCreator from '../../actions/instructor_request';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class InstructorRequestComponent extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: {
        full_name:'',
        address: '',
        email: '',
        phone_number: '',
        resume: ''
        }
      }
  }

  notifySuccess = () => {
    toast("Your request has been recorded. We will reach back to you soon")
  }

  notifyError = () => {
    toast("There was an error")
  }

  render() {
      const {data} = this.state;
    return (
            <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Want to become an instructor?</h2>
              <h3 className="section-subheading text-muted"></h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="full_name" type="text" placeholder="Your Name *" onChange={(event) => this.handleChange(event)} />
                    </div>
                    
                    <div className="form-group">
                      <input className="form-control" id="email" type="email" placeholder="Your Email *" required="required" onChange={(event) => this.handleChange(event)} />
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="phone" type="tel" placeholder="Your Phone *" required="required"  onChange={(event) => this.handleChange(event)}/>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="address" type="tel" placeholder="Your address *" required="required"  onChange={(event) => this.handleChange(event)}/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" id="message" placeholder="Your Message *" required="required" data-validation-required-message="Please enter a message."></textarea>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="file" className="form-control" id = "resume" placeholder="Your Message *" required="required" onChange={(event) => this.handleChange(event)}  ></input>
                    </div>
                  </div>

                  <div className="clearfix"></div>
                  <div className="col-lg-12 text-center">
                    <div id="success"></div>
                    <button id="sendMessageButton" className="btn btn-primary btn-xl text-uppercase" type="submit" onClick={(event)=>this.handleClick(event)}>Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <ToastContainer />
        </div>
        );
  }

  handleChange(event){
    event.preventDefault();
    this.setState({
        data: {
            ...this.state.data,
            [event.target.name] : event.target.value
        }
    })
  }


  handleClick(event){
    event.preventDefault();
    this.props.instructorRequestCreate(this.state.data);
    this.notifySuccess()
    this.props.history.push('/');     
  }
}

function mapStateToProps(state){
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators(InstructorRequestActionCreator, dispatch);
}

const InstructorRequest = connect(mapStateToProps, mapDispatchToProps)(InstructorRequestComponent);

export default InstructorRequest;