import React, { Component } from 'react';
class NoticeView extends Component {

    componentDidMount() {
        this.props.noticeFetch()
    }

    render() {
        let notice_view;
        if(this.props.notice && this.props.notice.notice) {
            notice_view = this.props.notice.notice.map(noticeObj=> {         
                return <ul key={noticeObj.id}>
                    <li>{noticeObj.title}</li>
                    <p>{noticeObj.content}</p>
                </ul>
                }
            )
        }
        return (
            <div>
                <h1> Notice</h1>
                    {notice_view}            
            </div>
            );
    }    
}
    

export default NoticeView;
