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

import { db } from '../firebase'

class Dashboard extends Component {

  state = {
    data: [],
    overview: []
  }

  readProfiles = async () => {
    try {
      const data = []
      const users = await db.collection('profiles')
        .orderBy('stats')
        .get()

      users.forEach(doc => {
        data.push(doc.data())
      })

      this.setState({ data: data })
    } catch (error) {
      console.error(error)
    }
  }

  readOverviews = async () => {
    try {
      const overview = []
      const docs = await db.collection('overview')
        .get()

      docs.forEach(doc => {
        overview.push(doc.data())
      })

      this.setState({ overview: overview })
    } catch (error) {
      console.error(error)
    }
  }

  componentDidMount() {
    this.readProfiles()
    this.readOverviews()
  }

  handleTheme = (e) => {
    if (e.target.checked) {
      document.documentElement.setAttribute('theme', 'light')
    } else {
      document.documentElement.setAttribute('theme', 'dark')
    }
  }

  putLogo = (social_media) => {
    switch (social_media) {
      case "facebook":
        return logo_face

      case "twitter":
        return logo_twitter

      case "instagram":
        return logo_instagram

      case "YouTube":
        return logo_youtube
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header theme={this.handleTheme} />

        <div className="container">
          <div className="main">
            <div className="List__SocialMedia">
              {this.state.data.map(({
                id,
                username,
                score,
                score_type,
                social_media,
                increase,
                stats
              }) => (
                  <CardSocialMedia
                    key={id}
                    username={username}
                    score={score}
                    score_type={score_type}
                    logo={this.putLogo(social_media)}
                    color_stat={increase}
                    amount={stats}
                    arrow={(increase === "up") ? logo_up : logo_down}
                  />
                )
              )}
            </div>
            <section className="Overview">
              <h2 className="Overview__Title">Overview - Today</h2>
              {this.state.overview.map(({
                id,
                amount,
                social_media,
                increase,
                percentage,
                title
              }) => (
                  <CardToday
                    key={id}
                    title={title}
                    logo={this.putLogo(social_media)}
                    views={amount}
                    arrow={(increase === "up") ? logo_up : logo_down}
                    color_stat={increase}
                    percentage={percentage}
                  />
                )
              )}
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Dashboard;
