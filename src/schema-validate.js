import lodash from 'lodash';

export function schemaValidate(schema) {
    const keysMap = schema._ids._byKey.keys();
    const keys = [...keysMap];

    return async function (params) {
        const data = lodash.pick(params, keys);
        const result = schema.validate(data, { abortEarly: false });
        if (result.error) {
            throw new Error({
                message: result.error.details.map((r) => r.message).join(', '),
            });
        }
    };
}
