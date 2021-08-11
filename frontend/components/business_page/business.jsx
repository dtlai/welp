import React from "react";
import { Link } from "react-router-dom";
import NavBarContainer from "../navbar/navbar_container";
import ReviewFormContainer from "../reviews/review_form_container";
import ReviewIndexContainer from "../reviews/review_index_container";
import { BusinessMap } from "../google_maps/business_map";
import SearchBarContainer from "../search_form/search_form_container";
import Footer from "../footer/footer";
import { FaLinkedin, FaGithub, FaAngellist } from "react-icons/fa";
class Business extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasFetched: false,
    };
  }

  componentDidMount() {
    this.props.fetchBusiness(this.props.match.params.businessId).then(() => {
      this.setState({ hasFetched: true });
    });
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.match.params.businessId !== this.props.match.params.businessId
    ) {
      this.props.fetchBusiness(this.props.match.params.businessId);
    }
    window.scrollTo(0, 0);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.state.hasFetched) {
      return false;
    }
    return true;
  }

  goCreateReview() {
    this.props.history.push(`${this.props.business.id}/createReview`);
  }

  render() {
    if (!this.props.business) {
      return <div>Loading...</div>;
    }
    return (
      <>
        <div className="businesses-container">
          <div className="nav-header-container">
            <div className="nav-header">
              <Link to="/" className="logo-link">
                <img src="https://i.imgur.com/JrsNpWu.png" />
              </Link>
              <SearchBarContainer formType={this.props.formType} />
              <div className="navbar-links">
                <a
                  href="https://www.linkedin.com/in/davidlai9/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="about-icon" size={30} color="black" />
                </a>
                <a
                  href="https://github.com/dtlai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="about-icon" size={30} color="black" />
                </a>
                <a
                  href="https://angel.co/u/davidtlai"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaAngellist className="about-icon" size={30} color="black" />
                </a>
              </div>
              <div className="nav-user-header">
                <NavBarContainer formType={this.props.formType} />
              </div>
            </div>
          </div>
          <div className="create-review-button">
            <button
              className="review-button"
              onClick={() => this.goCreateReview()}
            >
              Write a Review
            </button>
          </div>
          <div className="indiv-business-container">
            <div className="business-pics-container">
              {this.props.business.photoUrls.map((photoUrl, i) => (
                <div className="biz-pic-container">
                  <img className={`biz-pic`} key={i} src={photoUrl} alt="" />
                </div>
              ))}
            </div>
            <div className="biz-name-container">
              <p className="biz-name">{this.props.business.name}</p>
            </div>
            <div className="business-info">
              <p className="biz-address">{this.props.business.address}</p>
              <p className="biz-city">{this.props.business.city}</p>
              <p className="biz-state">{this.props.business.state}</p>
              <p className="biz-biz-zipcode">{this.props.business.biz_zipcode}</p>
              <p className="biz-price-range">{this.props.business.price_range}</p>
              <p className="biz-phone-number">{this.props.business.phone_number}</p>
            </div>
            <Link to="/businesses" className="logo-link">
              <img src="https://delp-seeds.s3.us-west-1.amazonaws.com/briefcase.png" />
            </Link>
          </div>
          <div className="business-map">
            <BusinessMap business={this.props.business} />
          </div>
          <div>
            <ReviewIndexContainer />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Business;
