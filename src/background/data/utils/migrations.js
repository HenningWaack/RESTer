export function migrateHeadersObjectToArray(headers) {
    if (Array.isArray(headers)) {
        return headers;
    }

    return Object.keys(headers).map(name => ({
        name: name,
        value: headers[name]
    }));
}

export function migrateVariablesObject(variables) {
    if (!variables) {
        return {};
    } else {
        if (variables.hasOwnProperty('enabled')) {
            delete variables.enabled;
        }

        return variables;
    }
}
