/**********  Nav toggle  **********/
const hamburger = document.getElementById("hamburger");
const navLinks  = document.getElementById("navLinks");
hamburger.addEventListener("click", () => navLinks.classList.toggle("show"));

/**********  Restaurant data  **********/
const restaurants = [
  
  {
    id: 1,
    name: "Andhra Restaurant",
    img: "https://th.bing.com/th/id/R.fd0b396cddefde082d6e83586b1fe681?rik=ktsa4rX7JodiVg&riu=http%3a%2f%2fwww.toastfried.com%2fwp-content%2fuploads%2f2024%2f01%2fRestaurants-Hyderabad-Andhra-Pradesh-India.jpg&ehk=%2fcSYXWrpkM19j8srhRd0faJXPYXXBaLdsDhw0aliXVM%3d&risl=&pid=ImgRaw&r=0",
    desc: "veg & seafood & curries & Non-veg & Sweets <p>⭐4.9</p>",
    location: "Andhra Pradesh, India",
    services: ["Dine-in"],
    menu: [
      { name:"double-ka-meetha",   img:"https://www.indianhealthyrecipes.com/wp-content/uploads/2023/03/double-ka-meetha-bread-meetha-680x680.jpg", desc:"Sweet", price:180 },
      { name:"Prawn Curry",   img:"https://img.freepik.com/premium-photo/restaurantstyle-prawns-curry_977960-191.jpg", desc:"Coconut & tamarind gravy", price:260 },
      { name:"Fish Recheado", img:"https://th.bing.com/th/id/R.17c8dabebe2929fa4ae4b54b06b29f6e?rik=34QTqx4zNBpt3g&riu=http%3a%2f%2f4.bp.blogspot.com%2f-zkusZDPBFOI%2fVX-8j27K0GI%2fAAAAAAAAPYE%2fRpOoQyyqMAc%2fw1200-h630-p-k-no-nu%2fSSWF-StuffedGrilledFish.JPG&ehk=oCAomzbRCkDWfTACe24DSr2P9gdGX6%2fR85xGYy4uuZM%3d&risl=&pid=ImgRaw&r=0",  desc:"Spicy recheado masala",    price:280 },
      { name:"pootharekulu sweet",       img:"https://i.pinimg.com/736x/fa/2f/de/fa2fde86164da683e903ffc0467119cb.jpg",    price:450 },
      { name:"Gongura chicken biryani",img:"https://images.hindustantimes.com/telugu/img/2022/12/14/960x540/Gongura_Chicken_Biryani_1671003873556_1671003883792_1671003883792.JPG",     price:250 },
      { name:"Veg Thali",     img:"https://img.freepik.com/premium-photo/indian-hindu-veg-thali-also-known-as-food-platter-is-complete-lunch-dinner-meal-closeup-selective-focus_466689-9082.jpg?w=2000",        desc:"veg thali", price:149 }
    ]
  },
  {
    id: 2,
    name: "Taj Restaurant",
    img: "https://cdn.sanity.io/images/ocl5w36p/production/7cad9ba6f880ca50d14c05b69a42596dde902c8d-1400x1120.jpg",
    desc: "Authentic Mumbai biryani & kebabs <p>⭐4.8</p>",
    location: "Mumbai, India",
    services: ["Dine-in", "Delivery", "Takeaway"],
    menu: [
      { name: "Chicken Biryani",  img: "https://static.vecteezy.com/system/resources/previews/040/703/949/non_2x/ai-generated-royal-feast-master-the-art-of-chicken-biryani-at-home-generative-ai-photo.jpg", desc: "Basmati rice & tender chicken", price: 260 },
      { name: "Mutton Biryani",   img: "https://www.licious.in/blog/wp-content/uploads/2022/06/mutton-hyderabadi-biryani-01-750x750.jpg",desc: "Slow-cooked mutton & spices",  price: 320 },
      { name: "Tangdi Kebab",     img: "https://www.ruchikrandhap.com/wp-content/uploads/2020/09/Tangdi-Kebab_1-scaled.jpg",        desc: "Char-grilled chicken legs",     price: 180 },
      { name: "Chicken 65",       img: "https://th.bing.com/th/id/R.85fa562119bec5352c147d6acfda74c6?rik=GKJTd%2bg8XAsIPw&riu=http%3a%2f%2f3.bp.blogspot.com%2f-6Bum2AR5AFI%2fUOkpMumbc-I%2fAAAAAAAAAMw%2fDQ8_n5vUm6U%2fs1600%2fchicken%2b65%2brecipe.jpg&ehk=%2bGAsw2zeXCleA1L5O36TtcXvGC%2bhBlF%2bAp9%2bu3csNdI%3d&risl=&pid=ImgRaw&r=0",    desc: "Spicy fried chicken bites",     price: 150 },
      { name: "Qubani ka Meetha", img: "https://www.yummyfoodrecipes.com/resources/picture/org/Khubani-ka-meetha.jpg",      desc: "Apricot dessert & cream",       price: 120 }
    ]
  },
  {
    id: 3,
    name: "Maharastra Restaurant",
    img: "https://www.gannett-cdn.com/-mm-/11d1f5a0f30c78e5e42da1f24d951e3266ecd59c/c=0-61-2032-1208/local/-/media/USATODAY/USATODAY/2013/11/23/1385183471001-2-lemeurice-DorchesterCollection.jpg?width=3200&height=1680&fit=crop",
    desc: "Iconic North-Indian street food <p>⭐4.8</p>",
    location: "Maharastra, India",
    services: ["Delivery", "Takeaway"],
    menu: [
      { name: "Papdi Chaat", img:"https://e1.pxfuel.com/desktop-wallpaper/381/366/desktop-wallpaper-papdi-chaat-chaat.jpg", desc:"Crispy papdi with toppings", price:80 },
      { name: "Aloo Tikki",  img:"https://www.indianveggiedelight.com/wp-content/uploads/2023/07/aloo-tikki-featured.jpg",  desc:"Potato patties & chutneys", price:70 },
      { name: "Gol Gappa",   img:"https://cdn.shopify.com/s/files/1/0559/7983/5548/files/Making_Pani_Puri_480x480.jpg?v=1620975411",    desc:"Puffed puris & spicy water", price:50 },
      { name: "Dahi Bhalla", img:"https://www.tomatoblues.com/wp-content/uploads/2021/10/dahi-bhalla-4.jpg", desc:"Lentil dumplings in yogurt", price:90 },
      { name: "Kulfi Falooda",img:"https://www.indikitchen.co/wp-content/uploads/2021/06/1689-026-e1625320826665-1068x888.jpg",       desc:"Pistachio kulfi & vermicelli", price:120 }
    ]
  },
  {
    id: 4,
    name: "Mumbai Café Restaurant",
    img: "https://cdn.vox-cdn.com/thumbor/F1tOZxm_cQU7jF2cTr0mGHXbaz0=/0x0:3600x2400/720x0/filters:focal(0x0:3600x2400):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/24879564/AsaGagaKamon_EaterSD_KimberlyMotos_9of32___1_.jpg",
    desc: "Fusion dishes & famous vada pav <p>⭐4.5</p>",
    location: "Mumbai, India",
    services: ["Dine-in", "Delivery"],
    menu: [
      { name:"Vada Pav",      img:"https://vaya.in/recipes/wp-content/uploads/2018/03/Vada-Pav.jpg",   desc:"Spicy potato fritter bun", price:40 },
      { name:"Bombay Sandwich",img:"https://bakersway.in/cdn/shop/files/6ee60c8765b60edaee05e1ab9146bd46.jpg?v=1721729550&width=823", desc:"Triple-layer grilled",     price:120 },
      { name:"Keema Pav",     img:"https://www.cookwithmanali.com/wp-content/uploads/2018/05/Best-Pav-Bhaji-Recipe-500x500.jpg",     desc:"Minced mutton & pav",     price:180 },
      { name:"Masala Chai",   img:"https://carameltintedlife.com/wp-content/uploads/2021/01/Masala-Chai-.jpg",      desc:"Classic cutting chai",     price:25 },
      { name:"Mango Mastani", img:"https://th.bing.com/th/id/R.eafc372def4b0d671d49b2b47a0368d8?rik=2%2b5298sHUkh%2bTA&riu=http%3a%2f%2ffoodiegarima.com%2fwp-content%2fuploads%2f2023%2f06%2fGG-3-scaled.jpg&ehk=GrZgXf%2bwGUDqzTJlBHZkKfGPfN3pS%2fprPuc2zgDiwOk%3d&risl=&pid=ImgRaw&r=0",desc:"Rich mango milkshake",   price:130 }
    ]
  },
  {
    id: 5,
    name: "Chennai Hub Restaurant",
    img: "https://www.myyellowplate.com/wp-content/uploads/2021/10/Zambar-South-Indian-Restaurants-in-Gurgaon.jpg",
    desc: "Crispy dosas & South-Indian delights <p>⭐4.3</p>",
    location: "Chennai, India",
    services: ["Dine-in", "Delivery", "Takeaway"],
    menu: [
      { name:"Masala Dosa",   img:"https://static.vecteezy.com/system/resources/previews/038/947/747/large_2x/ai-generated-paper-masala-dosa-is-a-south-indian-meal-served-with-sambhar-and-coconut-chutney-over-fresh-banana-leaf-selective-focus-photo.jpg", desc:"Rice-lentil crepe & potato", price:90 },
      { name:"Rava Dosa",     img:"https://th.bing.com/th/id/OIP.HT-u8J92Hh18jG1xOobDigAAAA?rs=1&pid=ImgDetMain",   desc:"Semolina crispy dosa",      price:100 },
      { name:"Onion Uttapam", img:"https://media-cdn.tripadvisor.com/media/photo-m/1280/1a/19/58/09/onion-uttapam.jpg",     desc:"Thick pancake with onion", price:80 },
      { name:"Filter Coffee", img:"https://www.catchyfinds.com/content/images/2023/02/H_Filter-Coffee-3.jpg",desc:"Traditional kaapi",        price:40 },
      { name:"Pongal",        img:"https://recipes.timesofindia.com/photo/61051454.cms",      desc:"Comfort rice & lentils",   price:70 }
    ]
  },
  {
    id: 6,
    name: "Kolkata Restaurant",
    img: "https://i0.wp.com/imp.news/wp-content/uploads/2021/10/Alfresco-The-Lalit-Great-Eastern.jpg?ssl=1",
    desc: "Famous kathi rolls & street bites <p>⭐4.5</p>",
    location: "Kolkata, India",
    services: ["Delivery", "Takeaway"],
    menu: [
      { name:"Egg Roll",      img:"https://static.vecteezy.com/system/resources/previews/023/971/013/original/egg-roll-with-spicy-sauce-generated-ai-free-photo.jpg",  desc:"Flaky paratha & egg",       price:60 },
      { name:"Chicken Roll",  img:"https://www.scrumptiously.com/wp-content/uploads/2024/06/ChickenKathiRoll.webp",desc:"Spiced chicken filling",  price:90 },
      { name:"Paneer Roll",   img:"https://vegrecipeskitchen.com/wp-content/uploads/2023/11/Paneer-roll.jpg", desc:"Cottage cheese wrap",     price:80 },
      { name:"Fish Fry",      img:"https://1.bp.blogspot.com/-dmr7TvaMJ7c/WRyLh1RZjlI/AAAAAAAAIF4/uPHo3WFtctE8ZS34-s0mkRyNRkU-2-SzgCLcB/s1600/0000000000000000000000A%2B%25281%2529.jpg",  desc:"Crispy bhetki fillet",     price:140 },
      { name:"Mishti Doi",    img:"https://thumbs.dreamstime.com/b/mishti-doi-mishti-dahi-mishti-doi-mishti-dahi-mitha-dahi-translate-as-sweet-dahi-sweet-yogurt-type-yoghurt-142692939.jpg",desc:"Sweetened yogurt",         price:50 }
    ]
  },
  {
    id: 7,
    name: "Goa Shack Grill Restaurant",
    img: "https://thetravelingca.com/wp-content/uploads/2020/08/thalsa-01_compress81.jpg",
    desc: "Beachside seafood & Portuguese curries <p>⭐4.8</p>",
    location: "Goa, India",
    services: ["Dine-in"],
    menu: [
      { name:"Prawn Curry",   img:"https://img.freepik.com/premium-photo/restaurantstyle-prawns-curry_977960-191.jpg", desc:"Coconut & tamarind gravy", price:260 },
      { name:"Fish Recheado", img:"https://th.bing.com/th/id/R.17c8dabebe2929fa4ae4b54b06b29f6e?rik=34QTqx4zNBpt3g&riu=http%3a%2f%2f4.bp.blogspot.com%2f-zkusZDPBFOI%2fVX-8j27K0GI%2fAAAAAAAAPYE%2fRpOoQyyqMAc%2fw1200-h630-p-k-no-nu%2fSSWF-StuffedGrilledFish.JPG&ehk=oCAomzbRCkDWfTACe24DSr2P9gdGX6%2fR85xGYy4uuZM%3d&risl=&pid=ImgRaw&r=0",  desc:"Spicy recheado masala",    price:280 },
      { name:"Bebinca",       img:"https://www.shutterstock.com/image-photo/bebinka-on-iron-platter-blurred-600nw-2310571557.jpg",     desc:"Goan layered dessert",    price:120 },
      { name:"Xacuti Chicken",img:"https://www.whiskaffair.com/wp-content/uploads/2019/03/Chicken-Vindaloo-1-1.jpg",      desc:"Roasted spice curry",      price:240 },
      { name:"Tandoori Lobster",     img:"https://th.bing.com/th/id/R.4ef92186a0d9f4568d0338b2bbbb30a7?rik=e96r3n8oeTZWSg&riu=http%3a%2f%2fmedia.cntraveller.in%2fwp-content%2fuploads%2f2015%2f12%2fgoas50bestmealslead.jpg&ehk=vgRAv4%2fx0ZxYTK5HxZCxGlTJE1wfvL11w0EqT%2fp9XWg%3d&risl=&pid=ImgRaw&r=0",        desc:"spicy and flavorfu", price:199 }
    ]
  },
  {
    id: 8,
    name: "Hyderabad Restaurant",
    img: "https://b.zmtcdn.com/data/pictures/3/92123/83e9e5105d136bfcd65bb30cd139f643.jpg",
    desc: "Hyderabadi specials <p>⭐4.8</p>",
    location: "Hyderabad, India",
    services: ["Dine-in"],
    menu: [
      { name:"Hyderabadi Biryani",   img:"https://foodalltime.com/wp-content/uploads/2018/07/Hyderabadi-Mutton-Dum-Biryani-Recipe-_-Hyderabadi-Dum-Biryani-Recipe-1.png", desc:"Spiced ", price:260 },
      { name:"Boti Kebab", img:"https://dubai-on.com/wp-content/uploads/2021/06/best-kebabs-in-dubai.jpg",  price:280 },
      { name:"Chicken Dum Biryani",       img:"https://static.vecteezy.com/system/resources/previews/040/703/949/non_2x/ai-generated-royal-feast-master-the-art-of-chicken-biryani-at-home-generative-ai-photo.jpg",  price:249 },
      { name:"Haleem",img:"https://www.thedeliciouscrescent.com/wp-content/uploads/2020/08/Haleem-4.jpg",desc:"Sweet" ,price:149 },
      { name:"California-style pizza",     img:"https://i0.wp.com/www.thecandidcooks.com/wp-content/uploads/2022/07/california-veggie-pizza-feature.jpg?fit=1920%2C1280&ssl=1",price:199 }
    ]
  }
];

/**********  State & helpers  **********/
const savedList = [];                       // items user added
const listCount = document.getElementById("listCount");

function addToList(item) {
  savedList.push(item);
  refreshBadge();
}
function removeFromList(idx) {
  savedList.splice(idx,1);
  refreshBadge();
  renderList();                              // refresh view if we’re on list page
}
function refreshBadge() {
  listCount.textContent = savedList.length;
  listCount.classList.toggle("show", savedList.length>0);
}

/**********  Dynamic views  **********/
const view = document.getElementById("view");

function renderHome() {
  view.innerHTML = `
    <section class="hero">
      <h1>Find Your Favorite Food</h1>
      <button onclick="location.hash='#restaurants'">Browse Restaurants</button>
    </section>`;
}

function renderRestaurants() {
  let html = "<h2 style='margin-bottom:1rem;'>Restaurants</h2><div class='grid'>";
  restaurants.forEach(r => {
    html += `
      <div class="card" onclick="location.hash='#restaurant-${r.id}'">
        <img src="${r.img}" alt="${r.name}">
        <div class="card-body">
          <h3>${r.name}</h3>
          <p>${r.desc}</p>
        </div>
      </div>`;
  });
  view.innerHTML = html + "</div>";
}

function renderRestaurantDetail(res) {
  let html = `
    <img src="${res.img}" alt="${res.name}" style="width:100%;height:250px;object-fit:cover;border-radius:1rem;">
    <h2 style="margin:1rem 0;">${res.name}</h2>
    <p><strong>Location:</strong> ${res.location}</p>
    <p><strong>Services:</strong> ${res.services.join(", ")}</p>
    <h3 style="margin-top:1.5rem;">Menu</h3><div class="grid">`;
  res.menu.forEach(m=>{
    html += `
      <div class="card">
        <img src="${m.img}" alt="${m.name}">
        <div class="card-body">
          <h3>${m.name}</h3>
          <p>${m.desc}</p>
          <p class="item-price">₹${m.price}</p>
          <button class="btn-primary"
            onclick='addToList(${JSON.stringify({...m, restaurant:res.name})})'>
            Add to List
          </button>
        </div>
      </div>`;
  });
  view.innerHTML = html + "</div>";
}

function renderLogin() {
  view.innerHTML = `
    <form class="login-form">
      <h2>Login</h2>
      <input type="email" placeholder="Email" required>
      <input type="password" placeholder="Password" required>
      <a href="#" class="forgot">Forgot password?</a>
      <button class="btn-primary">Login</button>
      <button type="button" class="btn-primary" style="background:#fff;border:1px solid #ccc;color:var(--text);"><i class="fab fa-google"></i>&nbsp;Google</button>
      <button type="button" class="btn-primary" style="background:#000;"><i class="fab fa-apple"></i>&nbsp;Apple</button>
    </form>`;
}

function renderSettings() {
  view.innerHTML = `
    <form class="settings-form" onsubmit="event.preventDefault();alert('Saved (demo)');">
      <h2>Settings</h2>
      <label>Language
        <select><option>English</option><option>Telugu</option><option>Hindi</option></select>
      </label>
      <label style="display:flex;align-items:center;gap:.5rem;">
        Dark Mode <input type="checkbox" id="themeToggle">
      </label>
      <label>Location <input type="text" placeholder="City, State"></label>
      <h3>Password Change</h3>
      <input type="password" placeholder="Old Password">
      <input type="password" placeholder="New Password">
      <input type="password" placeholder="Confirm Password">
      <button class="btn-primary" style="width:120px;">Save</button>
    </form>`;
  const toggle=document.getElementById("themeToggle");
  toggle.checked = document.body.classList.contains("dark");
  toggle.addEventListener("change",()=>document.body.classList.toggle("dark"));
}

function renderList() {
  if (!savedList.length) { view.innerHTML="<h2>Your list is empty.</h2>"; return; }

  const total = savedList.reduce((sum,i)=>sum+i.price,0);
  let html = "<h2>Your List</h2><div class='grid'>";
  savedList.forEach((it,idx)=>{
    html += `
      <div class="card">
        <img src="${it.img}" alt="${it.name}">
        <div class="card-body">
          <h3>${it.name}</h3>
          <p>${it.restaurant}</p>
          <p class="item-price">₹${it.price}</p>
          <button class="btn-danger" onclick="removeFromList(${idx})">Remove</button>
        </div>
      </div>`;
  });
  html += `</div><h3 style="margin-top:1.5rem;">Total: ₹${total}</h3>`;
  view.innerHTML = html;
}

/**********  Router  **********/
function router() {
  const hash = location.hash.replace("#","") || "home";

  if (hash==="home")              renderHome();
  else if (hash==="restaurants")  renderRestaurants();
  else if (hash==="login")        renderLogin();
  else if (hash==="settings")     renderSettings();
  else if (hash==="list")         renderList();
  else if (hash.startsWith("restaurant-")) {
    const id = +hash.split("-")[1];
    const res = restaurants.find(r=>r.id===id);
    res ? renderRestaurantDetail(res) : renderHome();
  } else renderHome();

  navLinks.classList.remove("show");
}

window.addEventListener("hashchange", router);
window.addEventListener("load", ()=>{ router(); refreshBadge(); });
