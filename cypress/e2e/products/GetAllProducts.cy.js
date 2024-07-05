import spok from "cy-spok";
import {getAllProducts} from "../../endpoint/api";

describe('Products Check of API', () => {
  it('Get All Products', () => {
      getAllProducts('/products',200)
  })
})