import "./CardWidget.css";

function CardWidget({ cartCount }) {
  return (
    <button
      type="button"
      className="cart-widget"
      aria-label={`Cart with ${cartCount} items`}
    >
      <span className="cart-widget__icon" aria-hidden="true">
        <svg viewBox="0 0 24 24" role="img" focusable="false">
          <path d="M7 6h14l-2 9H8L5 3H2" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="9" cy="20" r="1.6" />
          <circle cx="17" cy="20" r="1.6" />
        </svg>
      </span>
      <span className="cart-widget__count">{cartCount}</span>
    </button>
  );
}

export default CardWidget;
