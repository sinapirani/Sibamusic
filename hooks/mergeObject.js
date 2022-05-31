

const mergeObjects = (...object) => {
    object.reduce((prev, next) => {
        return {...prev, ...next}
    })
}