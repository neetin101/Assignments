
import axios from 'axios';

const accessKey = 'LeftBlankHere';

export default axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID ${accessKey}`
    }
});