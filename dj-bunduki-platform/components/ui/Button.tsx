import Link from 'next/link';

interface ButtonProps {
  href?: string;
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
}

export default function Button({ href, children, variant = 'primary' }: ButtonProps) {
  const styles = variant === 'primary'
    ? 'bg-yellow-500 text-black'
    : 'border border-yellow-500 text-white';

  const className = `${styles} rounded-full px-8 py-3 font-bold transition hover:scale-105`;

  if (href) {
    return <Link href={href} className={className}>{children}</Link>;
  }

  return <button className={className}>{children}</button>;
}
