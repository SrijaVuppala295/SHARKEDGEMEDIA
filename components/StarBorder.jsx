import './StarBorder.css';

const StarBorder = ({
  as: Component = 'button',
  className = '',
  color = '#f5c77a',
  speed = '4s',
  thickness = 1.5,
  children,
  ...rest
}) => {
  return (
    <Component
      className={`star-border-container ${className}`}
      style={{
        padding: `${thickness}px`,
        '--star-color': color,
        ...rest.style
      }}
      {...rest}
    >
      {/* Bottom glow runner */}
      <div
        className="border-gradient-bottom"
        style={{
          background: `radial-gradient(circle,
            var(--star-color) 0%,
            color-mix(in srgb, var(--star-color), transparent 20%) 30%,
            color-mix(in srgb, var(--star-color), transparent 70%) 45%,
            transparent 65%)`,
          animationDuration: speed
        }}
      />

      {/* Top glow runner */}
      <div
        className="border-gradient-top"
        style={{
          background: `radial-gradient(circle,
            var(--star-color) 0%,
            color-mix(in srgb, var(--star-color), transparent 20%) 30%,
            color-mix(in srgb, var(--star-color), transparent 70%) 45%,
            transparent 65%)`,
          animationDuration: speed
        }}
      />

      <div className="inner-content">
        {children}
      </div>
    </Component>
  );
};

export default StarBorder;
