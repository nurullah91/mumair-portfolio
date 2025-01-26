export interface ISectionHeadingProps {
  title?: string;
  subTitle?: string;
  alignment?: "center" | "start" | "end";
}
export default function SectionHeading({
  title,
  subTitle,
  alignment,
}: ISectionHeadingProps) {
  return (
    <div style={{ padding: "32px" }}>
      {title && (
        <h2
          style={{
            fontWeight: "600",
            textAlign: "center",
            color: "#000000",
            fontSize: "65px",
          }}
          className="section-heading"
        >
          {title}
        </h2>
      )}

      <p
        style={{
          fontWeight: "400",
          textAlign: alignment || "center",
          color: "#000000",
          fontSize: "21px",
          width: "90%",
          maxWidth: "932px",
          margin: "0px auto",
        }}
        className="section-subHeading"
      >
        {subTitle}
      </p>
    </div>
  );
}
