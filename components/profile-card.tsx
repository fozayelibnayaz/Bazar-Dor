import SignOutButton from "@/components/signout-button";

type Props = {
  name: string;
  email: string;
  image?: string | null;
};

export default function ProfileCard({ name, email, image }: Props) {
  const initial = name?.charAt(0) ?? "ব";

  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-line bg-white p-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        {image ? (
          <img src={image} alt={name} className="h-16 w-16 rounded-full object-cover" />
        ) : (
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-brand text-xl font-bold text-white">
            {initial}
          </span>
        )}
        <span>
          <span className="block text-lg font-bold text-ink">{name}</span>
          <span className="block text-sm text-muted">{email}</span>
        </span>
      </div>

      <SignOutButton />
    </div>
  );
}