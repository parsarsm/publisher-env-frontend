export function routeParams(url, params) {
    let output = url;
    for (const param of Object.keys(params)) {
        output = output.replace(`:${param}`, params[param]);
    }

    return output;
}
export function encodeQueryString(params) {
    const keys = Object.keys(params);
    return keys.length
        ? "?" + keys
        .map(key => encodeURIComponent(key)
            + "=" + encodeURIComponent(params[key]))
        .join("&")
        : ""
}
