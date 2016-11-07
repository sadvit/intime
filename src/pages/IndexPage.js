import React, { Component } from 'react'
//import { connect } from 'react-redux'
import Wrapper from '../components/Wrapper.js'
import AuthLink from '../components/AuthLink.js'

export default class IndexPage extends Component {

  render() {
      return (
        <Wrapper pageName="index">
          <div className="title">
            <span className="header">Login using one of the social networks</span>
            <span className="descr">This service allows you to respond quickly to all of your messages from different social networks</span>
          </div>
          <div className="links nonDraggableImage">
            <div className="links-container">
              <img alt={this.props.alt} className="main-img" src="assets/mail.svg"/>
              <AuthLink type="vk"/>
              <AuthLink type="facebook"/>
              <AuthLink type="linkedIn"/>
              <AuthLink type="whatsapp"/>
              <AuthLink type="telegram"/>
              <AuthLink type="skype"/>
            </div>
          </div>
        </Wrapper>
      )
    }
}
