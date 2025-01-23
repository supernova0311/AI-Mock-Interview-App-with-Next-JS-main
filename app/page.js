import { Button } from "@/components/ui/button";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/dashboard');
  };

  return (
    <div>
      <h1>hello guys</h1>
      <Button onClick={handleClick}>start here</Button>
    </div>
  );
}