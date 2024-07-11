import {getAllProducts} from "../../apiObjects/api";

describe('Products Check of API', () => {
  it('Get All Products', () => {
      getAllProducts('/products',200)
  })
})