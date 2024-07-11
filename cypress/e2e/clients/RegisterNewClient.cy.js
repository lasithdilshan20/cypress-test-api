import {registerNewClient} from "../../endpoint/api";

describe('Client Check of API', () => {
    it('Register New Client', () => {
        registerNewClient('/clients',200)
    })
})