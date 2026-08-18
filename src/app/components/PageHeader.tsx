interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <section className="relative w-full bg-stone-50 px-4 py-24 sm:px-6 md:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl text-center">
        <h1 className="mb-6 text-5xl font-light leading-tight text-black sm:text-6xl md:text-7xl">
          {title}
        </h1>
        {description && (
          <p className="mx-auto max-w-2xl text-base leading-8 text-stone-700 sm:text-lg md:text-xl">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
