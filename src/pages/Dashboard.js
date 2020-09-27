import React, { Component } from "react";
import CardSocialMedia from "../components/CardSocialMedia";
import Header from "../components/Header";
import logo_face from '../assets/static/icon-facebook.svg'
import logo_twitter from '../assets/static/icon-twitter.svg'
import logo_instagram from '../assets/static/icon-instagram.svg'
import logo_youtube from '../assets/static/icon-youtube.svg'

import logo_up from '../assets/static/icon-up.svg'
import logo_down from '../assets/static/icon-down.svg'

import "./styles/Dashboard.scss";
import CardToday from "../components/CardToday";

class Dashboard extends Component {

  handleTheme = (e) => {
    if(e.target.checked){
      document.documentElement.setAttribute('theme', 'light')
    }else{
      document.documentElement.setAttribute('theme', 'dark')
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header theme={this.handleTheme}/>

        <div className="container">
          <div className="main">
            <div className="List__SocialMedia">
              <CardSocialMedia 
              username="@DGDevelop" 
              score="1987"
              score_type="Followers"
              logo={logo_face}
              color_stat="up"
              amount="12"
              arrow={logo_up}
              />
              <CardSocialMedia 
              username="@DGDevelop" 
              score="1044"
              score_type="Followers"
              logo={logo_twitter}
              color_stat="up"
              amount="99"
              arrow={logo_up}
              />
              <CardSocialMedia 
              username="@dgdband182" 
              score="11k"
              score_type="Followers"
              logo={logo_instagram}
              color_stat="up"
              amount="1099"
              arrow={logo_up}
              />
              <CardSocialMedia 
              username="David Gómez" 
              score="8239"
              score_type="Subscribers"
              logo={logo_youtube}
              color_stat="down"
              amount="144"
              arrow={logo_down}
              />
            </div>
            <section className="Overview">
              <h2 className="Overview__Title">Overview - Today</h2>
              <CardToday 
                title="Page Views"
                logo={logo_face}
                views="87"
                arrow={logo_up}
                color_stat="up"
                percentage="3%"
              />
              <CardToday 
                title="Likes"
                logo={logo_face}
                views="52"
                arrow={logo_down}
                color_stat="down"
                percentage="2%"
              />
              <CardToday 
                title="Likes"
                logo={logo_instagram}
                views="5462"
                arrow={logo_up}
                color_stat="up"
                percentage="2257%"
              />
              <CardToday 
                title="Profile Views"
                logo={logo_instagram}
                views="52k"
                arrow={logo_up}
                color_stat="up"
                percentage="1375%"
              />
              <CardToday 
                title="Retweets"
                logo={logo_twitter}
                views="117"
                arrow={logo_up}
                color_stat="up"
                percentage="303%"
              />
              <CardToday 
                title="Likes"
                logo={logo_twitter}
                views="507"
                arrow={logo_up}
                color_stat="up"
                percentage="553%"
              />
              <CardToday 
                title="Likes"
                logo={logo_youtube}
                views="107"
                arrow={logo_down}
                color_stat="down"
                percentage="19%"
              />
              <CardToday 
                title="Total Views"
                logo={logo_youtube}
                views="1407"
                arrow={logo_down}
                color_stat="down"
                percentage="12%"
              />
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
