export function routeParams(url, params) {
    let output = url;
    for (const param of Object.keys(params)) {
        output = output.replace(`:${param}`, params[param]);
    }

    return output;
}