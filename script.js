
let foodContainer = document.querySelector('.food-container');

const fooditem=[
    {
        FoodName: "water",
        foodimg: 'images/water.webp',
        price: "1$",
        type: "Drinks",
        des: "1L"
    },
    {
        FoodName: "orange juice",
        foodimg: 'images/oreng.jpeg',
        price: "2$",
        type: "Drinks",
        des: "0.5L"
    },
    {
        FoodName: "grape juice",
        foodimg: 'images/Grape-Juice.jpg',
        price: "2$",
        type: "Drinks",
        des: "0.5L"
    },
    {
        FoodName: "soda(Schweppes)",
        foodimg: 'images/soda.png',
        price: "3$",
        type: "Drinks",
        des: "0.5L"
    },
    {
        FoodName: "cola",
        foodimg: 'images/cola.webp',
        price: "8$",
        type: "Drinks",
        des: "0.5L"
    },
        {
        FoodName: "coffee",
        foodimg: 'images/coffee.jpg',
        price: "2$",
        type: "Drinks",
        des: "1 | 2 | 3 teaspoons sugar"
    },
    {
        FoodName: "tea",
        foodimg: 'images/tea.jpg',
        price: "9$",
        type: "Drinks",
        des: "1 | 2 | 3 teaspoons sugar"
    },{
        FoodName: "hot chocolate",
        foodimg: 'images/hot chocolate.jpg',
        price: "3$",
        type: "Drinks",
        des: "Excellent hot chocolate with cinnamon stick"
    },
    {
        FoodName: "ceaser salad",
        foodimg: 'images/caser saled.jpg',
        price: "6$",
        type: "First_Course",
        des: "Caesar salad with lettuce, mozzarella cheese and potatoes"
    },
    {
        FoodName: "Chicken Soup",
        foodimg: 'images/Chicken Soup.jpg',
        price: "6$",
        type: "First_Course",
        des: "Chicken soup with vegetables"
    },
    {
        FoodName: "Vegetable Salad",
        foodimg: 'images/Vegetable Salad.webp',
        price: "6$",
        type: "First_Course",
        des: "Vegetable salad with cucumber, tomato, eggplant, onion and pepper"
    },

    {
        FoodName: "home bread",
        foodimg: 'images/bread.jpg',
        price: "4$",
        type: "First_Course",
        des: "Homemade spelled bread"
    },
    {
        FoodName: "pasta",
        foodimg: 'images/paste.jpg',
        price: "10$",
        type: "Main_Course",
        des: "Pasta with tomato sauce, tomatoes and basil"
    },

    {
        FoodName: "pizza",
        foodimg: 'images/pizza.jpg',
        price: "11$",
        type: "Main_Course",
        des: "Family pizza with mozzarella cheese"
    },
    {
        FoodName: "vegetarian burger",
        foodimg: 'images/vegetarian burger.jpg',
        price: "9$",
        type: "Main_Course",
        des: "200 g with tomato, onion, lettuce, pickle and sauce"
    },
    {
        FoodName: "burger",
        foodimg: 'images/burger.jpg',
        price: "9$",
        type: "Main_Course",
        des: "200 g with tomato, onion, lettuce, pickle and sauce"
    },
    {
        FoodName: "cake",
        foodimg: 'images/cake.jpeg',
        price: "8$",
        type: "Desert",
        des: "Chocolate cake with berries"
    },
    {
        FoodName: "croissant",
        foodimg: 'images/croissant.jpg',
        price: "6$",
        type: "Desert",
        des: "Four croissants stuffed with chocolate"
    },
    {
        FoodName: "Macaroons",
        foodimg: 'images/Macaroons.jpeg',
        price: "6$",
        type: "Desert",
        des: "12 macaroons in different flavors"
    },
    {
        FoodName: "cookies",
        foodimg: 'images/cookies.jfif',
        price: "3$",
        type: "Desert",
        des: "4 chocolate chip cookies"
    },



]


const food = fooditem.map(item => {
    const listitem = ` <div class="col-md-6 foodbox ${item.type}">
    <!-- content div -->
    <div class="content b my-2">
        <!-- image -->
        <div class="c-image">
            <img src="${item.foodimg}" alt="">
        </div>
        <div class="t-n-p my-2">
            <div class="header">  
                <!-- title -->
                <span class="title">${item.FoodName}</span>
                <!-- price -->
                <span class="price">${item.price}</span>
            </div>
            <!-- Description -->
            <div class="des my-3 ">
                <p>${item.des}</p>
            </div>
        </div>   
    </div>
</div>`;
foodContainer.innerHTML += listitem;
})
const foodbox = document.querySelectorAll('.foodbox');
const menu = document.querySelectorAll('ul');

menu.forEach(m => {
    m.addEventListener('click', e=>{
        console.log(e.target.innerHTML)
        foodbox.forEach(box => {
            box.classList.add('d-none')
            if(e.target.innerHTML === 'All')
            {
                box.classList.remove('d-none')
            }
            else if(e.target.innerHTML==='First_Course'){
                if(box.classList.contains('First_Course'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Main_Course'){
                if(box.classList.contains('Main_Course'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Desert'){
                if(box.classList.contains('Desert'))
                {
                    box.classList.remove('d-none')
                }
                
            }
            else if(e.target.innerHTML==='Drinks'){
                if(box.classList.contains('Drinks'))
                {
                    box.classList.remove('d-none')
                }
                
            }
        })
        
    })
})