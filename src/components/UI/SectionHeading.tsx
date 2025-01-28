export interface ISectionHeadingProps {
  title?: string;
  subTitle?: string;
  alignment?: "center" | "start" | "end";
}
export default function SectionHeading({
  title,
  subTitle,
}: ISectionHeadingProps) {
  return (
    <div>
      {title && <h2 className="section-heading">{title}</h2>}

      <p className="section-subHeading">{subTitle}</p>
    </div>
  );
}
