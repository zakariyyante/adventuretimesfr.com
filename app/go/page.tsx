import { redirect } from 'next/navigation';
import { brands } from '../data/brands';

interface GoPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function GoPage({ searchParams }: GoPageProps) {
  const params = await searchParams;
  const f = typeof params.f === 'string' ? parseInt(params.f) : null;
  const gclid = typeof params.gclid === 'string' ? params.gclid : "";

  if (f === null) {
    redirect('/');
  }

  const brand = brands.find(b => b.f === f);

  if (!brand) {
    redirect('/');
  }

  // Construct final URL with GCLID if provided
  const finalUrl = gclid ? `${brand.url}${gclid}` : brand.url;

  redirect(finalUrl);
}
