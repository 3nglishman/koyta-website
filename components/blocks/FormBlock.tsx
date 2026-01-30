type FormBlockProps = {
  content?: string; // Will contain the iframe embed code
  title?: string;
  subtitle?: string;
};

export default function FormBlock({ content, title, subtitle }: FormBlockProps) {
  if (!content) return null;

  // Strip any surrounding paragraph tags that Directus might add
  let cleanContent = content
    .replace(/<p>/g, '')
    .replace(/<\/p>/g, '')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .trim();

  // Make the iframe responsive by removing fixed width and adding responsive classes
  cleanContent = cleanContent.replace(/width="\d+"/, 'width="100%"');
  
  return (
    <section className="w-full py-12 md:py-16 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        {subtitle && (
          <p className="text-[#cca300] text-lg md:text-xl font-medium mb-2 text-center">
            {subtitle}
          </p>
        )}
        
        {title && (
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#cc007e] mb-8 text-center">
            {title}
          </h2>
        )}
        
        <div 
          className="w-full overflow-hidden"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />
      </div>
    </section>
  );
}
