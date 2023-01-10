export default function Menu() {
  return (
    <div className="blog-part is-menu">
      <a href="#" className="blog-menu">
        Work
        <svg
          fill="none"
          stroke="currentColor"
          strokeWidth=".7"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-arrow-up-right"
          viewBox="0 0 24 24"
        >
          <path d="M7 17L17 7M7 7h10v10" />
        </svg>
      </a>
      <a href="#" className="blog-menu">
        Studio
      </a>
      <a href="#" className="blog-menu">
        Blog
      </a>
      <a href="#" className="blog-menu">
        Contact
      </a>
      <a href="#" className="blog-menu mention">
        @MagazineDope
      </a>
      <a href="#" className="blog-menu subscribe">
        Subscribe
      </a>
    </div>
  );
}
