const USER_EMPTY = {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
            "lat": "",
            "lng": ""
        }
    },
    phone: "",
    website: "",
    company: {
        name: "",
        catchPhrase: "",
        bs: ""
    },
}

const BASE_API_URL = "https://jsonplaceholder.typicode.com"

export { USER_EMPTY, BASE_API_URL }