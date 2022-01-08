var BlackBeautyv1 = "./assets/BlackBeautyv1.png";
var BlackBeautyv2 = "./assets/BlackBeautyv2.png";
var BlackBeautyv3 = "./assets/BlackBeautyv3.png";
var DiningChairv1 = "./assets/DiningChairv1.png";
var DiningChairv2 = "./assets/DiningChairv2.png";
var DiningChairv3 = "./assets/DiningChairv3.png";
var Elegantv1 = "./assets/Elegantv1.png";
var Elegantv2 = "./assets/Elegantv2.png";
var Elegantv3 = "./assets/Elegantv3.png";
var Elegantv4 = "./assets/Elegantv4.png";
var HighTablev1 = "./assets/HighTablev1.png";
var HighTablev2 = "./assets/HighTablev2.png";
var HighTablev3 = "./assets/HighTablev3.png";
var LegRestv1 = "./assets/LegRestv1.png";
var LegRestv2 = "./assets/LegRestv2.png";
var LegRestv3 = "./assets/LegRestv3.png";
var MidCenturyv1 = "./assets/MidCenturyv1.png";
var MidCenturyv2 = "./assets/MidCenturyv2.png";
var MidCenturyv3 = "./assets/MidCenturyv3.png";
var RoyalSofav1 = "./assets/RoyalSofav1.png";
var RoyalSofav2 = "./assets/RoyalSofav2.png";
var RoyalSofav3 = "./assets/RoyalSofav3.png";
var SlimSofav1 = "./assets/SlimSofav1.png";
var SlimSofav2 = "./assets/SlimSofav2.png";
var SlimSofav3 = "./assets/SlimSofav3.png";
var ThreeSeaterv1 = "./assets/ThreeSeaterv1.png";
var ThreeSeaterv2 = "./assets/ThreeSeaterv2.png";
var ThreeSeaterv3 = "./assets/ThreeSeaterv3.png";
var Tuxedov1 = "./assets/Tuxedov1.png";
var Tuxedov2 = "./assets/Tuxedov2.png";
var Tuxedov3 = "./assets/Tuxedov3.png";
var WingChairv1 = "./assets/WingChairv1.png";
var WingChairv2 = "./assets/WingChairv2.png";
var WingChairv3 = "./assets/WingChairv3.png";

var products = [
  {
    id: 1,
    name: "Elegant",
    image: [Elegantv1, Elegantv2, Elegantv3, Elegantv4],
    price: "$ 1,598",
    about: `Standing on solid wood legs,
       our goes-with-anything Baltimore Dining Chairs take a page
       clean-lined mid-century modern designs. Its seat is upholstered in durable,
        family-friendly fabric, making this a perfect piece for parties or family dinners alike.`,
    dimensions: `<p>Overall: 29.9""w x 29.75""d x 30.9""h <br>
      Seat: <br>
      Width: 21.6""  Depth: 22.75""  Height: 17.1"".<br>
      Arm height: 22"".<br>
      Diagonal depth: 27.4"".<br>
      Leg 
      Height (front): 11.25""  Height (back): 10.9"".<br>
      Packaged weight: 46.4 lbs.</p>
    `,
    details: `<p>Solid rubberwood legs; engineered wood seat and back.<br>
    Covered in a Walnut-finished stain.<br>
    All wood is kiln-dried for added durability.<br>
    Plastic foot caps on legs help protect floors.<br>
    Sold in sets.<br>
    Made in Vietnam</p>`,
  },
  {
    id: 2,
    name: "Wing Chair",
    image: [WingChairv1, WingChairv2, WingChairv3],
    price: "$ 1,998",
    about: `The height of fashion, our mid-century Italian-inspired Finley Lounge Chair features winged arms, angled iron toothpick legs and a slim, rounded seat cushion for sleek comfort. It's an eye-catching piece for the living room or reading nook.`,
    dimensions: `Overall: 29.9"w x 29.75"d x 30.9"h.<br>
    Seat: <br>
    Width: 21.6"  Depth: 22.75"  Height: 17.1".<br>
    Arm height: 22".<br>
    Diagonal depth: 27.4".<br>
    Leg Height (front): 11.25"  Height (back): 10.9".<br>
    Packaged weight: 46.4 lbs.<br>`,
    details: `Kiln-dried engineered wood frame <br>.
    Metal legs with a powder-coated finish in Burnished Bronze .<br>
    Semi-attached, non-reversible seat cushion.<br>
    This contract-grade item is manufactured to meet the demands of commercial use in addition to residential.<br> 
    var ed.<br>`,
  },
  {
    id: 3,
    name: "Mid Century",
    image: [MidCenturyv1, MidCenturyv2, MidCenturyv3],
    price: "$ 1,998",
    about: `The height of fashion, our mid-century Italian-inspired Finley Lounge Chair features winged arms, angled iron toothpick legs and a slim, rounded seat cushion for sleek comfort. It's an eye-catching piece for the living room or reading nook.`,
    dimensions: `Overall: 19.9"w x 21"d x 37.5"h.<br>
    Seat height: 26".<br>
    Back height: 13".<br>
    Clearance: 19".<br>
    Weight capacity: 275 lbs.<br>
    Packaged weight: 32 lbs.<br>`,
    details: `Solid wood or stainless steel legs.<br>
    Padded, upholstered seat.<br>
    Swivel base.<br>
    This contract-grade item is manufactured to meet the demands of commercial use in addition to residential.<br>
    Made in China.<br>`,
  },
  {
    id: 4,
    name: "Three Seater",
    image: [ThreeSeaterv1, ThreeSeaterv2, ThreeSeaterv3],
    price: "$ 1,998",
    about: `It's defined by a low-slung frame and slender profile.
    Boomerang legs are Danish modern inspired.
    All wood is kiln-dried for added durability.
    Available in your choice of leathers.`,
    dimensions: `74.4"w x 35"d x 30.7"h.<br>
    Interior seat width: 68.9".<br>
    Seat: <br>
    Depth: 24" Height: 17".<br>
    Back height: 26.75".<br>
    Clearance: 9".<br>
    Comfortably seats: 2-3.<br>
    Packaged weight: 135.6 lbs.<br>`,
    details: `Solid pine and engineered hardwood frame with reinforced joinery.<br>
    All wood is kiln dried for added durability.<br>
    Available in your choice of genuine top-grain leather or animal-friendly vegan leather.<br>
    Solid oak boomerang legs (removable) in a Walnut finish.<br>
    Webbed seat and back support.<br>
    Seat cushions have fiber-wrapped, high-resiliency polyurethane foam cores.<br>
    Seat firmness: Medium. On a scale =1 to 5 (5 being firmest), it's a 4.<br>
    Back cushions are 70% poly fiber, 30% duck feather blend in down proof ticking.<br>
    Loose cushions with zip-off covers (non-reversible).<br>
    This contract-grade item is manufactured to meet the demands of commercial use in addition to residential.<br>
    Handcrafted.<br>
    Made in Vietnam.<br>`,
  },
  {
    id: 5,
    name: "Royal Sofa",
    image: [RoyalSofav1, RoyalSofav2, RoyalSofav3],
    price: "$ 1,998",
    about: `The inviting silhouette wraps around you.
    Its cloud-like seat cushion offers supreme comfort.
    Covered in your choice of popular fabrics.
    Contract Grade for unmatched durability.`,
    dimensions: `Overall: 29.5"w x 31"d x 29.5"h.<br>
    Interior seat width: 21.5".<br>
    Seat <br>
    Depth: 23.5"  Height: 19".<br>
    Arm height: 25.5".<br>
    Diagonal depth: 29".<br>
    Packaged weight: 63.6 lbs.<br>`,
    details: `Kiln-dried pine and engineered wood frame with reinforced joinery.<br>
    Webbed cushion support.<br>
    High-resiliency polyurethane foam that is fiber-wrapped for extra comfort.<br>
    Seat firmness: Medium. On a scale =1 to 5 (5 being firmest), it's a 3.<br>
    360-degree swivel base.<br>
    Loose, reversible seat cushion with zip-off cover.<br>
    This contract-grade item is manufactured to meet the demands of commercial use in addition to residential. See more.<br>
    Stocked products are made in China; Made to order products are made in Mexico.<br>`,
  },
  {
    id: 6,
    name: "Tuxedo",
    image: [Tuxedov1, Tuxedov2, Tuxedov3],
    price: "$ 1,998",
    about: `Its mix of sleek frame & plush cushioning.
    Covered in your choice of beautiful leather.
    The down-wrapped back cushions.
    Contract Grade for unmatched durability.`,
    dimensions: `70"w x 35.8"d x 31.5"h.<br>
    Seat:<br>
    Width: 62" Depth: 23.2" Height: 18.5".<br>
    Back height: 31.5".<br>
    Arm height: 26".<br>
    Diagonal depth: 32.3".<br>
    Leg height: 6.7".<br>
    Comfortably seats: 2.<br>`,
    details: `Solid and engineered hardwood frame with reinforced joinery.<br>
    All wood is kiln dried for added durability.<br>
    Available in genuine top-grain leather or animal-friendly vegan leather.<br>
    Webbed seat and back support.<br>
    Seat cushions have fiber-wrapped, high-resiliency polyurethane foam cores.<br>
    Seat firmness: Medium. On a scale =1 to 5 (5 being firmest), it's a 3.<br>
    Back cushions are 70% poly fiber, 30% duck feather blend in down proof ticking (Vegan leather options have polyester only filled back cushions).
    Loose, non-reversible cushions with zip-off covers.<br>
    Solid wood legs (removable).<br>
    This contract-grade item is manufactured to meet the demands of commercial use in addition to residential<br>
    Genuine leather options are made in Vietnam; Vegan leather options are assembled in the USA.<br>`,
  },
  {
    id: 7,
    name: "Leg Rest Chair",
    image: [LegRestv1, LegRestv2, LegRestv3],
    price: "$ 1,998",
    about: `Inspired by the cool, clean lines of Scandinavian design, the Playa Collection features a slim profile and modern finish. Made with FSC®-certified wood and water-resistant cushions, this lounge-ready set is the sink-right-in seating you'll want for your next outdoor gathering.`,
    dimensions: `Overall product dimensions: 36.25"w x 29.4"d x 31.2"h.<br>
    Interior seat width: 26.9".<br>
    Seat depth: 24.25".<br>
    Seat height: 10.9" (without cushion); 15.6" (with cushion).<br>
    Back height: 28".<br>
    Arm height: 22.7".<br>
    Leg height: 7.4".<br>`,
    details: `For set pictured, select 1 Playa Lounge Chair and 1 Playa Ottoman.<br>
    Components are priced individually.<br>
    Solid eucalyptus and mahogany wood frame.<br>
    Made with kiln-dried, FSC®-certified wood responsibly managed forests.<br>
    Covered in a water-based Mast finish.<br>
    Water-resistant cushions with 100% polyester covers in Cement (included).<br>
    Cushions feature polyurethane foam and polyester filling.<br>
    Non-reversible cushions with zip-off covers.<br>
    Made in Indonesia.<br>`,
  },
  {
    id: 8,
    name: "Dining Chair",
    image: [DiningChairv1, DiningChairv2, DiningChairv3],
    price: "$ 1,998",
    about: `On top of its tapered legs and mid-century-inspired frame, we gave our Classic Café Dining Chair a comfortable oval back and an upholstered seat, for a chair that’s extra inviting.`,
    dimensions: `17.3"w x 20"d x 32"h.<br>
    Seat: <br>
    Depth: 15.7"   Height: 17.75".<br>
    Weight capacity: 275 lbs.<br>`,
    details: `Solid rubberwood frame.<br>
    Upholstered seat.<br>
    Walnut finish.<br>
    Plastic caps on legs help protect floors.<br>
    Set of 2.<br>
    var ed.<br>`,
  },
  {
    id: 10,
    name: "Black Beauty",
    image: [BlackBeautyv1, BlackBeautyv2, BlackBeautyv3],
    price: "$ 1,998",
    about: `The sculptural arms & wide, welcoming seat.
    Covered in your choice of popular fabrics.
    Its timeless design makes it one of our best sellers.
    Contract Grade for unmatched durability.`,
    dimensions: `Overall: 26"w x 31.6"d x 32.3"h.<br>
    Seat:<br>
    Width: 22.5"  Depth: 20.25"  Height: 19".<br>
    Arm height: 22.9".<br>
    Back height: 30.3".<br>
    Clearance: 8".<br>
    Diagonal depth: 29.5".<br>
    Packaged weight: 39.6 lbs.<br>`,
    details: `Solid ash wood arms and legs.<br>
    Engineered wood seat and back.<br>
    All wood is kiln-dried for extra durability.<br>
    Made with FSC®-certified wood responsibly managed forests.<br>
    Webbed cushion support with foam filling.<br>
    Seat firmness: Medium. On a scale =1 to 5 (5 being firmest), it's a 4.<br>
    This contract-grade item is manufactured to meet the demands of commercial use in addition to residential. See more.<br>
    Made in Romania.<br>`,
  },
  {
    id: 11,
    name: "High Table",
    image: [HighTablev1, HighTablev2, HighTablev3],
    price: "$ 1,998",
    about: `It's a substantial table with graceful lines.
    Crafted =solid, sustainably sourced wood.
    Contract Grade, so you know it's built to last.
    You pick the finish & width.`,
    dimensions: `Overall: 72"w x 39"d x 30"h.<br>
    Clearance under table: 29".<br>
    Distance between legs: 38.5".<br>
    Overhang: 13.5".<br>
    Top thickness: 1".<br>
    Comfortably seats up to: 6.<br>`,
    details: `Kiln-dried solid mango wood.<br>
    Natural variations in wood color and grain make each piece one of a kind.<br>
    The mango wood used on this product is sustainably sourced =trees that no longer produce fruit.<br>
    Legs include built-in levelers.<br>
    Made in a Fair Trade Certified™ factory, empowering workers who made it.<br>
    This contract-grade item is manufactured to meet the demands of commercial use in addition to residential.<br> 
    Made in India.<br>
    Patent pending.<br>`,
  },
];
