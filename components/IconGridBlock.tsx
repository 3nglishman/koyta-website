type IconItem = {
  icon?: string;
  title?: string;
  description?: string;
};

type IconGridBlockProps = {
  heading?: string;
  items?: IconItem[];
};

export default function IconGridBlock({ heading, items = [] }: IconGridBlockProps) {
  if (!items.length) return null;

  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {heading && (
          <h2 className="text-4xl font-bold text-[#cc007e] mb-12 text-center">{heading}</h2>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {items.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {item.icon && (
                <div className="text-6xl text-[#cc007e] mb-4">{item.icon}</div>
              )}
              {item.title && (
                <h3 className="text-2xl font-bold text-[#cca300] mb-3">{item.title}</h3>
              )}
              {item.description && (
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
