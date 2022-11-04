const products = [
  {
    name: "Ataulfo",
    image: "/images/ataulfo.jpg",
    description:
      "Ataulfo mangos are golden yellow and generally weigh between 6 and 10 ounces (170 and 280 g), with a somewhat sigmoid (oblong) shape and a gold-yellow skin. The flesh is not fibrous, and the pit is thin. They were named for grower Ataulfo Morales Gordillo. The fruit will have a velvety texture and a sweet mango taste. ",
    country: "Mexico",
    price: 14.99,
    countInStock: 10,
    rating: 4.5,
    numReviews: 12,
  },
  {
    name: "Carabao",
    image: "/images/carabao.png",
    description:
      "Carabao mangoes are around 12.5 cm (5 in) in length and 8.5 cm (31⁄4 in) in diameter. These fruits are kidney-shaped and can range from being short to elongated. When ripe, the fruit is bright yellow tinged with green. The flesh is a rich yellow in color with a tender melting consistency and very aromatic. According to the Guinness Book of World Records, the sweetest variety of mango is the Carabao.",
    country: "Philippines",
    price: 30,
    countInStock: 7,
    rating: 4.0,
    numReviews: 8,
  },
  {
    name: "Miyazaki",
    image: "/images/miyazaki.png",
    description:
      "Also known as ‘egg of the sun’, or Taiyo-no-Tomago in Japanese, the first thing that strikes you about a Miyazaki mango is the large size – they weigh at least 350g. Or maybe it’s the color, which is a deep shade of rich red, bordering on purple, and invites their other nickname of ‘dragon’s eggs’. Aesthetically, they’re beautiful to look at – and once you cut into the skin, you’ll find an absurdly sweet and vivid yellow flesh that’s creamy, juicy, fragrant, and barely fibrous at all. A bite of this mango practically melts in the mouth! ",
    country: "Japan",
    price: 10000.0,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "Francis",
    image: "/images/francis.jpg",
    description:
      "Madame Francis is from Haiti, and is the most popular and commonly grown mango in the country, seeing considerable commercial acreage. The fruit are slightly oblong-kidney shaped, medium sized, and turn solid yellow at maturity. The orange colored flesh contains a polyembryonic seed and has some fiber, which can range from minimal to high depending on the amount of nitrogen its receiving. The flavor is quite rich, sweet and wonderfully strong, with some spice notes but not particularly resinous. The trees are vigorous growers with open, spreading canopy.",
    country: "Haiti",
    price: 29.99,
    countInStock: 5,
    rating: 3,
    numReviews: 12,
  },
  {
    name: "Haden",
    image: "/images/haden.png",
    description:
      "The Haden is a voluptuous mango. Its sweetness is unprecedented for a round mango and it’s unusually sweet when green, becoming even sweeter as it develops through each of the ripening stages. Its creamy and nearly nonfibrous flesh melts in your mouth, with a slightly floral and “perfumy”, sweet flavor.",
    country: "USA",
    price: 14.99,
    countInStock: 12,
    rating: 3.5,
    numReviews: 4,
  },
  {
    name: "Keitt",
    image: "/images/keitt.jpg",
    description:
      "Keitt mangoes are oblong in shape with a pale to dark green skin, though they occasionally have a yellow blush. The color can be misleading, and the only real way to determine whether these large mangoes are ripe is by touch. The skin should give slightly to the touch, and even then the mangoes could rest for a few more days. Keitt mangoes are fiber-free with a thin seed, allowing for a greater amount of smooth-textured, orange-yellow flesh. Keitt mangoes have a tangy sweet flavor with a hint of honey.",
    country: "USA",
    price: 24.99,
    countInStock: 7,
    rating: 4,
    numReviews: 9,
  },
  {
    name: "Kent",
    image: "/images/kent.png",
    description:
      "The Kent mango has good reliable, though not exceptional, eating qualities, and is common in supermarkets dues to its ability to maintain quality when transported by sea. It is a mid to late season mango and of medium to large in size. It is oval-shaped with mainly a green/yellow background colour and sometimes with a red blush. The peel remains green/yellow, even when ripe and ready to eat. The attractive orange flesh is fibre-free with a slightly rubbery, firm texture and tends to be very sweet, with a mild flavour and good juice content. Flavour is enhanced when the fruit is left on the tree for longer, though this is rarely conducive to sea-freighting the fruit.",
    country: "USA",
    price: 16.99,
    countInStock: 7,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Osteen",
    image: "/images/osteen.jpg",
    description:
      "The fruit is of oblong shape with a rounded base and apex that sometimes contains a small beak. It averages a little over a pound in weight at maturity. The smooth skin has a yellow background color but usually turns dark purple. The flesh is nearly fiberless and has a mild yet sweet flavor.",
    country: "USA",
    price: 33.99,
    countInStock: 8,
    rating: 3,
    numReviews: 2,
  },
  {
    name: "Tommy Atkins",
    image: "/images/tommy_atkins.png",
    description:
      "Tommy Atkins mangoes are a medium to large sized mango variety weighing up to two pounds each. They are broadly oval shaped with a green skin almost always covered with a dark red blush with occasional orange or yellow accents. The smooth skin is covered with small, yellow-green lenticels (pores) that appear like freckles. The skin is thick, protecting the firm, deep yellow flesh during shipping. Tommy Atkins mangoes are juicy, with a somewhat fibrous flesh, and a mildly sweet taste. The fruit must be lightly squeezed to determine ripeness.",
    country: "USA",
    price: 22.99,
    countInStock: 9,
    rating: 3,
    numReviews: 4,
  },
  {
    name: "Alphonso",
    image: "/images/alphonso.jpg",
    description:
      "Alphonso mangoes are small and somewhat egg-shaped. They grow suspended from long stems on evergreen leafy trees. When immature, the soft yellow skin will retain spots of green. When fully ripe, the deeper saffron-hued skin may have a blush of red, but no green color will remain. Alphonso mangoes have very thin skins, so many are hand-harvested to protect the fruit. The aroma of Alphonso mangoes is very intense due to the presence of high levels of myrcene, a kind of terpenoid, a naturally occurring chemical in plants responsible for flavor and aroma. The Indian mangoes have a sharply sweet flavor along with more mellow tropical flavors. The flesh is non-fibrous, with a smooth texture unlike some mango varieties.",
    country: "India",
    price: 34.99,
    countInStock: 5,
    rating: 4,
    numReviews: 7,
  },
  {
    name: "Gir Kesar",
    image: "/images/gir_kesar.jpg",
    description:
      "The vibrant saffron hue and sinfully sweet taste of the Gir Kesar mango puts it on the list of much loved and sought-after mangoes of India. Titled by the locals as the ‘Queen of Mangoes’, this delightfully bright and delicious mango finds its place among the country’s five best indigenous varieties.",
    country: "India",
    price: 49.99,
    countInStock: 6,
    rating: 4,
    numReviews: 4,
  },
  {
    name: "Sien ta lone",
    image: "/images/sien_ta_lone.jpg",
    description:
      "'Sein Ta Lone' translates into Diamond mango. These valuable mangoes from Myanmar are most cherished for their non-fibrous and juicy flesh. 15 cm in length and over 3 pounds in weight, the diamond mango looks big and imposing. Diamond mangoes have made its own mark among the best varieties of mangoes in the world.",
    country: "Myanmar",
    price: 31.99,
    countInStock: 9,
    rating: 4,
    numReviews: 6,
  },
  {
    name: "Kensington",
    image: "/images/kensington.png",
    description:
      "Mango Kensington Pride is a large fruiting tree which will produce moderate crops of medium sized fruit. The fruit is yellow fleshed, uniquely sweet tasting and has a great aroma. It will start fruiting in spring through to summer. The fruit can be used in fresh salads, jucies, sauces, dried, the options are endless.",
    country: "Myanmar",
    price: 34.99,
    countInStock: 12,
    rating: 3.5,
    numReviews: 3,
  },
  {
    name: "Totapuri",
    image: "/images/totapuri.jpg",
    description:
      "Totapuri Mangoes (Magnifera indica) are ablong with prominent beak in shape and about 6-8 inches long. The skin of the fruit is thick and green, yellow or a fanciful combination of these colours, but is inedible. There is a central large seed surrounded by the pulp which ranges from pale to bright yellow.",
    country: "India",
    price: 19.99,
    countInStock: 6,
    rating: 3.5,
    numReviews: 2,
  },
  {
    name: "Arumanis",
    image: "/images/arumanis.png",
    description:
      "Arumanis mangoes have a vibrant green skin with large, light-yellow dots. The fruit maintains its green coloring even when ripe and is ready to eat right off the tree. Arumanis mangoes have an overall elongated and elliptical shape; they are slightly larger than palm-size and can weigh up to one pound.",
    country: "Indonesia",
    price: 16.99,
    countInStock: 9,
    rating: 3,
    numReviews: 1,
  },
  {
    name: "Nam Dok Mai",
    image: "/images/nam_dok_mai.png",
    description:
      "The 'Nam Dok Mai' is a mango cultivar which originated in Thailand. It is the most popular mango variety in Thailand, and is grown commercially in Australia and Colombia as well, albeit as a minor variety. The Nam Dok Mai tree is medium-sized, potentially reaching heights of over six meters. It is an early-midseason variety, with the potential for multiple crops in a year. The fruit is elongated, with a prominent beak, and is normally yellow with green spots. It is a polyembryonic-seeded variety. The flesh of the fruit is known for having very little fibre, strong and pleasant aroma, and very sweet taste.",
    country: "Thailand",
    price: 37.99,
    countInStock: 8,
    rating: 3.5,
    numReviews: 2,
  },
  {
    name: "Kyo Savoy",
    image: "/images/kyo_savoy.jpg",
    description:
      "Kyo Savoy or Khieo Sawoei, was selected in Thailand and sets the standard of quality for the mature green mango. The fruit has a high price in local markets. The fruits are long and slender, with blunt apex. Its weight is 400 to 600g, with smooth skin and fine. When ripe, the fruit are dark green, with permanent stitches, making them easy to distinguish from other mangoes. The flesh is firm and crisp, with considerable juiciness and texture. The flesh is sweet, very slightly acid touch. If allowed, the maturity of the fruit of a pale yellow when the meat becomes soft and develops a sweet and silky. As with other mature green mangoes, texture is vital for Quality: The meat should be firm and crisp. As the fruit loses water, becomes gummy pulp, discouraging export to distant markets. Tree very vigorous, late harvest (October).",
    country: "Thailand",
    price: 21.99,
    countInStock: 11,
    rating: 2.5,
    numReviews: 1,
  },
  {
    name: "Ivory",
    image: "/images/ivory.png",
    description:
      "The fruit has thin, smooth skin. The flesh contains very few fibres, and constitutes approximately 82 percent of the fruit. Ivory is named for its resemblance to a young elephant's tusk due to its long, thin shape. It was first introduced into Yunnan, China from Thailand in 1914. The actual tree that was the first to be imported still grows, and during one year produced almost 500 kg of fruit.",
    country: "China",
    price: 29.99,
    countInStock: 14,
    rating: 0,
    numReviews: 0,
  },
];

export default products;
