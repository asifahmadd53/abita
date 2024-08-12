// data.js
import { auth, debit, four, img4, location, mail, phone, truck, img5, img1, img10, img11, img13, img14, img15, img16, img17, img18, img19, img21, img22, star, logo1, logo2, logo3, logo4, img20, img27, img28, img29, img30, img31, img32, img33, img34, img35, img36, img37, img38, img39, img40, img41 } from "../assets";

export const navLinks = [
    { id: "home", title: "Home" },
    { id: "about", title: "About" },
    { id: "shop", title: "Shop" },
    { id: "blog", title: "Blog" },
    { id: "contact", title: "Contact" },
];

export const contactinfo = [
    { img: location, info: '12/A Johar Town Lahore' },
    { img: phone, info: '+92 30000030' },
    { img: mail, info: 'mail@mail.com' },
];

export const services = [
    { img: truck, h: 'Free Delivery', text: 'Free shipping on all order' },
    { img: debit, h: 'Money Return', text: 'Back guarantee under 7 day' },
    { img: four, h: 'Online Support 24/7', text: 'Support online 24 hours a day' },
    { img: auth, h: 'Reliable', text: 'Trusted by 1000+ brands' },
];

// export const off = [
//     { offf: 'GET 15% OFF', h: 'Wicker Hanfing Chairs', img: img4 },
//     { offf: 'GET 15% OFF', h: 'Brasslegged Armchair', img: img5 },
// ];

export const products = [
    { id: 1, img: img40, name: 'Modern Sofa', price: 200.0, details: 'New in', slug: 'modern-sofa', description: 'A sleek and modern sofa that adds a touch of elegance to any living space.', offf: 'GET 15% OFF' },
    { id: 2, img: img18, name: 'Accent Chair', price: 150.0, details: 'Top rated', slug: 'accent-chair', description: 'A stylish accent chair that serves as a statement piece in any room.', offf: 'GET 20% OFF' },
    { id: 3, img: img29, name: 'Glass Coffee Table', price: 120.0, details: 'New in', slug: 'glass-coffee-table', description: 'A modern glass coffee table that complements any contemporary living room.', offf: 'GET 10% OFF' },
    { id: 4, img: img31, name: 'Wooden Bed Frame', price: 400.0, details: 'Top rated', slug: 'wooden-bed-frame', description: 'A durable wooden bed frame with a timeless design, ensuring a good night\'s sleep.', offf: 'GET 25% OFF' },
    { id: 5, img: img27, name: 'Bookshelf', price: 90.0, details: 'New in', slug: 'bookshelf', description: 'A versatile bookshelf perfect for organizing books, decor, and more.', offf: 'GET 15% OFF' },
    { id: 6, img: img11, name: 'Dining Chair', price: 85.0, details: 'New in', slug: 'dining-chair', description: 'A comfortable dining chair that fits seamlessly into any dining room setting.', offf: 'GET 10% OFF' },
    { id: 7, img: img15, name: 'Leather Recliner', price: 300.0, details: 'Top rated', slug: 'leather-recliner', description: 'A luxurious leather recliner that offers the ultimate comfort and relaxation.', offf: 'GET 20% OFF' },
    { id: 8, img: img17, name: 'Office Desk', price: 250.0, details: 'New in', slug: 'office-desk', description: 'A spacious office desk with a modern design, perfect for home offices.', offf: 'GET 15% OFF' },
    { id: 9, img: img18, name: 'Nightstand', price: 60.0, details: 'New in', slug: 'nightstand', description: 'A compact nightstand with ample storage for all your bedside essentials.', offf: 'GET 30% OFF' },
    { id: 10, img: img19, name: 'Wall Shelf', price: 40.0, details: 'New in', slug: 'wall-shelf', description: 'A stylish wall shelf ideal for displaying decorative items.', offf: 'GET 20% OFF' },
    { id: 11, img: img27, name: 'Lounge Chair', price: 250.0, details: 'Top rated', slug: 'lounge-chair', description: 'A comfortable lounge chair perfect for relaxing after a long day.', offf: 'GET 15% OFF' },
    { id: 12, img: img28, name: 'Round Dining Table', price: 300.0, details: 'New in', slug: 'round-dining-table', description: 'A round dining table that creates a cozy dining atmosphere.', offf: 'GET 25% OFF' },
    { id: 13, img: img29, name: 'TV Stand', price: 120.0, details: 'New in', slug: 'tv-stand', description: 'A modern TV stand that keeps your entertainment area organized.', offf: 'GET 10% OFF' },
    { id: 14, img: img30, name: 'Area Rug', price: 100.0, details: 'New in', slug: 'area-rug', description: 'A plush area rug that adds warmth and comfort to any room.', offf: 'GET 20% OFF' },
    { id: 15, img: img31, name: 'Corner Sofa', price: 600.0, details: 'Top rated', slug: 'corner-sofa', description: 'A spacious corner sofa that provides ample seating for family and guests.', offf: 'GET 15% OFF' },
    { id: 16, img: img32, name: 'Dresser', price: 150.0, details: 'New in', slug: 'dresser', description: 'A sleek dresser with multiple drawers for efficient storage.', offf: 'GET 20% OFF' },
    { id: 17, img: img33, name: 'Patio Set', price: 400.0, details: 'New in', slug: 'patio-set', description: 'A stylish patio set that brings comfort to your outdoor space.', offf: 'GET 25% OFF' },
    { id: 18, img: img34, name: 'Rocking Chair', price: 200.0, details: 'Top rated', slug: 'rocking-chair', description: 'A classic rocking chair that offers a nostalgic and relaxing experience.', offf: 'GET 20% OFF' },
    { id: 19, img: img35, name: 'Wardrobe', price: 350.0, details: 'New in', slug: 'wardrobe', description: 'A spacious wardrobe with a modern design, providing ample storage.', offf: 'GET 25% OFF' },
    { id: 20, img: img36, name: 'Coffee Table', price: 80.0, details: 'Top rated', slug: 'coffee-table', description: 'A chic coffee table with a minimalist design, perfect for any living room.', offf: 'GET 30% OFF' },
    { id: 21, img: img37, name: 'Sideboard', price: 220.0, details: 'New in', slug: 'sideboard', description: 'A stylish sideboard with ample storage space for dining room essentials.', offf: 'GET 20% OFF' },
    { id: 22, img: img38, name: 'Bed Frame', price: 400.0, details: 'Top rated', slug: 'bed-frame', description: 'A modern bed frame with a sturdy design for a restful sleep.', offf: 'GET 15% OFF' },
    { id: 23, img: img39, name: 'Storage Bench', price: 150.0, details: 'New in', slug: 'storage-bench', description: 'A versatile storage bench that combines seating with hidden storage.', offf: 'GET 20% OFF' },
    { id: 25, img: img34, name: 'Vanity Set', price: 300.0, details: 'New in', slug: 'vanity-set', description: 'A chic vanity set that adds elegance to any bedroom.', offf: 'GET 25% OFF' },
    { id: 26, img: img41, name: 'Bar Stool', price: 90.0, details: 'New in', slug: 'bar-stool', description: 'A modern bar stool that brings style and comfort to your kitchen or bar.', offf: 'GET 15% OFF' },
];


export const collections = [
    { img: img19, name: 'Leather Chair', price: 'USD 200.0', details: 'New in' },
    { img: img13, name: 'Modern Sofa', price: 'USD 150.0', details: 'top rated' },
    { img: img11, name: 'Wooden Table', price: 'USD 120.0', details: 'top rated' },
    { img: img15, name: 'Office Chair', price: 'USD 180.0', details: 'New in' },
    { img: img22, name: 'Bookshelf', price: 'USD 90.0', details: 'New in' },
    { img: img17, name: 'Dining Set', price: 'USD 300.0', details: 'top rated' },
    { img: img18, name: 'Coffee Table', price: 'USD 80.0', details: 'top rated' },
    { img: img19, name: 'Lounge Chair', price: 'USD 250.0', details: 'New in' },
    { img: img22, name: 'Bed Frame', price: 'USD 400.0', details: 'New in' },
    { img: img21, name: 'Nightstand', price: 'USD 60.0', details: 'top rated' },
];

export const testimonials = [
    { id: 1, name: "John Doe", feedback: "UI/UX Designer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta nostrum, laudantium harum, quibusdam laborum vel laboriosam sed accusantium eaque libero.", ratingImg: star },
    { id: 2, name: "Jane Smith", feedback: "UI/UX Designer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta nostrum, laudantium harum, quibusdam laborum vel laboriosam sed accusantium eaque libero.", ratingImg: star },
    { id: 3, name: "Michael Johnson", feedback: "UI/UX Designer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta nostrum, laudantium harum, quibusdam laborum vel laboriosam sed accusantium eaque libero.", ratingImg: star },
    { id: 4, name: "Emily Davis", feedback: "Web Developer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta nostrum, laudantium harum, quibusdam laborum vel laboriosam sed accusantium eaque libero.", ratingImg: star },
    { id: 5, name: "Chris Brown", feedback: "Web Developer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta nostrum, laudantium harum, quibusdam laborum vel laboriosam sed accusantium eaque libero.", ratingImg: star },
    { id: 6, name: "Sarah Wilson", feedback: "Web Developer", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor soluta nostrum, laudantium harum, quibusdam laborum vel laboriosam sed accusantium eaque libero.", ratingImg: star },
];

export const companies = [
    { name: 'Exclusive Deal', p: 'Get weekly deals, valuable health information and more.', button: 'Sign Up', color: 'EDCBD2' },
    { name: 'Join Our Community', p: 'Get weekly deals, valuable health information and more.', button: 'JOIN FREE NOW', color: '80C4B7' },
    { name: 'Get our FREE app Now!', p: 'Get weekly deals, valuable health information and more.', button: 'GET IT ON GOOGLE', color: 'E3856B' },
];

export const logos = [
    { logo: logo1 },
    { logo: logo2 },
    { logo: logo3 },
    { logo: logo4 },
];

export const data = [
    { id: 1, name: "Business", value: 10 },
    { id: 2, name: "Cleaing", value: "08" },
    { id: 3, name: "Consultant", value: "37" },
    { id: 4, name: "Creative", value: "67" },
    { id: 5, name: "Technology", value: "67" },
];
