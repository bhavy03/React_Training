export const incNum = (num) => {
    return {
        type: "increment",
        payload: num

    }
}

export const decNum = () => {
    return {
        type: "decrement"
    }
}