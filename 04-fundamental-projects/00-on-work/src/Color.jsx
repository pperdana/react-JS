const Color = ({ item, copyToClipboard }) => {
  const { hex, weight } = item;
  return (
    <div
      className="color-item"
      style={{
        background: `#${hex}`,
      }}
      onClick={() => copyToClipboard(`#${hex}`)}
    >
      <span className="weight-color">{weight}%</span>
      <span className="hex-color">#{hex}</span>
    </div>
  );
};

export default Color;
