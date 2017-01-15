import React, { Component } from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link, Location } from 'react-router';

class Navigation extends Component {

    componentDidMount() {
        const { menu } = this.refs;
        $(menu).metisMenu();
    }

    activeRoute(routeName) {

      console.log("location: " + this.props.location.pathname);
      console.log("routename: " + routeName);


      if(this.props.location.pathname == routeName){
        console.log('active true');
        return "active";
      }

      if(routeName == '/'){
        return '';
      }

      let ll = this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
      console.log("menu: " + ll);
        return ll;
    }

    secondLevelActive(routeName) {
        return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
    }

    render() {
        return (
            <nav className="navbar-default navbar-static-side" role="navigation">
                    <ul className="nav metismenu" id="side-menu" ref="menu">
                        <li className="nav-header">
                            <div className="dropdown profile-element"> <span>
                             </span>
                                <a data-toggle="dropdown" className="dropdown-toggle" href="#">
                            <span className="clear"> <span className="block m-t-xs"> <strong className="font-bold">Example user</strong>
                             </span> <span className="text-muted text-xs block">Example position<b className="caret"></b></span> </span> </a>
                                <ul className="dropdown-menu animated fadeInRight m-t-xs">
                                    <li><a href="#"> Logout</a></li>
                                </ul>
                            </div>
                            <div className="logo-element">
                                MŠAC
                            </div>
                        </li>
                        <li className={this.activeRoute("/")}>
                            <Link to="/"><i className="fa fa-th-large"></i> <span className="nav-label">Dashboard</span></Link>
                        </li>
                        <li className={this.activeRoute("/about")}>
                            <Link to="/about"><i className="fa fa-th-large"></i> <span className="nav-label">About</span></Link>
                        </li>
                    </ul>

            </nav>
        )
    }
}

export default Navigation
