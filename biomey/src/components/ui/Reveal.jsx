import { useInView } from '../../hooks/useInView';

/**
 * Envuelve cualquier contenido y lo anima con fade + slide
 * cuando entra/sale del viewport.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}) {
  const { ref, inView } = useInView();

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`
        transition-all duration-700 ease-out
        ${inView
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-12'}
        ${className}
      `}
    >
      {children}
    </Tag>
  );
}