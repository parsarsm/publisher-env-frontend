import Api from './api';

const baseUrl = '192.168.43.218:8001';
export const serverUrl = (relativeUrl) => {
    return `${baseUrl}${relativeUrl}`;
};
export default new Api(baseUrl);

