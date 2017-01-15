import React from 'react';

class Footer extends React.Component {

    render() {
        let now = new Date().getFullYear();
        console.log(now);
        return (
            <div className="footer">
                <div className="pull-right">
                    My Škoda Gateway status: <strong className="footerMyskoda">Active</strong>
                </div>
                <div>
                    <strong>My Škoda</strong> Admin Console &copy; {now}
                </div>
            </div>
        )
    }
}

export default Footer