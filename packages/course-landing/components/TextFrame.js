const TextFrame = (props) => (
  <div
    className="card p-3 mb-4"
    style={{
      background:
        "linear-gradient(145deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)",
      border: "none",
      borderRadius: "16px",
      padding: "2.5rem",
      boxShadow:
        "0 8px 30px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)",
      transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    }}
    onMouseOver={(e) => {
      e.currentTarget.style.boxShadow =
        "0 12px 40px rgba(0, 0, 0, 0.1), 0 4px 12px rgba(0, 0, 0, 0.06)";
      e.currentTarget.style.transform = "translateY(-4px)";
    }}
    onMouseOut={(e) => {
      e.currentTarget.style.boxShadow =
        "0 8px 30px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    {props.children}
  </div>
);

export default TextFrame;
