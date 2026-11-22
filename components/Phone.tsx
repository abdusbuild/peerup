import Image from "next/image";

/** Simple device frame around a real PeerUp app screenshot. */
export default function Phone({
  src,
  alt,
  className = "",
  priority = false,
  children,
}: {
  src?: string;
  alt?: string;
  className?: string;
  priority?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={
        "relative aspect-[720/1508] rounded-[2.6rem] bg-ink p-[9px] shadow-[0_40px_80px_-20px_rgba(67,73,170,0.45),0_0_0_1px_rgba(255,255,255,0.08)_inset] " +
        className
      }
    >
      <div className="relative h-full w-full overflow-hidden rounded-[2.1rem] bg-brand-50">
        {src && (
          <Image
            src={src}
            alt={alt ?? ""}
            fill
            sizes="(max-width: 768px) 70vw, 340px"
            className="object-cover object-top"
            priority={priority}
          />
        )}
        {children}
        <div className="absolute left-1/2 top-2 h-5 w-20 -translate-x-1/2 rounded-full bg-ink" />
      </div>
    </div>
  );
}
