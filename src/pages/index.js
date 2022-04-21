import React from 'react'
import Helmet from 'react-helmet'

import Gallery from '../components/Gallery'
import Layout from '../components/layout'


const HomeIndex = () => {
  const siteTitle = 'Midori Nakamura Portforio Site.'
  const siteDescription = 'Midori Nakamura Portforio Site.なかむらみどりのポートフォリオサイトです。制作実績などを掲載しております。'
  const siteUrl = 'https://wwweric.github.io/'

  return (
    <Layout>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteTitle} />
        <meta property="og:site_name" content={siteTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={siteUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="og:image" content="https://wwweric.github.io/ogp_img.jpg" />
      </Helmet>

      <div id="main">
        <section id="one">
          <header className="major">
            <h2>
              Midori Nakamura　
              <br />
              Frontend/Markup Engineer
            </h2>
          </header>
          <p>
            2013/4~2016/4 株式会社モンスター・ラボ<br />
            2016/10~ フリーランスエンジニア<br />
            <br />
            HTML/CSS/sass/Pug(Jade)/javascript(jquery)/gulp/Bootstrap/Wordpress/  etc...<br />
          </p>
        </section>

        <section id="two">
          <h2>Recent Work</h2>

          <Gallery />

        </section>

        <section id="three">
          <h2>Get In Touch</h2>
          <p>
          </p>
          <div className="row">
            <div className="4u 12u$(small)">
              <ul className="labeled-icons">
                <li>
                  <h3 className="icon fa-twitter">
                    <span className="label">Twitter</span>
                  </h3>
                  <a href="https://twitter.com/wwweric">wwweric</a>
                </li>
                <li>
                  <h3 className="icon fa-facebook">
                    <span className="label">Facebook</span>
                  </h3>
                  <a href="https://m.me/nkmr.mmm">nkmr.mmm</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default HomeIndex
