const Product = require('./model/product')

class FakeDb{

  constructor(){
    this.products = [
        {
          coverImage:'./assets/img/phone-cover.jpg',
          name: 'Phone XL',
          price: 799,
          description: 'A large phone with one of the best screens',
          heading1:'サンプルテキスト１',
          heading2:'サンプルテキスト２',
          heading3:'サンプルテキスト３',
          headingtext1:'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
          headingtext2:'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
          headingtext3:'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト'
        },
        {
          coverImage:'./assets/img/phone-cover.jpg',
          name: 'Phone Mini',
          price: 699,
          description: 'A great phone with one of the best cameras',
          heading1:'サンプルテキスト１',
          heading2:'サンプルテキスト２',
          heading3:'サンプルテキスト３',
          headingtext1:'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
          headingtext2:'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
          headingtext3:'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト'
        },
        {
          coverImage:'./assets/img/phone-cover.jpg',
          name: 'Phone Standard',
          price: 299,
          description: '',
          heading1:'サンプルテキスト１',
          heading2:'サンプルテキスト２',
          heading3:'サンプルテキスト３',
          headingtext1:'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
          headingtext2:'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
          headingtext3:'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト'
        },
        {
          coverImage:'./assets/img/phone-cover.jpg',
          name: 'Phone Special',
          price: 299,
          description: '',
          heading1:'サンプルテキスト１',
          heading2:'サンプルテキスト２',
          heading3:'サンプルテキスト３',
          headingtext1:'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
          headingtext2:'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト',
          headingtext3:'サンプルテキストサンプルテキストサンプルテキストサンプルテキスト'
        }
      ]
  }

  async initDb(){
    await this.cleanDb()
    this.pushProductsToDB()
  }

  async cleanDb(){
    await Product.deleteMany({})

  }

  pushProductsToDB() {
    this.products.forEach(
      (product) => {
          const newProduct = new Product(product)
          newProduct.save()
      }
    )
  }

  seeDb(){
    this.pushProductsToDB()

  }

}

module.exports = FakeDb
