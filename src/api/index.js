import Api from './api';

const baseUrl = 'http://0.0.0.0:8000';
export const serverUrl = (relativeUrl) => {
    return `${baseUrl}${relativeUrl}`;
};
export default new Api(baseUrl);

