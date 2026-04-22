import React from 'react';
import { StarClip } from './icons';

const PRODUCTS = [
  {
    name: 'Frontend Starter Pack',
    tagline: 'Everything you need to build blazing fast websites!',
    includes: ['JavaScript', 'React', 'HTML/CSS', 'Webpack'],
    price: '$199.99',
    originalPrice: '$379.96',
    rating: 5,
    reviews: 347,
    badge: 'BEST SELLER',
    stock: 'In Stock - Ships TODAY!',
  },
  {
    name: 'Full Stack Bundle',
    tagline: 'From browser to server, we got you covered!',
    includes: ['JavaScript', 'React', 'Node.js', 'Python', 'Django'],
    price: '$299.99',
    originalPrice: '$499.95',
    rating: 5,
    reviews: 412,
    badge: 'HOT!!!',
    stock: 'Limited Supply!!',
  },
  {
    name: 'Backend Essentials',
    tagline: 'Power your APIs and services!',
    includes: ['Python', 'Django', 'Node.js', 'GraphQL'],
    price: '$149.99',
    originalPrice: '$249.99',
    rating: 4,
    reviews: 189,
    badge: 'SALE!',
    stock: 'In Stock',
  },
  {
    name: 'UI Architect Suite',
    tagline: 'Pixel-perfect interfaces, every time.',
    includes: ['React', 'MobX', 'Canvas API', 'CSS'],
    price: '$179.99',
    rating: 5,
    reviews: 156,
    stock: 'In Stock - Ships in 2-3 days',
  },
  {
    name: 'API Builder Pro',
    tagline: 'RESTful, GraphQL, you name it.',
    includes: ['Node.js', 'GraphQL', 'Django', 'Python', 'Graphene'],
    price: '$129.99',
    rating: 4,
    reviews: 273,
    stock: 'In Stock',
  },
  {
    name: 'Legacy Rescue Kit',
    tagline: 'Inherit codebases with confidence.',
    includes: ['PHP', 'Knockout.js', 'jQuery', 'HTML', 'Blade'],
    price: '$89.99',
    originalPrice: '$129.99',
    rating: 4,
    reviews: 97,
    badge: 'SALE!',
    stock: 'In Stock',
  },
  {
    name: 'Creative Coder Kit',
    tagline: 'Make the web weird.',
    includes: ['Canvas API', 'CSS Animations', 'SVGs', 'JavaScript'],
    price: '$99.99',
    rating: 5,
    reviews: 64,
    badge: 'NEW!',
    stock: 'In Stock - Ships TODAY!',
  },
  {
    name: 'Rapid Prototyper',
    tagline: 'Idea to demo in 24 hours.',
    includes: ['React', 'Node.js', 'Webpack', 'HTML/CSS'],
    price: '$159.99',
    rating: 4,
    reviews: 218,
    stock: 'In Stock',
  },
  {
    name: 'The Complete Collection',
    tagline: 'Why choose? Get everything.',
    includes: ['All skills included'],
    price: '$799.99',
    originalPrice: '$1,299.99',
    rating: 5,
    reviews: 501,
    badge: 'PREMIUM',
    stock: 'Always In Stock',
  },
];

const FILLED_STAR = '\u2605';
const EMPTY_STAR = '\u2606';

const ProductRating = ({ rating, reviews }) => (
  <div className="classic-product-rating">
    <span className="classic-product-stars-filled">
      {FILLED_STAR.repeat(rating)}
    </span>
    {rating < 5 && (
      <span className="classic-product-stars-empty">
        {EMPTY_STAR.repeat(5 - rating)}
      </span>
    )}
    <span className="classic-product-reviews">({reviews} reviews)</span>
  </div>
);

const ProductCard = ({ product }) => (
  <td className="classic-product-card">
    {product.badge && (
      <div
        className={`classic-product-badge${product.badge === 'HOT!!!' || product.badge === 'BEST SELLER' ? ' classic-blink' : ''}`}
      >
        {product.badge}
      </div>
    )}
    <div className="classic-product-name">{product.name}</div>
    <div className="classic-product-tagline">{product.tagline}</div>
    <div className="classic-product-includes">
      {product.includes.map((item) => (
        <span key={item} className="classic-product-includes-item">
          {item}
        </span>
      ))}
    </div>
    <ProductRating rating={product.rating} reviews={product.reviews} />
    <div className="classic-product-price">
      {product.originalPrice && (
        <span className="classic-product-original-price">
          {product.originalPrice}
        </span>
      )}
      <span className="classic-product-current-price">{product.price}</span>
    </div>
    <div className="classic-product-cart-btn">Add to Cart</div>
    <div className="classic-product-stock">{product.stock}</div>
  </td>
);

const Pagination = () => (
  <div className="classic-shop-pagination">
    <span className="classic-shop-page classic-shop-page--active">1</span>
    <span className="classic-shop-page">2</span>
    <span className="classic-shop-page">3</span>
    <span className="classic-shop-page">4</span>
    <span className="classic-shop-page-dots">...</span>
    <span className="classic-shop-page">12</span>
    <span className="classic-shop-page classic-shop-page--next">
      Next &gt;&gt;
    </span>
  </div>
);

const Shop = () => (
  <>
    <a name="shop" />
    <h2 className="classic-section-title classic-section-title--teal">
      <StarClip size={20} /> Skill Shop
    </h2>
    <p className="classic-shop-subtitle">
      Browse our selection of <b>premium skill packs</b> at unbeatable prices!!
      We pride ourselves on providing the best quality skills for your next
      project!
      <br />
      <span className="classic-blink classic-color-red">
        *** <b>FREE SHIPPING</b> on all orders! ***
      </span>
    </p>
    <div className="classic-shop-results">
      Showing 1-{PRODUCTS.length} of 47 results
    </div>
    <table className="classic-shop-grid" cellPadding="0" cellSpacing="8">
      <tbody>
        {Array.from({ length: Math.ceil(PRODUCTS.length / 3) }, (_, rowIdx) => (
          <tr key={rowIdx}>
            {PRODUCTS.slice(rowIdx * 3, rowIdx * 3 + 3).map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
    <Pagination />
  </>
);

export default Shop;
