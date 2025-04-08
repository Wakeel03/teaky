import { Heart, Plus, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

const Products = () => {
  const [productFilter, setProductFilter] = useState<string>("all");
  const filterBoxRef = useRef<HTMLUListElement>(null);

  const filter = (filterType: string) => {
    setProductFilter(filterType);

    if (!filterBoxRef.current) return;

    Array.from(filterBoxRef.current.children).forEach((li) => {
      const element = li as HTMLElement;

      if (filterType === "all") {
        element.style.display = "list-item";
      } else {
        if (element.classList.contains(filterType.toLowerCase())) {
          element.style.display = "none";
        } else {
          element.style.display = "list-item";
        }
      }
    });
  };

  return (
    <section className="section product" id="product" aria-label="product">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">Popular Products</h2>

          <ul className="filter-btn-list">
            <li className="filter-btn-item">
              <button
                className={`filter-btn Rs {productFilter == "all" && "active"}`}
                onClick={() => filter("all")}
              >
                All Products
              </button>
            </li>

            <li className="filter-btn-item">
              <button
                className={`filter-btn Rs {
                  productFilter == "accessory" && "active"
                }`}
                onClick={() => filter("accessory")}
              >
                Accessory
              </button>
            </li>

            <li className="filter-btn-item">
              <button
                className={`filter-btn Rs {
                  productFilter == "decoration" && "active"
                }`}
                onClick={() => filter("decoration")}
              >
                Decoration
              </button>
            </li>

            <li className="filter-btn-item">
              <button
                className={`filter-btn Rs {
                  productFilter == "furniture" && "active"
                }`}
                onClick={() => filter("furniture")}
              >
                Furniture
              </button>
            </li>
          </ul>
        </div>

        <ul
          className="grid-list product-list"
          data-filter="all"
          ref={filterBoxRef}
        >
          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-1.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Animi Dolor Pariatur"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>

                <ul className="badge-list">
                  <li>
                    <div className="badge orange">Sale</div>
                  </li>

                  <li>
                    <div className="badge cyan">-10%</div>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Animi Dolor Pariatur
                  </a>
                </h3>

                <div className="card-price">
                  <del className="del">Rs 19.00</del>

                  <data className="price" value="10">
                    Rs 10.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-2.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Art Deco Home"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>

                <div className="card-badge">Out of Stock</div>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Art Deco Home
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="30">
                    Rs 30.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-3.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Artificial potted plant"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Artificial potted plant
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="40">
                    Rs 40.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-4.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Dark Green Jug"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Dark Green Jug
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="17.10">
                    Rs 17.10
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-5.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Drinking Glasses"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Drinking Glasses
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="21">
                    Rs 21.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="furniture">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-6.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Helen Chair"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Helen Chair
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="69.50">
                    Rs 69.50
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-7.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="High Quality Glass Bottle"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    High Quality Glass Bottle
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="30.10">
                    Rs 30.10
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-8.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Living Room & Bedroom Lights"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Living Room & Bedroom Lights
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="45">
                    Rs 45.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="furniture">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-9.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Nancy Chair"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Nancy Chair
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="90">
                    Rs 90.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="furniture">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-10.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Simple Chair"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Simple Chair
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="40">
                    Rs 40.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-11.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Smooth Disk"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Smooth Disk
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="46">
                    Rs 46.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="furniture">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-12.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Table Black"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Table Black
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="67">
                    Rs 67.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="furniture">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-13.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Table Wood Pine"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Table Wood Pine
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="50">
                    Rs 50.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-14.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Teapot with black tea"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Teapot with black tea
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="25">
                    Rs 25.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-15.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Unique Decoration"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Unique Decoration
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="15">
                    Rs 15.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-16.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Vase Of Flowers"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Vase Of Flowers
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="77">
                    Rs 77.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-17.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Wood Eggs"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Wood Eggs
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="19">
                    Rs 19.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="decoration">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-18.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Wooden Box"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Wooden Box
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="27">
                    Rs 27.00
                  </data>
                </div>
              </div>
            </div>
          </li>

          <li className="accessory">
            <div className="product-card">
              <a
                href="#"
                className="card-banner img-holder has-before"
                style={{ "--width": "300px", "--height": "300px" } as React.CSSProperties}
              >
                <Image
                  src="/product-19.jpg"
                  width="300"
                  height="300"
                  loading="lazy"
                  alt="Wooden Cups"
                  className="img-cover"
                />

                <ul className="card-action-list">
                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <Plus strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to cart"
                      title="add to cart"
                    >
                      <ShoppingBag strokeWidth={1} />
                    </button>
                  </li>

                  <li>
                    <button
                      className="card-action-btn"
                      aria-label="add to whishlist"
                      title="add to whishlist"
                    >
                      <Heart strokeWidth={1} />
                    </button>
                  </li>
                </ul>
              </a>

              <div className="card-content">
                <h3 className="h3">
                  <a href="#" className="card-title">
                    Wooden Cups
                  </a>
                </h3>

                <div className="card-price">
                  <data className="price" value="29">
                    Rs 29.00
                  </data>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Products;
