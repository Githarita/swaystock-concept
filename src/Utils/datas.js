import sneaker1 from "../assets/sneaker1.png";
import sneaker2 from "../assets/sneaker2.png";
import sneaker3 from "../assets/sneaker3.png";
import sneaker4 from "../assets/sneaker4.png";
import sneaker5 from "../assets/sneaker5.png";
import sneakerimg from "../assets/sneakerscat.png";
import apparelimg from "../assets/apparelcat.png";
import electronicsimg from "../assets/electronicscat.png";
import collectiblesimg from "../assets/collectiblescat.png";
import bagsimg from "../assets/bagcat.png";
import accessoriesimg from "../assets/accessoriescat.png";
import beautyimg from "../assets/beautycat.png";
import phoneimg from "../assets/phone.png";

export const locationData = {};

export const categoryProductList = {
  catProductType: [
    {
      tag: "New",
      name: "Adidas Yeezy Foam RNR Onyx",
      image: sneaker1,
      price: "NGN100k",
    },
    {
      tag: "Only at SwayStock",
      name: "Jordan 2 Retro A Ma Maniere Airness",
      image: sneaker2,
      price: "NGN230k",
    },
    {
      tag: "New",
      name: "Jordan 4 Retro Millitary Black",
      image: sneaker3,
      price: "NGN150k",
    },
    {
      tag: "New",
      name: "Nike Air Max 1 Kasina Wono-Ang Orange",
      image: sneaker4,
      price: "NGN80k",
    },
    {
      tag: "Only at SwayStock",
      name: "Nike Dunk Low Tow-Toned Grey(GS)",
      image: sneaker5,
      price: "NGN50k",
    },
  ],
};

export const categoriesItem = {
  categoriestProc: [
    {
      link: "sneakers",
      image: sneakerimg,
      name: "Sneakers",
    },
    {
      link: "apparel",
      image: apparelimg,
      name: "Apparel",
    },
    {
      link: "electronics",
      image: electronicsimg,
      name: "Electronics",
    },
    {
      link: "collectibles",
      image: collectiblesimg,
      name: "Collectibles",
    },
    {
      link: "bag",
      image: bagsimg,
      name: "Bags",
    },
    {
      link: "beauty",
      image: beautyimg,
      name: "Beauty",
    },
    {
      link: "accessories",
      image: accessoriesimg,
      name: "Accessories",
    },
    {
      link: "phones",
      image: phoneimg,
      name: "Phones",
    },
  ],
};

export const sortBy = {
  sortType: [
    {
      name: "Featured",
      value: "featured",
    },
    {
      name: "Most Popular",
      value: "most popular",
    },
    {
      name: "New Lowest Asks",
      value: "new lowest asks",
    },
    {
      name: "New Highest Bids",
      value: "new highest bids",
    },
    {
      name: "Average Sale Price",
      value: "average sale price",
    },
    {
      name: "Total Sold",
      value: "total sold",
    },
    {
      name: "Volatility",
      value: "volatility",
    },
    {
      name: "Price Premium",
      value: "price premium",
    },
    {
      name: "Last Sale",
      value: "last sale",
    },
    {
      name: "Lowest Ask",
      value: "lowest ask",
    },
    {
      name: "Highest Bid",
      value: "highest bid",
    },
    {
      name: "Release Date",
      value: "release date",
    },
  ],
};

export const productCat = {
  productCatType: [
    {
      name: "Sneakers",
      value: "sneakers",
    },
    {
      name: "Collectibles",
      value: "collectibles",
    },
    {
      name: "Apparel",
      value: "apparel",
    },
    {
      name: "Electronics",
      value: "electronics",
    },
    {
      name: "Accessories",
      value: "accessories",
    },
    {
      name: "Beauty",
      value: "beauty",
    },
    {
      name: "Bags",
      value: "bags",
    },
    {
      name: "NFTs",
      value: "nfts",
    },
  ],
};

export const byPrice = {
  byPriceType: [
    {
      name: "Under ₦50,000",
      value: "under 50,000",
    },
    {
      name: "₦50,000 - ₦100,000",
      value: "50,000 - 100,000",
    },
    {
      name: "₦100,000 - ₦250,000",
      value: "100,000 - 250,000",
    },
    {
      name: "₦250,000 - ₦500,000",
      value: "250,000 - 500,000",
    },
    {
      name: "₦500,000 - ₦1,000,000",
      value: "500,000 - 1,000,000",
    },
    {
      name: "₦1,000,000 +",
      value: "1,000,000 +",
    },
  ],
};

export const byGenders = {
  byGendersType: [
    {
      name: "Men",
      value: "men",
    },

    {
      name: "Women",
      value: "women",
    },
    {
      name: "Kids",
      value: "kids",
    },
    {
      name: "Unisex",
      value: "unisex",
    },
  ],
};
