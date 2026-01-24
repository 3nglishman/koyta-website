type IconItem = {
  icon?: string;
  label?: string;
};

type IconGridBlockProps = {
  heading?: string;
  items?: IconItem[];
};

export default function IconGridBlock({ heading, items = [] }: IconGridBlockProps) {
  if (!items.length) return null;

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto text-center">
      {heading && (
        <h2 className="text-3xl font-bold text-[#c41e7f] mb-10">{heading}</h2>
      )}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-2">
            {item.icon && (
              <span className="text-4xl">{item.icon}</span>
            )}
            {item.label && (
              <span className="font-medium">{item.label}</span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
