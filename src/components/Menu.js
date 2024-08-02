import React from 'react';
import { Container, Row, Col, Tab, Nav, Button } from 'react-bootstrap';

// Breakfast Images
import pancake from '../imgs/breakfast-1.jpeg';
import omelette from '../imgs/breakfast-2.jpeg';
import frenchtoast from '../imgs/breakfast-3.jpeg';
import breakfastburrito from '../imgs/breakfast-4.jpeg';
import fruitparfait from '../imgs/breakfast-5.jpeg';
import avocado_toast from '../imgs/breakfast-6.jpeg';

// Lunch Images
import grilled_chicken from '../imgs/lunch-1.jpg';
import caesar_salad from '../imgs/lunch-2.jpg';
import club_sandwich from '../imgs/lunch-3.jpg';
import veggie_wrap from '../imgs/lunch-4.jpg';
import tomato_soup from '../imgs/lunch-5.jpg';
import quiche_lorraine from '../imgs/lunch-6.jpg';

// Dinner Images
import steak from '../imgs/dinner-1.jpg';
import salmon from '../imgs/dinner-2.jpg';
import spaghetti_carbonara from '../imgs/dinner-3.jpg';
import lamb_chops from '../imgs/dinner-4.jpg';
import chicken_alfredo from '../imgs/dinner-5.jpg';
import vegetable_stir_fry from '../imgs/dinner-6.jpg';

// Drinks Images
import mojito from '../imgs/drink-1.jpg';
import lemonade from '../imgs/drink-2.jpg';
import iced_coffee from '../imgs/drink-3.jpg';
import green_smoothie from '../imgs/drink-4.jpg';
import mango_lassi from '../imgs/drink-5.jpg';
import hot_chocolate from '../imgs/drink-6.jpg';

// Desserts Images
import cheesecake from '../imgs/dessert-1.jpg';
import brownie from '../imgs/dessert-2.jpg';
import apple_pie from '../imgs/dessert-3.jpg';
import tiramisu from '../imgs/dessert-4.jpg';
import ice_cream_sundae from '../imgs/dessert-5.jpg';
import panna_cotta from '../imgs/dessert-1.jpg';

// Wine Images
import chardonnay from '../imgs/wine-1.jpg';
import merlot from '../imgs/wine-2.jpg';
import cabernet_sauvignon from '../imgs/wine-3.jpg';
import pinot_noir from '../imgs/wine-4.jpg';
import sauvignon_blanc from '../imgs/wine-5.jpg';
import syrah from '../imgs/wine-6.jpg';

const dishes = {
  Breakfast: [
    {
      name: 'Pancakes',
      price: '$5.99',
      ingredients: ['Flour', 'Eggs', 'Milk', 'Butter'],
      image: pancake,
    },
    {
      name: 'Omelette',
      price: '$4.99',
      ingredients: ['Eggs', 'Cheese', 'Tomatoes', 'Onions'],
      image: omelette,
    },
    {
      name: 'French Toast',
      price: '$6.49',
      ingredients: ['Bread', 'Eggs', 'Milk', 'Cinnamon'],
      image: frenchtoast,
    },
    {
      name: 'Breakfast Burrito',
      price: '$7.99',
      ingredients: ['Tortilla', 'Eggs', 'Sausage', 'Cheese'],
      image: breakfastburrito,
    },
    {
      name: 'Fruit Parfait',
      price: '$4.99',
      ingredients: ['Yogurt', 'Granola', 'Mixed Berries'],
      image: fruitparfait,
    },
    {
      name: 'Avocado Toast',
      price: '$5.99',
      ingredients: ['Bread', 'Avocado', 'Lemon', 'Salt'],
      image: avocado_toast,
    }
  ],
  Lunch: [
    {
      name: 'Grilled Chicken',
      price: '$8.99',
      ingredients: ['Chicken', 'Spices', 'Lemon', 'Garlic'],
      image: grilled_chicken,
    },
    {
      name: 'Caesar Salad',
      price: '$6.99',
      ingredients: ['Lettuce', 'Croutons', 'Parmesan', 'Caesar Dressing'],
      image: caesar_salad,
    },
    {
      name: 'Club Sandwich',
      price: '$7.49',
      ingredients: ['Turkey', 'Bacon', 'Lettuce', 'Tomato'],
      image: club_sandwich,
    },
    {
      name: 'Veggie Wrap',
      price: '$6.99',
      ingredients: ['Tortilla', 'Lettuce', 'Tomatoes', 'Cucumber'],
      image: veggie_wrap,
    },
    {
      name: 'Tomato Soup',
      price: '$5.99',
      ingredients: ['Tomatoes', 'Basil', 'Cream'],
      image: tomato_soup,
    },
    {
      name: 'Quiche Lorraine',
      price: '$7.99',
      ingredients: ['Eggs', 'Cream', 'Bacon', 'Cheese'],
      image: quiche_lorraine,
    }
  ],
  Dinner: [
    {
      name: 'Steak',
      price: '$14.99',
      ingredients: ['Beef', 'Garlic', 'Rosemary'],
      image: steak,
    },
    {
      name: 'Salmon',
      price: '$13.99',
      ingredients: ['Salmon', 'Lemon', 'Dill'],
      image: salmon,
    },
    {
      name: 'Spaghetti Carbonara',
      price: '$11.99',
      ingredients: ['Spaghetti', 'Eggs', 'Parmesan', 'Bacon'],
      image: spaghetti_carbonara,
    },
    {
      name: 'Lamb Chops',
      price: '$16.99',
      ingredients: ['Lamb', 'Garlic', 'Mint'],
      image: lamb_chops,
    },
    {
      name: 'Chicken Alfredo',
      price: '$12.99',
      ingredients: ['Chicken', 'Pasta', 'Cream', 'Parmesan'],
      image: chicken_alfredo,
    },
    {
      name: 'Vegetable Stir Fry',
      price: '$9.99',
      ingredients: ['Broccoli', 'Carrots', 'Bell Peppers', 'Soy Sauce'],
      image: vegetable_stir_fry,
    }
  ],
  Drinks: [
    {
      name: 'Mojito',
      price: '$5.99',
      ingredients: ['Mint', 'Lime', 'Rum', 'Soda Water'],
      image: mojito,
    },
    {
      name: 'Lemonade',
      price: '$3.99',
      ingredients: ['Lemons', 'Sugar', 'Water'],
      image: lemonade,
    },
    {
      name: 'Iced Coffee',
      price: '$4.49',
      ingredients: ['Coffee', 'Ice', 'Milk', 'Sugar'],
      image: iced_coffee,
    },
    {
      name: 'Green Smoothie',
      price: '$6.99',
      ingredients: ['Spinach', 'Banana', 'Almond Milk', 'Honey'],
      image: green_smoothie,
    },
    {
      name: 'Mango Lassi',
      price: '$5.49',
      ingredients: ['Mango', 'Yogurt', 'Milk', 'Sugar'],
      image: mango_lassi,
    },
    {
      name: 'Hot Chocolate',
      price: '$4.99',
      ingredients: ['Cocoa', 'Milk', 'Sugar'],
      image: hot_chocolate,
    }
  ],
  Desserts: [
    {
      name: 'Cheesecake',
      price: '$5.99',
      ingredients: ['Cream Cheese', 'Graham Crackers', 'Sugar', 'Eggs'],
      image: cheesecake,
    },
    {
      name: 'Brownie',
      price: '$4.49',
      ingredients: ['Chocolate', 'Butter', 'Sugar', 'Flour'],
      image: brownie,
    },
    {
      name: 'Apple Pie',
      price: '$5.99',
      ingredients: ['Apples', 'Sugar', 'Cinnamon', 'Pie Crust'],
      image: apple_pie,
    },
    {
      name: 'Tiramisu',
      price: '$6.99',
      ingredients: ['Mascarpone', 'Coffee', 'Ladyfingers', 'Cocoa'],
      image: tiramisu,
    },
    {
      name: 'Ice Cream Sundae',
      price: '$4.99',
      ingredients: ['Ice Cream', 'Chocolate Syrup', 'Whipped Cream'],
      image: ice_cream_sundae,
    },
    {
      name: 'Panna Cotta',
      price: '$5.49',
      ingredients: ['Cream', 'Vanilla', 'Sugar', 'Gelatin'],
      image: panna_cotta,
    }
  ],
  Wine: [
    {
      name: 'Chardonnay',
      price: '$7.99',
      ingredients: ['Chardonnay Grapes'],
      image: chardonnay,
    },
    {
      name: 'Merlot',
      price: '$8.99',
      ingredients: ['Merlot Grapes'],
      image: merlot,
    },
    {
      name: 'Cabernet Sauvignon',
      price: '$9.99',
      ingredients: ['Cabernet Grapes'],
      image: cabernet_sauvignon,
    },
    {
      name: 'Pinot Noir',
      price: '$10.99',
      ingredients: ['Pinot Noir Grapes'],
      image: pinot_noir,
    },
    {
      name: 'Sauvignon Blanc',
      price: '$7.49',
      ingredients: ['Sauvignon Blanc Grapes'],
      image: sauvignon_blanc,
    },
    {
      name: 'Syrah',
      price: '$11.49',
      ingredients: ['Syrah Grapes'],
      image: syrah,
    }
  ]
};

const DishItem = ({ dish, index }) => {
  const isEven = index % 4 < 2;
  return (
    <Row>
      {isEven ? (
        <>
          <Col md={6} className='px-0'>
            <img src={dish.image} alt={dish.name} className="img-fluid menu-dish-img" />
          </Col>
          <Col md={6} className='py-4 px-2'>
            <h4>{dish.name} <span className='menu-price'>{dish.price}</span></h4>
            <p>{dish.ingredients.join(', ')}</p>
            <Button className='menu-dish-order-btn rounded-0'>Order Now</Button>
          </Col>
        </>
      ) : (
        <>
          <Col md={6} className='py-4 px-3'>
            <h4>{dish.name} <span>{dish.price}</span></h4>
            <p>{dish.ingredients.join(', ')}</p>
            <Button className='menu-dish-order-btn rounded-0'>Order Now</Button>
          </Col>
          <Col md={6} className='px-0'>
            <img src={dish.image} alt={dish.name} className="img-fluid menu-dish-img" />
          </Col>
        </>
      )}
    </Row>
  );
};

const Menu = () => {
  return (
    <div>
      <header className="menu-header">
        <div className="header-content">
          <h1 className="crousel-heading">Our Menu</h1>
          <p className="menu-subtitle">Discover the taste of excellence</p>
        </div>
      </header>

      <Container className='my-5'>
        <Tab.Container defaultActiveKey="Breakfast">
          <Nav variant="tabs" className="justify-content-center custom-nav">
            {Object.keys(dishes).map((category) => (
              <Nav.Item key={category}>
                <Nav.Link eventKey={category} className="custom-nav-link">{category}</Nav.Link>
              </Nav.Item>
            ))}
          </Nav>

          <Tab.Content>
            {Object.entries(dishes).map(([category, dishList]) => (
              <Tab.Pane eventKey={category} key={category}>
                <Container>
                  <Row>
                    {dishList.map((dish, index) => (
                      <Col md={6} key={index}>
                        <DishItem dish={dish} index={index} />
                      </Col>
                    ))}
                  </Row>
                </Container>
              </Tab.Pane>
            ))}
          </Tab.Content>
        </Tab.Container>
      </Container>
    </div>
  );
};

export default Menu;
