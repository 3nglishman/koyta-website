type TextBlockProps = {
  content: {
    heading?: string;
    body?: string;
    background_color?: 'white' | 'gray' | 'pink';
  };
};

export default function TextBlock({ content }: TextBlockProps) {
  const { heading, body, background_color = 'white' } = content || {};
  
  const bgClass = {
    white: 'bg-white',
    gray: 'bg-[#faf8f5]',
    pink: 'bg-pink-50'
  }[background_color];

  return (
    <section className={`w-full py-24 px-6 ${bgClass}`}>
      {heading && <h2 className="text-3xl font-bold text-[#c41e7f] mb-4 text-center">{heading}</h2>}
      {body && <div className="prose prose-lg text-gray-700 max-w-4xl mx-auto text-center">{body}</div>}
    </section>
  );
}
