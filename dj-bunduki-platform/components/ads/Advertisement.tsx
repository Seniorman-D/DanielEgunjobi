export default function Advertisement({
  image,
  code,
}: {
  image?: string;
  code?: string;
}) {
  return (
    <div className="my-10 flex justify-center">
      {image && (
        <img
          src={image}
          alt="Advertisement"
          className="rounded-xl w-full"
        />
      )}

      {code && (
        <div dangerouslySetInnerHTML={{ __html: code }} />
      )}
    </div>
  );
}
