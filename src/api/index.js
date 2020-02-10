import Api from './api';

const baseUrl = 'http://localhost:8001';
export const serverUrl = (relativeUrl) => {
    return `${baseUrl}${relativeUrl}`;
};
export default new Api(baseUrl);

