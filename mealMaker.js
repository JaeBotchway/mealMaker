const menu ={
    _courses:{
      appetizers: [],
      mains: [],
      desserts: []
    },
 
 
    get courses(){
      return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts}
    },
    
    set appetizers(appetizerIn){
      this._courses.appetizers = appetizerIn
    },
     set mains(mainsIn){
        this._courses.mains = mainsIn
    },
     set desserts(dessertsIn){
        this._courses.desserts = dessertsIn
    },
 
    get appetizers(){
      return this._course.appetizers
    },
     get mains(){
     return this._course.mains
    },
     get desserts(){
     return this._course.desserts
    },
 
 addDishToCourse(courseName, dishName, dishPrice){
 const dish= {
   name:dishName,
   price:dishPrice
 }
 return this._courses[courseName].push(dish)
    },
 
 
 getRandomDishFromCourse(courseName){
  const dishes = this._courses[courseName]
  const dishIndex = Math.floor(Math.random() * dishes.length)
  return dishes[dishIndex]
 },
 
 
 generateRandomMeal(){
   const appetizers = this.getRandomDishFromCourse('appetizers')
   const mains = this.getRandomDishFromCourse('mains')
   const desserts = this.getRandomDishFromCourse('desserts')
 
 const totalPrice = appetizers.price + mains.price + desserts.price
 
 return `Your ${appetizers.name}, ${mains.name}, ${desserts.name} cost ${totalPrice} cedis`
 }
 }
 menu.addDishToCourse('appetizers', 'salad', 15)
 menu.addDishToCourse('appetizers', 'egg', 35)
 menu.addDishToCourse('appetizers', 'goat-soup', 20)
 
 menu.addDishToCourse('mains', 'waakye', 20)
 menu.addDishToCourse('mains', 'fufu', 35)
 menu.addDishToCourse('mains', 'banku', 10)
 
 menu.addDishToCourse('desserts', 'ice-cream', 15)
 menu.addDishToCourse('desserts', 'lobster', 50)
 menu.addDishToCourse('desserts', 'croissant', 20)
 
 const meal = menu.generateRandomMeal()
 console.log(meal)