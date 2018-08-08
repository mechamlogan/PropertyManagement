import {
    SET_NEWSLETTERS
} from './types';

export function fetchNewsletters() {
    const response = {
        data: [
            {
                _id: '115',
                title: 'Happy Holidays',
                body: 'Bacon ipsum dolor amet cow strip steak boudin hamburger chicken, rump tongue meatball turducken shoulder prosciutto pork belly sirloin tri-tip. Picanha sirloin jowl biltong corned beef meatball, buffalo pastrami strip steak ground round porchetta cupim. Cupim tenderloin chuck ground round. Drumstick pastrami prosciutto short ribs flank burgdoggen cow sausage frankfurter fatback bacon ham tongue biltong. Landjaeger short ribs brisket sausage. Landjaeger porchetta ground round buffalo spare ribs tongue. Pork loin venison pork turkey, ground round picanha turducken.',
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            },
            {
                _id: '935',
                title: 'Second Newsletter',
                body: 'Ground round buffalo spare ribs tongue. Pork loin venison pork turkey, ground round picanha turducken.',
                date: new Date(),
                imageUrl: 'http://via.placeholder.com/960x258'
            }
        ]
    }

    return {
        type: SET_NEWSLETTERS,
        payload: response.data
    }
}