import React from 'react'
import Image, { Shimmer } from 'react-shimmer'
import M from 'materialize-css/dist/js/materialize.min.js';
function App() {
  const onSubmit = () => {
    M.toast({ html: 'Added to cart' });
  }
  const onSubmit1=()=>{
    M.toast({html:'Please View Recommended List'});
  }
 
  return (
  <div>
  <div id="index-banner" class="parallax-container">
    <div class="section no-pad-bot">
      <div class="row">
        <div class="col s12 m6">
        <br/>
        <h1 class="header center">Domino's Pizza</h1>
        <div class="row center">
          <h5 class="header col s12 light"><b>Location:</b> JanakPuri,Delhi,India</h5>
          <h5 class="header col s12 light"><b>Phone Number:</b> 8810428050</h5>
          
        </div>
        <div class="row center">
          <a id="Result" class="btn-large waves-effect waves-light teal lighten-1" onClick={onSubmit1}>Must Try Dishes</a>
        </div>
        <br/>
        </div>
        <div class="col s12 m6 center-align">
        <div class="row center">
        <div><img src="https://mk0tarestaurant7omoy.kinstacdn.com/wp-content/uploads/2018/01/premiumforrestaurants_0.jpg" alt="background Image" class="ImgTop"/></div>
        </div>
        <h6><b>Rating:</b> 4.2/5</h6> 
        <h6><b>Delivery Time:</b> 15 min</h6>
        <h6><b>Timing:</b> 10am – 8pm(EveryDay)</h6>
        </div>
      </div>
    </div>
    <div class="parallax"><img src="https://cdn.wallpapersafari.com/65/52/mUEcV9.gif" alt="background Image" />
  
  </div> 
  </div>

  <div class="container">
  <div className='nav-wrapper'>
        <form>
          <div className='input-field'>
            <input
              type='search'
              placeholder='Search'
            />
            <label className='label-icon' htmlFor='search'>
              <i className='material-icons' style={{color:"black"}}>search</i>
            </label>
            <i className='material-icons'>close</i>
          </div>
        </form>
  </div>
  <h4 id="Recom">Recommended</h4><small style={{fontSize:'15px'}}>10 ITEMS</small>
  <div class="divider"></div>
  <div class="section">
  <div class="row">
    <div class="col s6 m6">
    <i class="fas fa-star"></i><span class="red">&ensp;Must Try</span>
    <div class="fontS">Margherita</div>
    <div class="fontS"><i class="fas fa-rupee-sign"></i>&ensp;199</div>
    <br/>
    <div>Classic delight with 100% real mozzarella cheese</div>
    </div>
     <div class="col s6 m6">
    <div class="right-align"><img src="https://www.yumcurry.com/wp-content/uploads/2020/06/pizza-margherita-recipe-500x375.jpg" alt="background Image" class="ImgFood"/></div>
    <div class="right-align"><a class="waves-effect waves-light btn-small" onClick={onSubmit}>add +</a></div>
    </div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="section">
  <div class="row">
    <div class="col s6 m6">
    <i class="fas fa-star"></i><span class="red">&ensp;Must Try</span>
    <div class="fontS">Non Veg Supreme</div>
    <div class="fontS"><i class="fas fa-rupee-sign"></i>&ensp;599</div>
    <br/>
    <div>Supreme combination of black olives, onion, capsicum, grilled mushroom, pepper barbecue chicken, peri-peri chicken & grilled chicken rashers</div>
    </div>
     <div class="col s6 m6">
    <div class="right-align"><img src="https://feenix.co.in/wp-content/uploads/2018/02/140418-Web-Pizza_NonVegSuperme.jpg" alt="background Image" class="ImgFood"/></div>
    <div class="right-align"><a class="waves-effect waves-light btn-small" onClick={onSubmit}>add +</a></div>
    </div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="section">
  <div class="row">
    <div class="col s6 m6">
    <i class="fas fa-star"></i><span class="red">&ensp;Must Try</span>
    <div class="fontS">Non Veg Loaded</div>
    <div class="fontS"><i class="fas fa-rupee-sign"></i>&ensp;399</div>
    <br/>
    <div>Chicken sausage, pepper barbecue chicken & peri-peri chicken in a fresh pan crust</div>
    </div>
     <div class="col s6 m6">
    <div class="right-align"><img src="https://feenix.co.in/wp-content/uploads/2018/02/LoadedL.jpg" alt="background Image" class="ImgFood"/></div>
    <div class="right-align"><a class="waves-effect waves-light btn-small" onClick={onSubmit}>add +</a></div>
    </div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="section">
    <div class="row">
    <div class="col s6 m6">
    <i class="fas fa-star"></i><span class="red">&ensp;Must Try</span>
    <div class="fontS">Pasta</div>
    <div class="fontS"><i class="fas fa-rupee-sign"></i>&ensp;120</div>
    <br/>
    <div>A rich and creamy pasta made with bechamel and tomato sauce served with vegetables and cheese slice on top</div>
    </div>
     <div class="col s6 m6">
    <div class="right-align"><img src="https://drop.ndtv.com/albums/COOKS/pasta-vegetarian/pastaveg_640x480.jpg" alt="background Image" class="ImgFood"/></div>
    <div class="right-align"><a class="waves-effect waves-light btn-small" onClick={onSubmit}>add +</a></div>
    </div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="section">
  <div class="row">
    <div class="col s6 m6">
    <i class="fas fa-star"></i><span class="red">&ensp;Must Try</span>
    <div class="fontS">Veg Roll</div>
    <div class="fontS"><i class="fas fa-rupee-sign"></i>&ensp;69</div>
    <br/>
    <div>Fresh Veggies Wrapped With Yummy Sauces & Garnishing In Your Favorite Base Wrap.</div>
    </div>
     <div class="col s6 m6">
    <div class="right-align"><img src="https://www.indianhealthyrecipes.com/wp-content/uploads/2019/10/veg-roll-frankie.jpg" alt="background Image" class="ImgFood"/></div>
    <div class="right-align"><a class="waves-effect waves-light btn-small" onClick={onSubmit}>add +</a></div>
    </div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="section">
  <div class="row">
    <div class="col s6 m6">
    <i class="fas fa-star"></i><span class="red">&ensp;Must Try</span>
    <div class="fontS">Chicken Biryani</div>
    <div class="fontS"><i class="fas fa-rupee-sign"></i>&ensp;199</div>
    <br/>
    <div>Indian spices marinate juicy boneless chicken with a warm blanket of slow cooked, dum style fragrant basmati rice.</div>
    </div>
     <div class="col s6 m6">
    <div class="right-align"><img src="https://static.toiimg.com/thumb/69038542.cms?imgsize=563452&width=800&height=800" alt="background Image" class="ImgFood"/></div>
    <div class="right-align"><a class="waves-effect waves-light btn-small" onClick={onSubmit}>add +</a></div>
    </div>
    </div>
    <div class="divider"></div>
  <div class="section">
  <div class="row">
    <div class="col s6 m6">
    <i class="fas fa-star"></i><span class="red">&ensp;Must Try</span>
    <div class="fontS">Momos</div>
    <div class="fontS"><i class="fas fa-rupee-sign"></i>&ensp;79</div>
    <br/>
    <div>05pieces x 2 Plates = 10 Pieces Steamed Darjeeling Chicken Momo. Healthy, Hygienic and Tasty Food Home Delivered!</div>
    </div>
     <div class="col s6 m6">
    <div class="right-align"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Momo_nepal.jpg/1200px-Momo_nepal.jpg" alt="background Image" class="ImgFood"/></div>
    <div class="right-align"><a class="waves-effect waves-light btn-small" onClick={onSubmit}>add +</a></div>
    </div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="section">
  <div class="row">
    <div class="col s6 m6">
    <i class="fas fa-star"></i><span class="red">&ensp;Must Try</span>
    <div class="fontS">Roasted Chicken Wings</div>
    <div class="fontS"><i class="fas fa-rupee-sign"></i>&ensp;249</div>
    <br/>
    <div>The best of KFC - 4 Wings, 2 Chicken strips, Regular Popcorn, jazzed up with portion of Medium Fries & a chilled Pepsi PET! [for 2 people]</div>
    </div>
     <div class="col s6 m6">
    <div class="right-align"><img src="https://assets.epicurious.com/photos/5761c748ff66dde1456dfec0/master/pass/crispy-baked-chicken-wings.jpg" alt="background Image" class="ImgFood"/></div>
    <div class="right-align"><a class="waves-effect waves-light btn-small" onClick={onSubmit}>add +</a></div>
    </div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="section">
  <div class="row">
    <div class="col s6 m6">
    <i class="fas fa-star"></i><span class="red">&ensp;Must Try</span>
    <div class="fontS">Taco Mexicana Veg</div>
    <div class="fontS"><i class="fas fa-rupee-sign"></i>&ensp;99</div>
    <br/>
    <div>It's Crunchy. It's Delicious! Our signature product served with chef recommended Pinto Beans & Spicy Ranch Sauce. You may opt to choose & swap with other veg protein too.</div>
    </div>
     <div class="col s6 m6">
    <div class="right-align"><img src="https://i.pinimg.com/originals/8f/f7/f4/8ff7f4d97752a04a0f75bdf71b59f6f2.jpg" alt="background Image" class="ImgFood"/></div>
    <div class="right-align"><a class="waves-effect waves-light btn-small" onClick={onSubmit}>add +</a></div>
    </div>
    </div>
  </div>
  <div class="divider"></div>
  <div class="section">
  <div class="row">
    <div class="col s6 m6">
    <i class="fas fa-star"></i><span class="red">&ensp;Must Try</span>
    <div class="fontS">Pepsi (500ml)</div>
    <div class="fontS"><i class="fas fa-rupee-sign"></i>&ensp;60</div>
    <br/>
    <div>Sparkling and Refreshing Beverage(quantity-1)</div>
    </div>
     <div class="col s6 m6">
    <div class="right-align"><img src="https://cdn.shopify.com/s/files/1/0063/6348/0177/products/1_ec1cc742-de80-4033-b700-3b8bc81c1a3a_1024x1024.jpg?v=1543273978" alt="background Image" class="ImgFood"/></div>
    <div class="right-align"><a class="waves-effect waves-light btn-small" onClick={onSubmit}>add +</a></div>
    </div>
    </div>
  </div>
  </div>
  </div>
  </div> 
    
  )
}

export default App;