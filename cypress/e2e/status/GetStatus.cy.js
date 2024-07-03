import {checkAPIStatus} from "../../support/api";

describe('Health Check of API', () => {
  it('Get Status', () => {
      checkAPIStatus('/status', 200, { status: "API is up and running" })
  })
})