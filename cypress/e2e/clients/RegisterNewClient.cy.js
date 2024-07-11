import {registerNewClient} from "../../apiObjects/api";

describe('Client Check of API', () => {
    it('Register New Client', () => {
        registerNewClient('/clients',200)
    })
})