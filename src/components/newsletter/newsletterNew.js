import React, { Component } from 'react';

import NewNewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {
    
        if(button == 'cancel') {
            //     //save new newsletter on backend. perform a post request
            //     console.log('trying to submit backend');
            // }
            // this.props.history.push('/dashboard')
            console.log('trying to submit');
        }
    }

    onCancel = () => {
        console.log('trying to cancel');
    }

    render() {
        return (
            <div className='new-newsletter'>
                <NewNewsletterForm onCancel={() => this.onCancel()} onSubmit={(event) => this.onSubmit(event)}/>
            </div>
        )
    }
}

export default NewNewsletter;