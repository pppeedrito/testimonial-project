  const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')
    const buttons = document.querySelectorAll('.btn')
    const btnright= document.querySelector('.nextBtn')
    const btnleft =  document.querySelector('.prevBtn')
    let index = 0
    const customers = []

    //Create a new customer using a customer constructor
    
    //Customer Constructor
    function Customer(img, name, text) {
        this.img = img
        this.name = name
        this.text = text
    }

    //Create new customer using the constructor function

    function createCustomer(img, name, text) {

        let fullImg = `./img/customer-${img}.jpg`
        let customer = new Customer(fullImg, name, text)

        customers.push(customer)
    }

    
    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
    createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
    createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
    createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    
    function nextContain (e){
      console.log(e)
      if (e.target.id == ("nextBtn")){
          if(index >= customers.length-1){
            index = 0
          }
          customerImage.src = customers[index].img
          customerName.textContent = customers[index].name
          customerText.textContent = customers[index].text
      }else{
        if(index <= 0){
          index = customers.length-1
        }
        index--
        customerImage.src = customers[index].img
        customerName.textContent = customers[index].name
        customerText.textContent = customers[index].text
      }

    }
    btnleft.addEventListener('click',nextContain);
    btnright.addEventListener('click',nextContain);

    // Fíjate bien en la estructura de este array de objetos. Identifica cuantas posiciones tiene y el nombre de cada una de sus propiedades
    console.log(customers)
