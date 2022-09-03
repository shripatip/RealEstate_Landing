import React from 'react';
import axios from 'axios';


export const Fetch = async (url,Options) => {

    const response = await axios.get(url, Options);
    console.log(response);
    return response;
}
