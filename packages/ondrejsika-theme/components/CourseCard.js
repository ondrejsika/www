import Link from "next/link";

const CourseCard = ({ course, lang, logo }) => {
  return (
    <div
      className="card"
      style={{
        background:
          "linear-gradient(145deg, #ffffff 0%, #f8f9fa 50%, #ffffff 100%)",
        border: "none",
        borderRadius: "16px",
        padding: "1rem",
        boxShadow:
          "0 8px 30px rgba(0, 0, 0, 0.06), 0 2px 8px rgba(0, 0, 0, 0.04)",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        height: "100%",
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
      <Link
        href={`/skoleni/${course.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        {logo && (
          <div
            style={{
              marginBottom: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              background: "#131480",
              borderRadius: "12px",
              padding: "1.5rem",
              height: "120px",
            }}
          >
            <img
              src={
                typeof logo === "string"
                  ? logo
                  : logo.src || logo.default || logo
              }
              alt={course.name[lang]}
              style={{
                maxWidth: "140px",
                maxHeight: "90px",
                objectFit: "contain",
              }}
            />
          </div>
        )}
        <h3
          style={{
            marginBottom: "1rem",
            fontSize: "1.5rem",
            fontWeight: "600",
            color: "#131480",
            textAlign: "center",
          }}
        >
          {course.name[lang]}
        </h3>
        <div style={{ marginBottom: "1.5rem" }}>
          <div
            style={{
              display: "inline-block",
              padding: "0.25rem 0.75rem",
              background: "#131480",
              color: "white",
              borderRadius: "20px",
              fontSize: "0.875rem",
              fontWeight: "500",
            }}
          >
            {course.length} {course.length == 1 ? "den" : "dny"}
          </div>
        </div>
        <div style={{ fontSize: "0.95rem", color: "#495057" }}>
          <div style={{ marginBottom: "0.5rem" }}>
            <strong>Otevřený termín:</strong>{" "}
            {course.price
              ? course.price.open["cz"] + " (za osobu)"
              : "Na dotaz"}
          </div>
          <div>
            <strong>In-house:</strong>{" "}
            {course.price
              ? course.price.in_house["cz"] + " (celkem)"
              : "Na dotaz"}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CourseCard;
