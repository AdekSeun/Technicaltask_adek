const { Mainpage } = require('./Mainpage')
const { Categorypage } = require('./Categorypage')
const { Subcategorypage } = require('./Subcategorypage')
const { Productpage } = require('./Productpage')

class Allpagemanager {

    constructor(page) {
        this.page = page;
        this.mainpage = new Mainpage(this.page);
        this.categorypage = new Categorypage(this.page);
        this.subcategorypage = new Subcategorypage(this.page);
        this.productpage = new Productpage(this.page);

    }

    getMainpage() {
        return this.mainpage;
    }
    getCategorypage() {
        return this.categorypage;
    }
    getSubcategorypage() {
        return this.subcategorypage;
    }
    getProductpage() {
        return this.productpage;
    }
}


module.exports = { Allpagemanager };