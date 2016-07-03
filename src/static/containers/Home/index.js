import React from 'react';
import { connect } from 'react-redux';
import ReactDom from 'react-dom';


class HomeView extends React.Component {

    static propTypes = {
        statusText: React.PropTypes.string
    };

    componentDidMount() {
        $(ReactDom.findDOMNode(this.refs.dropdown)).dropdown();
    }

    componentDidUpdate() {
        $(ReactDom.findDOMNode(this.refs.dropdown)).dropdown('refresh');
    }

    render() {
        return (
            <div className="ui container">
                <div className="ui selection dropdown" ref="dropdown">
                    <input type="hidden" name="gender"/>
                    <i className="dropdown icon"></i>
                    <div className="default text">Gender</div>
                    <div className="menu">
                        <div className="item" data-value="1">Male</div>
                        <div className="item" data-value="0">Female</div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        statusText: state.auth.statusText
    };
};

export default connect(mapStateToProps)(HomeView);
export { HomeView as HomeViewNotConnected };
