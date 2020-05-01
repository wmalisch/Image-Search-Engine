import axios from 'axios';

export default axios.create({  // create instance of axios client
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID eKSwJlvoyxFzTDO4ud-QlSgN8sjqSqwQM6OoSEHF4Ls'
    }
})
