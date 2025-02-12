class queryProducts {
    products = []
    query = {}
    constructor(products,query){
        this.products = products
        this.query=query
    }
    categoryQuery = () =>{
        // this.products = this.query.category ? this.products.filter(c=>c.category===this.query.category) : this.products
        this.products = this.query.category ? this.products.filter(c=>c.tag.includes(this.query.category)) : this.products

        return this
    }
    ratingQuery = () =>{
        this.products = this.query.rating ? this.products.filter(c=> parseInt(this.query.rating)<=c.rating) : this.products
        return this
    }
    priceQuery = () =>{
        this.products = this.query.lowPrice ? this.products.filter(c=> c.price>=parseInt(this.query.lowPrice)&&c.price<=parseInt(this.query.highPrice)) : this.products
        return this
    }

    sortByPrice = () => {
        if(this.query.sortPrice){
            if (this.query.sortPrice==='low-to-high') {
                this.products = this.products.sort(function(a,b){return a.price - b.price})
            } else {
                this.products = this.products.sort(function(a,b){return b.price - a.price})
            }
        }
        return this
    }

    skip = () => {
      
        let {pageNumber} = this.query
        const skipPage = (parseInt(pageNumber)-1)*this.query.perPage
        let skipProduct = []
        for (let index = skipPage; index < this.products.length; index++) {
            skipProduct.push(this.products[index])            
        }
        this.products = skipProduct
        return this
    }

    limit = () => {

        let temp = []
        if (this.products.length>this.query.perPage) {
            for (let index = 0; index < this.query.perPage; index++) {
                temp.push(this.products[index])
                
            }
        }
        else {
            temp = this.products
        }
        this.products = temp
        return this
    }

    getProducts = () => {
        return this.products
    }

    countProducts = () =>{
       
        return this.products.length
    }

    searchQuery = () => {
        this.products = this.query.searchValue ? this.products.filter(p => p.name.toUpperCase().indexOf(this.query.searchValue.toUpperCase())>-1) : this.products
        return this
    }
    

}
module.exports = queryProducts