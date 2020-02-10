import _ from "lodash";
import faker from "faker";

export const searchActionTypes = {
    SEARCH_START: 'SEARCH_START',
    SEARCH_END: 'SEARCH_END',
};

export function searchAction(value) {
    return async (dispatch) => {
        dispatch({type: searchActionTypes.SEARCH_START});
        // const {response, error} = await Api.search(value);
        await new Promise(res => setTimeout(res, 2000));
        const {response, error} = {response: null, error: null};
        //
        // let res = response.map(e => {
        //     return {
        //         description: e.type,
        //         title: e.title,
        //         id: e.id,
        //     }
        // });
        let res = _.times(5, () => ({
            title: faker.company.companyName(),
            description: 'post',
            image: faker.internet.avatar(),
            id: 1
        }));
        // console.log(res);

        dispatch({type: searchActionTypes.SEARCH_END, payload: {result: res}});
    }

}
