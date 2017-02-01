import React, { Component } from "react";
import _ from 'lodash';

class PageHeading extends Component {

  /**
   * 
   * 
   * @returns
   * 
   * @memberOf PageHeading
   * use lodash to assign fallback value in case issues with react router
   */
  render() {
    return (
      <h1>{_.get(this.props.route,
        this.props.pageTitle,
        this.props.value)}</h1>
    );
  }
}

export default PageHeading;
