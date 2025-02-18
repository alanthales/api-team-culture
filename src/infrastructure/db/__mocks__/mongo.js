const collection = () => ({
    insertOne: () => Promise.resolve({}),
    find: () => ({
        toArray: () => Promise.resolve([]),
    }),
    findOne: () => Promise.resolve({}),
    replaceOne: () => Promise.resolve({}),
    deleteOne: () => Promise.resolve({}),
});

export const MongoWrapper = {
    getDb: () => Promise.resolve({ collection }),
}
