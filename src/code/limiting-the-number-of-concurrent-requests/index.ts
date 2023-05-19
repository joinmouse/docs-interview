function concurrencyRequest(urls: string[], limitMaxNum: number) {

    const getFetch = (url: string, index: number) =>  {
        return new Promise((resolve, reject) => {
            fetch(url)
            .then(res => res.json())
            .then(res => resolve(res))
            .catch(err => reject(err))
        })
    }
    return getFetch(urls[0], 1)
}
export default concurrencyRequest;