import React from 'react';
import './styles.css'
import greenLogo from '../../images/hapu_green_logo.png'
import playIcon from '../../images/play_icon.svg'
import bannerModal from '../../images/banner_modal.png'
import saraProfile from '../../images/sarah_profile.png'
import nannyShare from '../../images/nanny_share_macbook.png'
import sharedPayments from '../../images/shared_payments.png'
import billingHistory from '../../images/billing_history.png'
import dailyDiary from '../../images/daily_diary.png'
import calendarIcon from '../../images/calendar_icon.svg'
import greyLogo from '../../images/hapu_gray_logo.png'
import facebookLogo from '../../images/Facebook1.png'
import twitterLogo from '../../images/Twitter2.png'
import instagramLogo from '../../images/Instagram2.png'

function Landing() {
    return (
  

<div>
        <header className="header">
            <nav className="header-menu">
                <ul id="header-nav-left">
                <img id="hapu-green-logo" src={greenLogo} alt=""/>
                    <li><a href="">Create your Nanny Share</a></li>
                    <li><a href="">Browse Shares</a></li>
                    <li><a href="">Our Story</a></li>
                </ul>
                <ul id="header-nav-right">
                    <button id="button-become-nanny">Become a Nanny Share Host</button>
                    <li id="signin"><a href=""></a>Sign in</li>
                </ul>
            </nav>
            <div className="header-content">
                <div id="header-content-left">
                    <h1>Easily create or join a local<br/>nanny share with Hapu</h1>
                    <p>Hapu is Airbnb for nanny share. Share your home,
                        nanny and costs <br/> and create new flexible,
                        affordable solutions in childcare.</p>
                    <div id="header-content-left-play">
                        <img src={playIcon} alt=""/>
                        <a href="">See hapu in action (27 seconds)</a>
                    </div>
                </div>
                <div id="header-content-right">
                    <img id="header-content-right" src={bannerModal} alt=""/>
                </div>
            </div>
        </header>
        <div className="profile">
            <img id="profile-img" src={saraProfile} alt="nanny picture"/>
            <a id="profile-available" href="">Sarah’s day care available now in North Sydney</a>
            <h4 id="profile-schedule">Wednesday, Thursday, Friday - 7:30 - 5:30</h4>
        </div>

        <div className="costs">
            <div id="costs-left">
            <h2 id="costs-title">Share your home,<br/> nanny and costs</h2>
            <p id="costs-content">You have a fantastic home, a fantastic nanny and wouldn’t <br/>
                cutting your costs in half be, well, fantastic?! If only it was <br/> easy to connect
                with other parents to share your costs? <br/> Well now it is, with Hapu. &nbsp;
                <a href="">Hapu means tribe</a> and it’s our <br/> foundational 3 tribal principles that empowers
                you to <br/> create and manage your own tribe. A tribe that together <br/> has the power
                to create new affordable solutions in <br/> childcare that work for you and your
                community</p>
                <a id="get-started" href="">Ready to get started?</a>
            </div>
                <div id="costs-right">
            <img id="costs-img" src={nannyShare} alt="Nanny costs"/>
        </div>
        </div>
        <div className="divider"></div>
        <div className="subscription">
            <h3 id="subscription-title">Are you a parent without a nanny and looking to share?</h3>
            <p id="subscription-content">Leave us your name and email and we’ll update you as soon as
                 a share becomes available in your area!</p>
                 <div></div>
            <form id="subscription-form" action="">
                <textarea id="subscription-name" placeholder="  Your&#10;  name"></textarea>
                <textarea  id="subscription-email" placeholder=" Your email"></textarea>
                <button id="subscription-button">Send</button>
                </form>
            </div>
            
        <div className="divider"></div>
        <div className="payments">
            <div id="payments-left">
            <img src={sharedPayments} alt="payments demonstration"/>
            </div> 
            <div id="payments-right">
                <h2 id="payments-title">Shared payments made simple</h2>
                <p id="payments-content">Sometimes it’s hard enough just sharing a restaurant bill. Try <br/>
                     sharing that bill week in, week out and you might encounter <br/>
                     more than a few snares. But not with Hapu. Simply set your <br/>
                     rates and our automated payment system takes care of the <br/>
                     rest. You need enver talk money or who owes what.</p>
                <a id="payments-link" href="">Read how Bridget’s share (without Hapu) ended over $15</a>
            </div> 
        </div>
        <div className="divider"></div>
        <div className="longterm-built">
            <h2 id="longterm-title">A framework built for the long term</h2>
            <p id="longterm-content">Childcare is for the long term. And you need a framework you can count on that gives your share long <br/>
                term viability and success. That’s why we’ve defined Hapu around our three tribal principles; clearly <br/> 
                defined process, transparency over money and equality of participation.</p>
            <a id="longterm-link" href="">Read how Hapu’s tribal background defines our app</a>
            <img id="longterm-img" src={billingHistory} alt="billing history"/>
        </div>
        <div className="divider"></div>
        <div className="comming-soon">
            <img id="coming-img" src={dailyDiary} alt="daily diary"/>
            <h2 id="coming-title">Coming soon: Nanny Share Daily Diary!</h2>
            <p id="coming-content">With the Hapu daily diary your nanny will be able to update you and your sharers with photos <br/> 
                and commentary of the day. You and sharers will receive notifications and you’ll be able to login to view the <br/>
                daily adventures fo your little ones. We can’t wait!</p>
        </div>
    <div>
        <footer>
            <div id="become-nanny">
            <h2 id="become-title">Become a nanny share host</h2>
            <p id="become-content">Takes less than 5 minutes to get started</p>
            <button><img src={calendarIcon} alt=""/><p id="create-nanny">
                Create Your Nanny Share</p> <br/> <p id="take-less">
                    Takes less than 5 minutes</p></button>
                    <a id="browse-nannys" href="">Or browse local nanny-shares</a>
                </div>
                </footer>
                    </div>
        <div className="footer-nav">
            <div>
            <img id="hapu-grey" src={greyLogo} alt="hapu gray logo"/>
        </div>
        
            <nav className="share-nav">
                <ul>
                    <li><a href=""></a>Share Your Nanny</li>
                    <li><a href=""></a>Our Story</li>
                    <li><a href=""></a>Blog</li>
                    <li><a href="">{"Terms & Privacy"}</a></li>
                </ul>
            </nav>
        
        <div>
            <nav>
                <ul className="social-medias">
                    <li><button><img src={facebookLogo} alt=""/></button></li>
                    <li><button><img src={twitterLogo} alt=""/></button></li>
                    <li><button><img src={instagramLogo} alt=""/></button></li>
                </ul>
            </nav>
        </div>
        </div>
    <div className="last-divider"></div>
    <div className="copyright">Copyright © 2017 Hapu PTY Limited All rights reserved</div>
    </div>
    )};

    export default Landing;