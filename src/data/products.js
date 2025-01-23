export const products = [
  {
    id: 1,
    title: "Premium Wireless Headphones",
    price: 199.99,
    originalPrice: 249.99,
    discount: 20,
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&q=80",
    ],
    description: "High-quality wireless headphones with noise cancellation",
    category: "Electronics",
    brand: "SoundMaster",
    stock: 45,
    ratings: { average: 4.5, count: 128 },
    quantity: 0, // Add the quantity key here
  },
  {
    id: 2,
    title: "Smart Fitness Watch",
    price: 149.99,
    originalPrice: 179.99,
    discount: 15,
    image:
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=500&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=200&q=80",
    ],
    description: "Advanced fitness tracker with heart rate monitoring",
    category: "Wearables",
    brand: "FitTech",
    stock: 30,
    ratings: { average: 4.3, count: 95 },
    quantity: 0, // Add the quantity key here
  },
  {
    id: 3,
    title: "Professional DSLR Camera",
    price: 1299.99,
    originalPrice: 1499.99,
    discount: 13,
    image:
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=500&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200&q=80",
    ],
    description: "Professional-grade DSLR camera for photographers",
    category: "Photography",
    brand: "OptixPro",
    stock: 15,
    ratings: { average: 4.8, count: 72 },
    quantity: 0, // Add the quantity key here
  },
  {
    id: 4,
    title: "Gaming Laptop",
    price: 1599.99,
    originalPrice: 1799.99,
    discount: 11,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=200&q=80",
    ],
    description: "High-performance gaming laptop with RGB keyboard",
    category: "Computers",
    brand: "TechPro",
    stock: 20,
    ratings: { average: 4.6, count: 89 },
    quantity: 0, // Add the quantity key here
  },
  {
    id: 5,
    title: "Wireless Earbuds",
    price: 129.99,
    originalPrice: 159.99,
    discount: 19,
    image:
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=200&q=80",
    ],
    description: "True wireless earbuds with premium sound quality",
    category: "Electronics",
    brand: "AudioTech",
    stock: 55,
    ratings: { average: 4.4, count: 156 },
    quantity: 0, // Add the quantity key here
  },
  {
    id: 6,
    title: "4K Smart TV",
    price: 799.99,
    originalPrice: 899.99,
    discount: 11,
    image:
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200&q=80",
    ],
    description: "55-inch 4K Smart TV with HDR support",
    category: "Electronics",
    brand: "VisionMax",
    stock: 25,
    ratings: { average: 4.7, count: 112 },
    quantity: 0, // Add the quantity key here
  },
  {
    id: 7,
    title: "Mechanical Keyboard",
    price: 129.99,
    originalPrice: 149.99,
    discount: 13,
    image:
      "https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=500&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1595225353945-8a291b252b8d?w=200&q=80",
    ],
    description: "RGB mechanical gaming keyboard with custom switches",
    category: "Gaming",
    brand: "GameGear",
    stock: 40,
    ratings: { average: 4.5, count: 92 },
    quantity: 0, // Add the quantity key here
  },
  {
    id: 8,
    title: "Smartphone",
    price: 899.99,
    originalPrice: 999.99,
    discount: 10,
    image:
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=200&q=80",
    ],
    description: "Latest flagship smartphone with advanced camera system",
    category: "Electronics",
    brand: "TechGiant",
    stock: 35,
    ratings: { average: 4.6, count: 245 },
    quantity: 0, // Add the quantity key here
  },
  {
    id: 9,
    title: "Wireless Mouse",
    price: 49.99,
    originalPrice: 59.99,
    discount: 17,
    image:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=200&q=80",
    ],
    description: "Ergonomic wireless mouse for productivity",
    category: "Accessories",
    brand: "TechPro",
    stock: 60,
    ratings: { average: 4.3, count: 167 },
    quantity: 0, // Add the quantity key here
  },
  {
    id: 10,
    title: "Gaming Console",
    price: 499.99,
    originalPrice: 549.99,
    discount: 9,
    image:
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500&q=80",
    thumbnails: [
      "https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=200&q=80",
    ],
    description: "Next-gen gaming console with 4K support",
    category: "Gaming",
    brand: "GameTech",
    stock: 28,
    ratings: { average: 4.8, count: 189 },
    quantity: 0, // Add the quantity key here
  },
  // Repeat for the other products...
];
