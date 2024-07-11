import spok from "cy-spok";
import {getSingleProducts} from "../../apiObjects/api";
describe('Products Check of API', () => {
      it('Get Valid Single Products', () => {
          let id = "1001"
          getSingleProducts(id,200)
      })
    it('Get Invalid Single Products', () => {
        let id = "001"
        getSingleProducts(id,400)
    })
})