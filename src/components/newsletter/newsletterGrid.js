import React, { Component } from 'react';
import NewsletterBox from './newsletterBox';
import NewsletterArchive from './newsletterArchive';

import NewsletterLatest from './newsletterLatest';

class NewsletterGrid extends Component {
    render() {

        const latest =  {
            _id: '114',
            title: 'Happy Holidays',
            body: 'Bacon ipsum dolor amet cow strip steak boudin hamburger chicken, rump tongue meatball turducken shoulder prosciutto pork belly sirloin tri-tip. Picanha sirloin jowl biltong corned beef meatball, buffalo pastrami strip steak ground round porchetta cupim. Cupim tenderloin chuck ground round. Drumstick pastrami prosciutto short ribs flank burgdoggen cow sausage frankfurter fatback bacon ham tongue biltong. Landjaeger short ribs brisket sausage. Landjaeger porchetta ground round buffalo spare ribs tongue. Pork loin venison pork turkey, ground round picanha turducken.',
            date: new Date(),
            imageUrl: 'http://via.placeholder.com/960x258'
        }
        return (
            <div className="newsletter-grid">
                {/* add button */}
                <NewsletterBox date={new Date()}/>
                <NewsletterArchive />
                <NewsletterLatest {...latest}/>
            </div>
        )
    }
}

export default NewsletterGrid;