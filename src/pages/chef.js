const Chef = () => {
    let chefInfo = document.createElement('div');
    chefInfo.classList.add('container-fluid');
    chefInfo.classList.add('chef-info');
    chefInfo.innerHTML = `
    <div class="row" id="introduction">
    <h2>
        Classically trained in the art of kaiseki, Chef Sakamoto decided to leap into the world of ramen with his latest venture, Chotto Motto.
    </h2>
</div>
<div class="row image-div">
    <img src="./assets/noodles.jpeg" alt="Noodles" id="noodles-image">
</div>
<div class="row" id="the-beginning">
    <div class="col-lg-6 col-sm-12 left-side">
        <h4>SAPPORO, JP</h4>
        <h2>The Beginning</h2>
        <h4>1972</h4>
    </div>
    <div class="col-lg-6 col-sm-12 right-side">
        <p>Daichi Sakamoto started cooking at age five, helping his mother prepare bentos for his father, younger sister, and himself. Chashu was never a missing component. Mother Sakamoto had learned how to make it when she studied abroad in Hong Kong. It was young Chef Sakamoto who mixed the marinade, a formula he perfected as he grew into his teens.
        <br>
        <br>
        Many years later, he apprenticed under famed Chef Kazue Inoue at a luxury ryokan in the Nagano prefecture. There, he studied the art of kaiseki for seven years, and took a particular shine to the futamono and tome-wan soup-based dishes. His calling was starting to simmer.
        </p>
    </div>
</div>
<div class="row image-div">
    <img src="./assets/spread-noodles.jpeg" alt="Spread Noodles" id="spread-noodles">
</div>
<div class="row">
    <div class="col-lg-6 col-sm-12 left-side" id="the-first-venture">
        <h4>TOKYO, JP</h4>
        <h2>The First Venture</h2>
        <h4>1998</h4>
    </div>
    <div class="col-lg-6 col-sm-12 right-side">
        <p>
            After saving his wages from the Nagano apprenticeship, Chef Sakamoto took out a loan and opened Chotto Kai, his first restaurant in Tokyo. Using simple, seasonal ingredients, he was able to bring the luxury of kaiseki to all. Because he incorporated some of the Hong Kong flavors his mother had inspired in him, Chotto Kai was both a huge success and a unique contribution to Tokyo’s culinary landscape.
        </p>
        <p>
            During his eighth year at Chotto Kai, he befriended ramen shop owner Rei Fukui. Chef Sakamoto had stopped by her front stall for a quick dinner and fell instantly in love with her take on the springy yet soft noodle. Every ingredient was meticulously prepared, just like each kaiseki course.
        </p>
    </div>
</div>
        <div class="slide-show">
            <span id="prev-button"><i class="fas fa-arrow-left"></i></span>
            <span id="next-button"><i class="fas fa-arrow-right"></i></span>
            <div class="slides">
                <img src="./assets/slide4.jpg" class="image" alt="" id="lastClone" >
                <img src="./assets/slide1.jpg" class="image" alt="" id="first">
                <img src="./assets/slide2.jpg" class="image" alt="" id="second">
                <img src="./assets/slide3.jpg" class="image" alt="" id="third">
                <img src="./assets/slide4.jpg" class="image" alt="" id="fourth">
                <img src="./assets/slide1.jpg" class="image" alt="" id="firstClone">
            </div>
        </div>
        <div class="row">
            <div class="col-lg-6 col-sm-12 left-side" id="a-new-challenge">
                <h4>HONG KONG</h4>
                <h2>A New Challenge</h2>
                <h4>2016</h4>
            </div>
            <div class="col-lg-6 col-sm-12 right-side">
                <p>
                    Chef Sakamoto implored chef Fukui to share her methods. She said that she would only teach him the basics if he promised to bring the art of ramen abroad. He brought the proposition to his family, and his mother immediately urged him to go to Hong Kong.
                </p>
                <p>
                    The next week, Chef Sakamoto flew to the “Pearl City” and discovered that he felt more at home than ever. He knew that he could meld the umami flavors and smoky scents of Cantonese cuisine with the richness and nuances of ramen. He went back to Tokyo to learn from Chef Fukui, and with her blessing, returned to Hong Kong seven years later.
                </p>
            </div>
        </div>
        <div class="row image-div">
            <img src="./assets/menu-plate.jpeg" alt="Plate of food" id="food-plate">
        </div>
    `
    return chefInfo;
}

export default Chef;
