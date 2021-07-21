import React from 'react'
import { Link } from 'react-router-dom'
import NavBarContainer from '../navbar/navbar_container'
import BusinessIndexMap from '../google_maps/business_index_map';

class BusinessIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          hasFetched: false,
          search: this.props.location.search.split("=")[1],
        };
    }

    componentDidMount() {
      if (!this.state.search) {
        this.props.fetchBusinesses().then(() => {
          this.setState({ hasFetched: true });
        });
      }
      else {
        this.props
          .searchBusinesses(this.state.search)
          .then(() => this.setState({ hasFetched: true }));
      }
        
    }


    render() {
        if (!this.state.hasFetched) {
            return null;
        }
        return (
          <>
            <div className="businesses-container">
              <div className="businesses-header-container">
                <Link to="/" className="logo-link">
                  <img src="https://i.imgur.com/JrsNpWu.png" />
                </Link>
                <div className="businesses-user-header">
                  <NavBarContainer />
                </div>
              </div>
              <div>
                {/* <BusinessIndexMap businesses={this.props.businesses}/> */}
              </div>
              <div className="list-of-bizs">
                {this.props.businesses.map((business, i) => (
                  <Link to={`/businesses/${business.id}`} key={i}>
                    {business.name}
                  </Link>
                ))}
              </div>
            </div>
          </>
        );
    }
}

export default BusinessIndex;
